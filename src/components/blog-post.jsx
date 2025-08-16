"use client"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./language-context"
import { Calendar, User, ArrowLeft, Clock, Tag } from "lucide-react"
import { motion } from "framer-motion"

const BlogPost = ({ enArticle, arArticle }) => {
  const { language } = useLanguage()

  // Select the appropriate article based on current language
  const article = language === "ar" ? arArticle : enArticle

  // Fallback to English if Arabic article doesn't exist
  if (!article) {
    const fallbackArticle = enArticle || arArticle
    if (!fallbackArticle) return <div>Article not found</div>
  }

  const content = {
    en: {
      backToBlogs: "← Back to Articles",
      by: "By",
      readTime: "Read time:",
      tags: "Tags:",
      relatedArticles: "Related Articles",
    },
    ar: {
      backToBlogs: "← العودة إلى المقالات",
      by: "بواسطة",
      readTime: "وقت القراءة:",
      tags: "العلامات:",
      relatedArticles: "مقالات ذات صلة",
    },
  }

  const currentArticle = article || enArticle || arArticle

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href="/#blog"
          className={`inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors ${language === "ar" ? "flex-row-reverse" : ""}`}
        >
          <ArrowLeft size={20} className={language === "ar" ? "rotate-180" : ""} />
          <span>{content[language].backToBlogs}</span>
        </Link>
      </motion.div>

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        {/* Featured Image */}
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={currentArticle.image || "/placeholder.svg?height=400&width=800&query=pest control article"}
            alt={currentArticle.title}
            width={800}
            height={400}
            className="w-full h-80 md:h-96 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Article Meta */}
        <div
          className={`flex flex-wrap items-center gap-6 mb-6 text-slate-600 ${language === "ar" ? "flex-row-reverse" : ""}`}
        >
          <div className="flex items-center gap-2">
            <User size={18} className="text-emerald-600" />
            <span className="font-medium">
              {content[language].by} {currentArticle.author}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-emerald-600" />
            <time dateTime={currentArticle.date}>{currentArticle.date}</time>
          </div>
          {currentArticle.readTime && (
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-emerald-600" />
              <span>{currentArticle.readTime}</span>
            </div>
          )}
        </div>

        {/* Article Title */}
        <h1
          className={`text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          {currentArticle.title}
        </h1>

        {/* Tags */}
        {currentArticle.tags && currentArticle.tags.length > 0 && (
          <div className={`flex flex-wrap items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
            <div className="flex items-center gap-2 text-slate-600">
              <Tag size={16} className="text-emerald-600" />
              <span className="font-medium">{content[language].tags}</span>
            </div>
            {currentArticle.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`prose prose-lg max-w-none ${language === "ar" ? "text-right" : "text-left"}`}
      >
        <div
          className="text-slate-700 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: currentArticle.full }}
        />
      </motion.article>

      {/* Back to Articles Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-slate-200"
      >
        <Link
          href="/#blog"
          className={`inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors ${language === "ar" ? "flex-row-reverse" : ""}`}
        >
          <ArrowLeft size={20} className={language === "ar" ? "rotate-180" : ""} />
          <span>{content[language].backToBlogs}</span>
        </Link>
      </motion.footer>
    </div>
  )
}

export default BlogPost
