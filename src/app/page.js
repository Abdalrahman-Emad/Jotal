"use client"

import dynamic from "next/dynamic"
import { LanguageProvider } from "@/components/language-context"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Head from "next/head"

const Services = dynamic(() => import("@/components/services"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-green-500 animate-pulse" />
    </div>
  ),
})

const Testimonials = dynamic(() => import("@/components/testimonials"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-yellow-500 animate-pulse" />
    </div>
  ),
})

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-blue-500 animate-pulse" />
    </div>
  ),
})

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => (
    <div className="flex justify-center items-center py-16">
      <div className="h-6 w-6 rounded-full bg-gray-400 animate-pulse" />
    </div>
  ),
})

export default function Home() {
  return (
    <>
          <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jotal",
              image: "https://jotal.sa/your-image.webp",
              url: "https://jotal.sa",
              telephone: "+966-xxxxxxxxx",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
                addressLocality: "Riyadh",
              },
              description:
                "شركة جوتال تقدم خدمات تنظيف وتعقيم وتنسيق حدائق في السعودية",
            }),
          }}
        />
      </Head>

    <LanguageProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
    </>
  )
}
