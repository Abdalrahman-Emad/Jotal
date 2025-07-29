"use client"

import Image from "next/image"
import { Phone, MessageCircle, CheckCircle, Star } from "lucide-react"
import { useLanguage } from "./language-context"

const Hero = () => {
  const { language } = useLanguage()

  const content = {
    ar: {
      title: "حلول شاملة لمكافحة الحشرات و النظافة والتعقيم ",
      subtitle: "مع جوتال العالمية",
      description:
        "نقدم خدمات مكافحة الحشرات، وتنظيف المنازل والفلل، التعقيم والتطهير، وأعمال تنسيق الحدائق بأعلى معايير الجودة والاحترافية",
      cta: "احجز خدمتك الآن",
      call: "اتصل بنا",
      whatsapp: "واتساب",
      features: ["خدمة 24/7", "فريق محترف", "أسعار منافسة", "ضمان الجودة"],
      rating: "تقييم 4.9 من 5 نجوم",
      clients: "500+ عميل راضي",
      heroImageAlt: "خدمات جوتال المتخصصة في التنظيف والتعقيم وتنسيق الحدائق",
    },
    en: {
      title: "Complete Solutions for Cleaning & Sterilization",
      subtitle: "with Jotal International",
      description:
        "We provide house and villa cleaning, sterilization and disinfection, Pest Control and landscaping services with the highest standards of quality and professionalism",
      cta: "Book Your Service Now",
      call: "Call Us",
      whatsapp: "WhatsApp",
      features: ["24/7 Service", "Professional Team", "Competitive Prices", "Quality Guarantee"],
      rating: "4.9 out of 5 stars rating",
      clients: "500+ Happy Clients",
      heroImageAlt: "Jotal professional cleaning, sterilization and landscaping services",
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-12 md:py-20 overflow-hidden">
      {/* Background Pattern - Decorative only */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className={`${language === "ar" ? "text-right" : "text-left"} space-y-6`}>
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-green-100">
              <div className="flex items-center gap-1" role="img" aria-label={content[language].rating}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm text-gray-600">{content[language].rating}</span>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                {content[language].title}
                <br />
                <span className="text-green-600 relative">{content[language].subtitle}</span>
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">{content[language].description}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {content[language].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" aria-hidden="true" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-center"
              >
                {content[language].cta}
              </a>

              <div className="flex gap-3">
                <a
                  href="tel:0542661100"
                  className="flex items-center gap-2 px-6 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label={`${content[language].call} 0542661100`}
                >
                  <Phone size={20} aria-hidden="true" />
                  <span className="font-semibold">{content[language].call}</span>
                </a>

                <a
                  href="https://wa.me/966542661100"
                  className="flex items-center gap-2 px-6 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label={`${content[language].whatsapp} 966542661100`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  <span className="font-semibold">{content[language].whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
              <span>{content[language].clients}</span>
              <span aria-hidden="true">•</span>
              <span lang="en">jotal.sa</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-3xl"
                aria-hidden="true"
              ></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <Image
                  src="/hero-image.WebP"
                  alt={content[language].heroImageAlt}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">100%</p>
                  <p className="text-xs text-gray-600">{language === "ar" ? "رضا العملاء" : "Customer Satisfaction"}</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">24/7</p>
                  <p className="text-xs text-gray-600">{language === "ar" ? "خدمة العملاء" : "Customer Service"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
