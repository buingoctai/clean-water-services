"use client";

import React from 'react';
import { useLanguage } from '@/app/i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="flex items-center gap-x-2 font-semibold">
        <span>{t('common.languageSwitcher')}</span>
        <span className="text-xs">({language.toUpperCase()})</span>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
        <li className={language === 'en' ? 'bg-blue-100 rounded' : ''}>
          <button onClick={() => setLanguage('en')}>{t('common.english')}</button>
        </li>
        <li className={language === 'vi' ? 'bg-blue-100 rounded' : ''}>
          <button onClick={() => setLanguage('vi')}>{t('common.vietnamese')}</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
