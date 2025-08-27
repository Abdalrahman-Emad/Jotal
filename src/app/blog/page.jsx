"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../../components/language-context"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { motion } from "framer-motion"
import Script from "next/script"
import { getAllBlogs } from "../blog-data"

export default function BlogsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      pageTitle: "Expert Pest Control Blog",
      pageSubtitle: "Professional insights, tips, and solutions for all your pest control needs in Jeddah",
      by: "By",
      readTime: "Read time:",
      readMore: "Read Article",
      allArticles: "All Articles",
      featuredTag: "Featured",
    },
    ar: {
      pageTitle: "مدونة خبراء مكافحة الآفات",
      pageSubtitle: "رؤى مهنية ونصائح وحلول لجميع احتياجات مكافحة الآفات في جدة",
      by: "بواسطة",
      readTime: "وقت القراءة:",
      readMore: "اقرأ المقال",
      allArticles: "جميع المقالات",
      featuredTag: "مميز",
    },
  }

  // Get all articles for the current language
  const articles = getAllBlogs(language)

  return (
    <>
      {/* SEO Head */}
      {/* ✅ SEO Schema */}
      <Script type="application/ld+json" id="ld-json-blog-page">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: content[language].pageTitle,
          description: content[language].pageSubtitle,
          url: `https://jotalpestcontrol.com/blog`,
          inLanguage: language === "ar" ? "ar" : "en",
          publisher: {
            "@type": "Organization",
            name: "Expert Pest Control",
            logo: {
              "@type": "ImageObject",
              url: "https://jotalpestcontrol.com/logo.webp",
            },
          },
          blogPost: articles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: `https://jotalpestcontrol.com/blog/${article.slug}`,
            datePublished: article.date,
            author: { "@type": "Person", name: article.author },
          })),
        })}
      </Script>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <header className={`text-center mb-16 ${language === "ar" ? "rtl" : "ltr"}`}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6"
            >
              {content[language].pageTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              {content[language].pageSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"
            />
          </header>

          {/* Articles Grid */}
          <section>
            <h2 className={`text-2xl font-bold text-slate-800 mb-8 ${language === "ar" ? "text-right" : "text-left"}`}>
              {content[language].allArticles}
            </h2>

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
                      priority={index < 6}
                      itemProp="image"
                    />
                    {article.featured && (
                      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Tag size={14} className="inline mr-1" />
                        {content[language].featuredTag}
                      </div>
                    )}
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

                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className={`flex flex-wrap gap-2 mb-6 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More Link */}
                    <div className="mt-auto">
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
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
