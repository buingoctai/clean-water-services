import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ nước sạch | Giải pháp lọc nước chất lượng cao",
  description: "Cung cấp các sản phẩm và dịch vụ nước sạch chất lượng cao. Máy lọc nước, bộ lọc, hệ thống lọc nước toàn diện cho gia đình và doanh nghiệp.",
  openGraph: {
    title: "Dịch vụ nước sạch | Giải pháp lọc nước chất lượng cao",
    description: "Cung cấp các sản phẩm và dịch vụ nước sạch chất lượng cao. Máy lọc nước, bộ lọc, hệ thống lọc nước toàn diện cho gia đình và doanh nghiệp.",
    images: ['/logo v1.jpg'],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dịch vụ nước sạch | Giải pháp lọc nước chất lượng cao",
    description: "Cung cấp các sản phẩm và dịch vụ nước sạch chất lượng cao. Máy lọc nước, bộ lọc, hệ thống lọc nước toàn diện.",
    images: ['/logo v1.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'vi': '/',
    },
  },
  keywords: "nước sạch, máy lọc nước, bộ lọc, hệ thống lọc nước, dịch vụ nước sạch, giải pháp nước sạch",
};

export default function Home() {
  return (
    <>
    <Hero />
    <IntroducingSection />
    <CategoryMenu />
    <ProductsSection />
    </>
  );
}
