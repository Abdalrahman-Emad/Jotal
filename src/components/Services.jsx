"use client"

import { useState } from "react"
import { Home, Droplets, Trees, Shield, Clock, Award, Phone } from "lucide-react"
import { useLanguage } from "./language-context"

const Services = () => {
  const { language } = useLanguage()
  const [activeService, setActiveService] = useState(0)

  const content = {
    ar: {
      title: "خدماتنا المتميزة",
      subtitle: "نقدم مجموعة شاملة من الخدمات عالية الجودة",
      cta: "احجز الآن",
      whyChooseTitle: "لماذا تختار جوتال؟",
      bookServiceTitle: "احجز خدمتك الآن",
      bookServiceDesc: "اتصل بنا للحصول على استشارة مجانية وعرض سعر مخصص",
      services: [
        {
          title: "تنظيف المنازل والفلل",
          description: "خدمات تنظيف شاملة للمنازل والفلل بأحدث المعدات والمواد الآمنة",
          features: ["تنظيف عميق", "تعقيم الأسطح", "تنظيف النوافذ", "تنظيف السجاد"],
          icon: Home,
          color: "blue",
        },
        {
          title: "التعقيم والتطهير",
          description: "خدمات تعقيم وتطهير متقدمة للحماية من الجراثيم والفيروسات",
          features: ["تعقيم بالبخار", "مواد معتمدة", "تطهير شامل", "ضمان الأمان"],
          icon: Droplets,
          color: "green",
        },
        {
          title: "تنسيق الحدائق",
          description: "تصميم وتنسيق الحدائق وأعمال البستنة والصيانة الدورية",
          features: ["تصميم المناظر", "زراعة النباتات", "أنظمة الري", "الصيانة الدورية"],
          icon: Trees,
          color: "emerald",
        },
      ],
      whyChoose: [
        {
          icon: Shield,
          title: "ضمان الجودة",
          desc: "نضمن أعلى معايير الجودة في جميع خدماتنا",
        },
        {
          icon: Clock,
          title: "خدمة سريعة",
          desc: "استجابة سريعة وخدمة في الوقت المحدد",
        },
        {
          icon: Award,
          title: "فريق محترف",
          desc: "فريق مدرب ومعتمد بخبرة واسعة",
        },
      ],
    },
    en: {
      title: "Our Premium Services",
      subtitle: "We provide a comprehensive range of high-quality services",
      cta: "Book Now",
      whyChooseTitle: "Why Choose Jotal?",
      bookServiceTitle: "Book Your Service Now",
      bookServiceDesc: "Call us for a free consultation and custom quote",
      services: [
        {
          title: "House & Villa Cleaning",
          description: "Comprehensive cleaning services for homes and villas with modern equipment and safe materials",
          features: ["Deep Cleaning", "Surface Sterilization", "Window Cleaning", "Carpet Cleaning"],
          icon: Home,
          color: "blue",
        },
        {
          title: "Sterilization & Disinfection",
          description: "Advanced sterilization and disinfection services for protection against germs and viruses",
          features: ["Steam Sterilization", "Certified Materials", "Complete Disinfection", "Safety Guarantee"],
          icon: Droplets,
          color: "green",
        },
        {
          title: "Landscaping",
          description: "Garden design and landscaping with gardening work and regular maintenance",
          features: ["Landscape Design", "Plant Installation", "Irrigation Systems", "Regular Maintenance"],
          icon: Trees,
          color: "emerald",
        },
      ],
      whyChoose: [
        {
          icon: Shield,
          title: "Quality Guarantee",
          desc: "We guarantee the highest quality standards in all our services",
        },
        {
          icon: Clock,
          title: "Fast Service",
          desc: "Quick response and on-time service",
        },
        {
          icon: Award,
          title: "Professional Team",
          desc: "Trained and certified team with extensive experience",
        },
      ],
    },
  }

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-700",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      button: "bg-emerald-600 hover:bg-emerald-700",
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{content[language].title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[language].subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {content[language].services.map((service, index) => {
            const IconComponent = service.icon
            const colors = colorClasses[service.color]

            return (
              <article
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${colors.border} group cursor-pointer`}
                onClick={() => setActiveService(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveService(index)
                  }
                }}
                aria-label={`${service.title} - ${service.description}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent size={32} className={colors.text} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${colors.button} rounded-full`} aria-hidden="true"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full ${colors.button} text-white py-3 rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                  onClick={(e) => {
                    e.stopPropagation()
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {content[language].cta}
                </button>

                {/* Decorative Element */}
                <div
                  className={`absolute top-4 right-4 w-20 h-20 ${colors.bg} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}
                  aria-hidden="true"
                ></div>
              </article>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">{content[language].whyChooseTitle}</h3>
              <div className="space-y-6">
                {content[language].whyChoose.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">{content[language].bookServiceTitle}</h4>
                <p className="mb-6">{content[language].bookServiceDesc}</p>
                <div className="space-y-3">
                  <a
                    href="tel:0542661100"
                    className="flex items-center gap-3 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Call 0542661100"
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>0542661100</span>
                  </a>
                  <a
                    href="tel:0549547577"
                    className="flex items-center gap-3 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Call 0549547577"
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>0549547577</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
