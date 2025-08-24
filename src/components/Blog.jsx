"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { Calendar, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Script from "next/script"

const Blog = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      sectionTitle: "Expert Pest Control Insights",
      sectionSubtitle: "Professional guidance and proven solutions for Jeddah's unique pest challenges",
      by: "By",
      readTime: "Read time:",
      readMore: "Read Full Article",
      ctaService: "Book Service Now",
      articles: [
        {
          id: 1,
          slug: "cockroach-control-jeddah",
          lang: "en",
          title: "Cockroach Control in Jeddah – Jotal International",
          excerpt:
            "Discover Jotal International’s cockroach control services in Jeddah using the latest safe pesticides at affordable prices for all customers.",
          seoTitle: "Cockroach Control in Jeddah | Jotal International",
          seoDescription:
            "Jotal International provides cockroach control services in Jeddah with the latest safe pesticides, professional staff, and guaranteed effective extermination at competitive prices.",
          canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/en/blog/cockroach-control-jeddah`,
          image: "/article1.webp",
          author: "Jotal International",
          date: "2025-08-24",
          tags: ["Cockroach Control", "Jeddah", "Jotal"],
          readTime: "3 minutes",
        },
        {
          id: 2,
          slug: "rat-control-jeddah",
          lang: "en",
          title: "Rat Control in Jeddah – Jotal International",
          excerpt:
            "Jotal International provides professional rat control services in Jeddah using safe pesticides approved by the Saudi Ministry of Health, ensuring complete extermination with no return.",
          seoTitle: "Rat Control in Jeddah | Jotal International",
          seoDescription:
            "Get the best rat control services in Jeddah with Jotal International. We use licensed pesticides and a professional team to ensure full extermination at competitive prices.",
          canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/en/blog/rat-control-jeddah`,
          image: "/article2.webp",
          author: "Jotal International",
          date: "2025-08-24",
          tags: ["Rat Control", "Jeddah", "Jotal"],
          readTime: "4 minutes",
        },
        {
          id: 3,
          slug: "best-pest-control-jeddah",
          lang: "en",
          title: "Best Pest Control Company in Jeddah – Jotal Global",
          excerpt:
            "Jotal Global is considered the best pest control company in Jeddah, with years of experience, licensed safe pesticides, and advanced plans that guarantee complete elimination of pests at competitive prices.",
          seoTitle: "Best Pest Control in Jeddah | Jotal Global Company",
          seoDescription:
            "Jotal Global offers professional pest control services in Jeddah using the latest safe pesticides and a specialized team, with full extermination guarantee and follow-up services at competitive prices.",
          canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/en/blog/best-pest-control-jeddah`,
          image: "/article3.webp",
          author: "Jotal International",
          date: "2025-08-24",
          tags: ["Pest Control", "Jeddah", "Jotal"],
          readTime: "4 min",

        }
      ],
    },
    ar: {
      sectionTitle: "رؤى خبراء مكافحة الآفات",
      sectionSubtitle: "إرشادات مهنية وحلول مثبتة لتحديات الآفات الفريدة في جدة",
      by: "بواسطة",
      readTime: "وقت القراءة:",
      readMore: "اقرأ المقال كاملاً",
      ctaService: "احجز خدمة الآن",
      articles: [
        {
          id: 1,
          slug: "cockroach-control-jeddah",
          lang: "ar",
          title: "مكافحة الصراصير بجدة – جوتال العالمية",
          excerpt:
            "تعرف على خدمات شركة جوتال العالمية لمكافحة الصراصير بجدة باستخدام أحدث المبيدات الآمنة وبأسعار مناسبة لجميع العملاء.",
          seoTitle: "مكافحة الصراصير بجدة | شركة جوتال العالمية",
          seoDescription:
            "شركة جوتال العالمية تقدم خدمات مكافحة الصراصير بجدة باستخدام أحدث المبيدات الآمنة، عمالة محترفة، وضمان إبادة فعالة بأسعار تنافسية.",
          canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/blog/cockroach-control-jeddah`,
          image: "/article1.webp",
          author: "شركة جوتال العالمية",
          date: "2025-08-24",
          tags: ["مكافحة الصراصير", "جدة", "جوتال"],
          readTime: "3 دقائق",
        },
        {
          id: 2,
          slug: "rat-control-jeddah",
          lang: "ar",
          title: "مكافحة الفئران بجدة – جوتال العالمية",
          excerpt:
            "شركة جوتال العالمية تقدم خدمة مكافحة الفئران بجدة باستخدام مبيدات آمنة مرخصة من وزارة الصحة السعودية مع ضمان إبادة نهائية وبدون عودة.",
          seoTitle: "مكافحة الفئران بجدة | شركة جوتال العالمية",
          seoDescription:
            "احصل على أفضل خدمات مكافحة الفئران بجدة من شركة جوتال العالمية باستخدام أحدث المبيدات المرخصة والفريق المحترف مع أسعار تنافسية وضمان إبادة كاملة.",
          canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/blog/rat-control-jeddah`,
          image: "/article2.webp",
          author: "شركة جوتال العالمية",
          date: "2025-08-24",
          tags: ["مكافحة الفئران", "جدة", "جوتال"],
          readTime: "4 دقائق",
        },
        {
          id: 3,
          slug: "best-pest-control-jeddah",
          lang: "ar",
          title: "أفضل شركة مكافحة حشرات بجدة – جوتال العالمية",
          excerpt:
            "جوتال العالمية تُعد أفضل شركة مكافحة حشرات بجدة، بخبرة تمتد لسنوات، وباستخدام مبيدات آمنة ومرخصة، وخطط متطورة تضمن القضاء التام على الحشرات بأسعار تنافسية.",
          seoTitle: "أفضل شركة مكافحة حشرات بجدة | شركة جوتال العالمية",
          seoDescription:
            "شركة جوتال العالمية تقدم خدمات مكافحة الحشرات في جدة باستخدام أحدث المبيدات الآمنة والفريق المتخصص مع ضمان إبادة كاملة وخدمات متابعة بأسعار تنافسية.",
          canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/blog/best-pest-control-jeddah`,
          image: "/article3.webp",
          author: "شركة جوتال العالمية",
          date: "2025-08-24",
          tags: ["مكافحة الحشرات", "جدة", "جوتال"],
          readTime: "4 دقائق",
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
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col h-full"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* صورة المقال */}
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg?height=280&width=400&query=pest control article"}
                  alt={article.title}
                  width={400}
                  height={280}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index === 0}
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* محتوى المقال */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Article Meta */}
                <div
                  className={`flex items-center gap-4 mb-4 text-sm text-slate-500 ${language === "ar" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-emerald-600" />
                    <span itemProp="author">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-600" />
                    <time dateTime={article.date} itemProp="datePublished">
                      {article.date}
                    </time>
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold mb-4 text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors ${language === "ar" ? "text-right" : "text-left"}`}
                  itemProp="headline"
                >
                  {article.title}
                </h3>

                <p
                  className={`text-slate-600 mb-6 leading-relaxed flex-grow ${language === "ar" ? "text-right" : "text-left"}`}
                  itemProp="description"
                >
                  {article.excerpt}
                </p>

                {/* Actions ثابتة تحت */}
                <div
                  className={`flex items-center justify-between mt-auto ${language === "ar" ? "flex-row-reverse" : ""}`}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className={`inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors ${language === "ar" ? "flex-row-reverse" : ""}`}
                    itemProp="url"
                  >
                    <span>{content[language].readMore}</span>
                    <ArrowRight
                      size={16}
                      className={`transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`}
                    />
                  </Link>

                  {/* CTA Service Button */}
                  <Link
                    href="/#contact"
                    className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow hover:bg-emerald-700 transition"
                  >
                    {content[language].ctaService}
                  </Link>
                </div>
              </div>

              {/* Structured Data */}
              <Script type="application/ld+json" id={`ld-json-${article.id}`}>
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": article.title,
                  "image": [`https://jotalpestcontrol.com${article.image}`],
                  "author": {
                    "@type": "Organization",
                    "name": article.author
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Expert Pest Control",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://jotalpestcontrol.com/logo.webp"
                    }
                  },
                  "datePublished": article.date,
                  "dateModified": article.updatedAt || article.date,
                  "description": article.excerpt,
                  "inLanguage": language === "ar" ? "ar" : "en",
                  "keywords": article.tags ? article.tags.join(", ") : "",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://jotalpestcontrol.com/blog/${article.slug}`
                  }
                }
                )}
              </Script>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog
