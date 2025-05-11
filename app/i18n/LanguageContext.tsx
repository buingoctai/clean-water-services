"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'vi';
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Dictionary type
type Dictionary = {
  [key: string]: string | Dictionary;
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with English as default
  const [language, setLanguage] = useState<Language>('en');
  const [dictionary, setDictionary] = useState<Dictionary>({});

  // Load dictionary based on selected language
  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const dict = await import(`./dictionaries/${language}.json`);
        setDictionary(dict);
      } catch (error) {
        console.error('Failed to load dictionary:', error);
      }
    };

    loadDictionary();
    
    // Save language preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  // Initialize language from localStorage if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = dictionary;

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
