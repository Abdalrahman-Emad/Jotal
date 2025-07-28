"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "./language-context"

const Testimonials = () => {
  const { language } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const content = {
    ar: {
      title: "آراء عملائنا",
      subtitle: "ما يقوله عملاؤنا عن خدماتنا المتميزة",
      nextButton: "التالي",
      prevButton: "السابق",
      testimonials: [
        {
          id: 1,
          name: "أحمد محمد السعيد",
          role: "مالك منزل - جدة",
          feedback: "خدمة رائعة ومتميزة! فريق جوتال نظف منزلي بشكل مثالي وبأسعار معقولة. أنصح الجميع بالتعامل معهم.",
          rating: 5,
        },
        {
          id: 2,
          name: "سارة علي الأحمد",
          role: "مديرة شركة - جدة",
          feedback: "تجربة ممتازة مع خدمات التعقيم والتطهير. الفريق محترف جداً والنتائج فاقت توقعاتي بكثير.",
          rating: 5,
        },
        {
          id: 3,
          name: "محمد عبد الرحمن",
          role: "مالك فيلا - جدة",
          feedback: "خدمة تنسيق الحدائق كانت رائعة. حولوا حديقتي إلى جنة صغيرة. شكراً لفريق جوتال المبدع.",
          rating: 5,
        },
        {
          id: 4,
          name: "فاطمة الزهراني",
          role: "ربة منزل - جدة",
          feedback: "أفضل شركة تنظيف تعاملت معها. دقة في المواعيد، جودة عالية، وأسعار منافسة. ممتازون!",
          rating: 5,
        },
      ],
      stats: [
        { number: "500+", label: "عميل راضي" },
        { number: "1000+", label: "خدمة مكتملة" },
        { number: "4.9", label: "تقييم العملاء" },
        { number: "24/7", label: "دعم العملاء" },
      ],
    },
    en: {
      title: "Client Testimonials",
      subtitle: "What our clients say about our exceptional services",
      nextButton: "Next",
      prevButton: "Previous",
      testimonials: [
        {
          id: 1,
          name: "Ahmed Mohammed Al-Saeed",
          role: "Homeowner - Jeddah",
          feedback:
            "Excellent and outstanding service! Jotal team cleaned my house perfectly at reasonable prices. I recommend everyone to deal with them.",
          rating: 5,
        },
        {
          id: 2,
          name: "Sarah Ali Al-Ahmad",
          role: "Company Manager - Jeddah",
          feedback:
            "Excellent experience with sterilization and disinfection services. The team is very professional and the results exceeded my expectations.",
          rating: 5,
        },
        {
          id: 3,
          name: "Mohammed Abdul Rahman",
          role: "Villa Owner - Jeddah",
          feedback:
            "The landscaping service was amazing. They turned my garden into a small paradise. Thanks to the creative Jotal team.",
          rating: 5,
        },
        {
          id: 4,
          name: "Fatima Al-Zahrani",
          role: "Housewife - Jeddah",
          feedback:
            "The best cleaning company I have dealt with. Punctual, high quality, and competitive prices. Excellent!",
          rating: 5,
        },
      ],
      stats: [
        { number: "500+", label: "Happy Clients" },
        { number: "1000+", label: "Completed Services" },
        { number: "4.9", label: "Client Rating" },
        { number: "24/7", label: "Customer Support" },
      ],
    },
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === content[language].testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? content[language].testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{content[language].title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[language].subtitle}</p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <article className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-green-200" aria-hidden="true">
              <Quote size={60} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div
                className="flex items-center justify-center mb-6"
                role="img"
                aria-label={`${content[language].testimonials[currentTestimonial].rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-yellow-400 text-yellow-400 mx-1" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{content[language].testimonials[currentTestimonial].feedback}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-200 bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">
                    {content[language].testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {content[language].testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600">{content[language].testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={content[language].prevButton}
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label={content[language].nextButton}
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </article>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-12" role="tablist" aria-label="Testimonial navigation">
          {content[language].testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                index === currentTestimonial ? "bg-green-600" : "bg-gray-300"
              }`}
              role="tab"
              aria-selected={index === currentTestimonial}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content[language].testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                index === currentTestimonial ? "ring-2 ring-green-500" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentTestimonial(index)
                }
              }}
              aria-label={`Read testimonial from ${testimonial.name}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-3" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{testimonial.feedback}</p>
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {content[language].stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
