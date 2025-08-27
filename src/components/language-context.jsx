"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar")

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("preferred-language", language)

    // Update document direction for RTL/LTR
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const switchLanguage = (newLanguage) => {
    if (newLanguage === "en" || newLanguage === "ar") {
      setLanguage(newLanguage)
    }
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  }

  const value = {
    language,
    setLanguage,
    switchLanguage,
    toggleLanguage,
    isArabic: language === "ar",
    isEnglish: language === "en",
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export default LanguageContext
