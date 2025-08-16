"use client"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { Calendar, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const Blog = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      sectionTitle: "Expert Pest Control Insights",
      sectionSubtitle: "Professional guidance and proven solutions for Jeddah's unique pest challenges",
      by: "By",
      readTime: "Read time:",
      readMore: "Read Full Article",
      articles: [
        {
          id: 1,
          slug: "ant-control-jeddah-coastal-climate",
          title: "Complete Guide to Ant Control in Jeddah's Coastal Climate",
          excerpt:
            "Discover professional strategies to eliminate ant infestations in Jeddah's unique coastal environment. Learn about local ant species and proven treatment methods.",
          image: "/article1.webp",
          author: "Eng. Youssef Alashry",
          date: "December 15, 2024",
          tags: ["Ant Control", "Jeddah", "Pest Management"],
          readTime: "8 min read",
        },
        {
          id: 2,
          slug: "seasonal-pest-prevention-jeddah",
          title: "Seasonal Pest Prevention: Protecting Your Jeddah Home Year-Round",
          excerpt:
            "Master the art of seasonal pest control in Jeddah. Learn when different pests are most active and how to prepare your home for each season.",
          image: "/article2.webp",
          author: "Eng. Youssef Alashry",
          date: "December 10, 2024",
          tags: ["Prevention", "Seasonal", "Home Protection"],
          readTime: "6 min read",
        },
        {
          id: 3,
          slug: "termite-protection-jeddah-properties",
          title: "Termite Protection for Jeddah Properties: Complete Defense Guide",
          excerpt:
            "Safeguard your Jeddah property from termite damage with our comprehensive protection strategies. Learn about local termite species and advanced treatment options.",
          image: "/article3.webp",
          author: "Eng. Youssef Alashry",
          date: "December 5, 2024",
          tags: ["Termites", "Property Protection", "Prevention"],
          readTime: "10 min read",
        },
      ],
    },
    ar: {
      sectionTitle: "رؤى خبراء مكافحة الآفات",
      sectionSubtitle: "إرشادات مهنية وحلول مثبتة لتحديات الآفات الفريدة في جدة",
      by: "بواسطة",
      readTime: "وقت القراءة:",
      readMore: "اقرأ المقال كاملاً",
      articles: [
        {
          id: 1,
          slug: "ant-control-jeddah-coastal-climate",
          title: "دليل شامل لمكافحة النمل في مناخ جدة الساحلي",
          excerpt:
            "اكتشف الاستراتيجيات المهنية للقضاء على غزو النمل في البيئة الساحلية الفريدة لجدة. تعرف على أنواع النمل المحلية وطرق العلاج المثبتة.",
          image: "/article1.webp",
          author: "م. يوسف العشري",
          date: "15 ديسمبر 2024",
          tags: ["مكافحة النمل", "جدة", "إدارة الآفات"],
          readTime: "8 دقائق قراءة",
        },
        {
          id: 2,
          slug: "seasonal-pest-prevention-jeddah",
          title: "الوقاية الموسمية من الآفات: حماية منزلك في جدة على مدار السنة",
          excerpt:
            "أتقن فن مكافحة الآفات الموسمية في جدة. تعلم متى تكون الآفات المختلفة أكثر نشاطاً وكيفية تحضير منزلك لكل موسم.",
          image: "/article2.webp",
          author: "م. يوسف العشري",
          date: "10 ديسمبر 2024",
          tags: ["الوقاية", "موسمي", "حماية المنزل"],
          readTime: "6 دقائق قراءة",
        },
        {
          id: 3,
          slug: "termite-protection-jeddah-properties",
          title: "حماية من النمل الأبيض لممتلكات جدة: دليل الدفاع الشامل",
          excerpt:
            "احم ممتلكاتك في جدة من أضرار النمل الأبيض باستراتيجيات الحماية الشاملة لدينا. تعرف على أنواع النمل الأبيض المحلية وخيارات العلاج المتقدمة.",
          image: "/article3.webp",
          author: "م. يوسف العشري",
          date: "5 ديسمبر 2024",
          tags: ["النمل الأبيض", "حماية الممتلكات", "الوقاية"],
          readTime: "10 دقائق قراءة",
        },
      ],
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{content[language].sectionTitle}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content[language].sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {content[language].articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg?height=280&width=400&query=pest control article"}
                  alt={article.title}
                  width={400}
                  height={280}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                {/* Article Meta */}
                <div
                  className={`flex items-center gap-4 mb-4 text-sm text-slate-500 ${language === "ar" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-emerald-600" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-600" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold mb-4 text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors ${language === "ar" ? "text-right" : "text-left"}`}
                >
                  {article.title}
                </h3>

                <p className={`text-slate-600 mb-6 leading-relaxed ${language === "ar" ? "text-right" : "text-left"}`}>
                  {article.excerpt}
                </p>

                <div className={`flex items-center justify-between ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className={`inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/btn ${language === "ar" ? "flex-row-reverse" : ""}`}
                  >
                    <span>{content[language].readMore}</span>
                    <ArrowRight
                      size={16}
                      className={`transition-transform group-hover/btn:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`}
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
