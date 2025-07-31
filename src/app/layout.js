import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

// تحميل الخط
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title:
    "Jotal - خدمات التنظيف والتعقيم وتنسيق الحدائق | House Cleaning, Sterilization & Landscaping Services",
  description:
    "شركة جوتال تقدم خدمات تنظيف المنازل والفلل، التعقيم والتطهير، وتنسيق الحدائق بأعلى معايير الجودة في السعودية | Jotal provides professional house cleaning, sterilization and landscaping services in Saudi Arabia",
  keywords:
    "تنظيف منازل، تعقيم، تطهير، تنسيق حدائق، جوتال، السعودية، house cleaning, sterilization, disinfection, landscaping, Jotal, Saudi Arabia",
  authors: [{ name: "Jotal" }],
  creator: "Jotal",
  publisher: "Jotal",
  robots: "index, follow",
  openGraph: {
    title: "Jotal - Professional Cleaning & Landscaping Services",
    description:
      "Expert house cleaning, sterilization, and landscaping services in Saudi Arabia",
    url: "https://jotalpestcontrol.com",
    siteName: "Jotal",
    locale: "ar_SA",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotal - Professional Cleaning Services",
    description: "Expert cleaning, sterilization, and landscaping services",
  },
  alternates: {
    canonical: "https://jotalpestcontrol.com",
  },
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
