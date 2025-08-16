"use client";

import dynamic from "next/dynamic";
import { LanguageProvider } from "../components/language-context";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";
import BlogPost from "@/components/blog-post";

const Services = dynamic(() => import("../components/Services"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-green-500 animate-pulse" />
    </div>
  ),
});

const Testimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-yellow-500 animate-pulse" />
    </div>
  ),
});

const Blog = dynamic(() => import("../components/Blog"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-red-500 animate-pulse" />
    </div>
  ),
});


const Contact = dynamic(() => import("../components/contact"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-blue-500 animate-pulse" />
    </div>
  ),
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-gray-400 animate-pulse" />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          جوتال | شركة مكافحة الحشرات بجدة - مكافحة الصراصير والنمل والفئران
        </title>

        <meta
          name="description"
          content="شركة جوتال لمكافحة الحشرات بجدة تقدم أفضل خدمات مكافحة الصراصير، النمل الأبيض، الفئران، بق الفراش، الحشرات الزاحفة، ورش المبيدات المنزلية بأمان وفعالية عالية."
        />
        <meta
          name="keywords"
          content="مكافحة الحشرات جدة, شركة مكافحة الحشرات في جدة, مكافحة الصراصير جدة, رش مبيدات بجدة, افضل شركة مكافحة حشرات جدة, شركات مكافحة الحشرات بجدة, مكافحة بق الفراش جدة, مكافحة النمل الأبيض جدة, مكافحة الفئران جدة, مبيدات حشرية جدة, مكافحة الحشرات المنزلية جدة, مكافحة الحشرات الزاحفة جدة"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jotal" />

        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17408853706"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17408853706');
      `,
          }}
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon1.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Jotal" />
        <meta name="application-name" content="Jotal" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="شركة مكافحة الحشرات بجدة | جوتال" />
        <meta
          property="og:description"
          content="خدمات احترافية في مكافحة الحشرات والصراصير والنمل الأبيض والفئران في جدة. اتصل بنا الآن!"
        />
        <meta property="og:url" content="https://jotalpestcontrol.com" />
        <meta
          property="og:image"
          content="https://jotalpestcontrol.com/logo.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="شركة مكافحة الحشرات بجدة | جوتال" />
        <meta
          name="twitter:description"
          content="خدمة مكافحة الحشرات والصراصير بجدة باستخدام أفضل المبيدات الآمنة."
        />

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jotal",
              image: "https://jotalpestcontrol.com/logo.webp",
              url: "https://jotalpestcontrol.com",
              telephone: "+966542661100",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressLocality: "Jeddah",
              },
              description:
                "شركة جوتال تقدم خدمات مكافحة الحشرات بجدة بما في ذلك الصراصير، النمل، الفئران، ورش المبيدات المنزلية.",
            }),
          }}
        />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jotal",
              url: "https://jotalpestcontrol.com",
              logo: "https://jotalpestcontrol.com/logo.webp",
            }),
          }}
        />
      </Head>

          <Hero />
          <Services />
          <Testimonials />
          <Blog />
          <Contact />
    </>
  );
}
