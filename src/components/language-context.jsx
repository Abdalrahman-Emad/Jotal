"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar")

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}
