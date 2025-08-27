import { notFound } from "next/navigation"
import BlogPost from "../../../components/blog-post"
import { getBlogBySlug, blogData } from "../../blog-data"

// Generate metadata for SEO including JSON-LD structured data
export async function generateMetadata({ params }) {
  const { slug } = await params
  const enArticle = getBlogBySlug(slug, "en")
  const arArticle = getBlogBySlug(slug, "ar")
  const article = enArticle || arArticle

  if (!article) {
    return {
      title: "Article Not Found | Expert Pest Control Insights",
      description: "The requested article could not be found.",
    }
  }

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: [`https://jotalpestcontrol.com${article.image}`],
    author: {
      "@type": "Organization",
      name: article.author,
      url: `https://jotalpestcontrol.com/authors/${article.authorSlug || "team"}`,
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
    keywords: article.tags.join(", "),
    inLanguage: article.lang || "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jotalpestcontrol.com/blog/${article.slug}`,
    },
  }

  return {
    title: `${article.title} | Expert Pest Control Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.imageAlt }],
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `https://jotalpestcontrol.com/blog/${slug}`,
      languages: {
        "en-US": `/en/blog/${slug}`,
        "ar-SA": `/ar/blog/${slug}`,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    other: {
      scripts: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(jsonLd),
        },
      ],
    },
  }
}

// Generate static params for SSG
export async function generateStaticParams() {
  const enParams = blogData.en.map((article) => ({ slug: article.slug }))
  const arParams = blogData.ar.map((article) => ({ slug: article.slug }))
  return [...enParams, ...arParams]
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const enArticle = getBlogBySlug(slug, "en")
  const arArticle = getBlogBySlug(slug, "ar")

  if (!enArticle && !arArticle) notFound()

  return <BlogPost enArticle={enArticle} arArticle={arArticle} />
}
