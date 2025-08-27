"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { Calendar, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Script from "next/script"
import { getFeaturedBlogs } from "../app/blog-data"

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
      viewAllArticles: "View All Articles", // Added view all articles text
    },
    ar: {
      sectionTitle: "رؤى خبراء مكافحة الآفات",
      sectionSubtitle: "إرشادات مهنية وحلول مثبتة لتحديات الآفات الفريدة في جدة",
      by: "بواسطة",
      readTime: "وقت القراءة:",
      readMore: "اقرأ المقال كاملاً",
      ctaService: "احجز خدمة الآن",
      viewAllArticles: "عرض جميع المقالات", // Added view all articles text in Arabic
    },
  }

  const articles = getFeaturedBlogs(language, 3)

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
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col h-full"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg?height=280&width=400&query=pest control article"}
                  alt={article.imageAlt || article.title}
                  width={400}
                  height={280}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index === 0}
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Article Content */}
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

                {/* Actions */}
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
                  headline: article.title,
                  image: [`https://jotalpestcontrol.com${article.image}`],
                  author: {
                    "@type": "Organization",
                    name: article.author,
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Expert Pest Control",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://jotalpestcontrol.com/logo.webp",
                    },
                  },
                  datePublished: article.date,
                  dateModified: article.updatedAt || article.date,
                  description: article.excerpt,
                  inLanguage: language === "ar" ? "ar" : "en",
                  keywords: article.tags ? article.tags.join(", ") : "",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://jotalpestcontrol.com/blog/${article.slug}`,
                  },
                })}
              </Script>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className={`inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <span>{content[language].viewAllArticles}</span>
            <ArrowRight
              size={20}
              className={`transition-transform group-hover:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
