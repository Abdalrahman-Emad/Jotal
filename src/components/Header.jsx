"use client"

import { useState } from "react"
import { Menu, X, Phone, Globe } from "lucide-react"
import { useLanguage } from "./language-context"
import Image from "next/image"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { language, toggleLanguage } = useLanguage()

    const content = {
        ar: {
            services: "خدماتنا",
            about: "من نحن",
            contact: "تواصل معنا",
            bookNow: "احجز الآن",
            call: "اتصل الآن",
            menuButton: "قائمة التنقل",
            closeMenu: "إغلاق القائمة",
            languageToggle: "تغيير اللغة إلى الإنجليزية",
        },
        en: {
            services: "Our Services",
            about: "About Us",
            contact: "Contact Us",
            bookNow: "Book Now",
            call: "Call Now",
            menuButton: "Navigation menu",
            closeMenu: "Close menu",
            languageToggle: "Switch to Arabic",
        },
    }

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-green-100">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/logo.webP"
                            alt="Jotal Logo - شركة جوتال للتنظيف والتعقيم"
                            width={60}
                            height={60}
                            className="object-contain rounded-lg"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden lg:flex items-center gap-8"
                        role="navigation"
                        aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"}
                    >
                        <a
                            href="#services"
                            className="text-gray-700 hover:text-green-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1"
                        >
                            {content[language].services}
                        </a>
                        <a
                            href="#about"
                            className="text-gray-700 hover:text-green-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1"
                        >
                            {content[language].about}
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-green-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1"
                        >
                            {content[language].contact}
                        </a>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            aria-label={content[language].languageToggle}
                        >
                            <Globe size={16} aria-hidden="true" />
                            <span className="text-sm font-medium">{language === "ar" ? "EN" : "AR"}</span>
                        </button>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:0542661100"
                            className="flex items-center gap-2 px-4 py-2 text-green-700 border border-green-700 rounded-full hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            aria-label={`${content[language].call} 0542661100`}
                        >
                            <Phone size={16} aria-hidden="true" />
                            <span className="text-sm font-medium">{content[language].call}</span>
                        </a>
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                            {content[language].bookNow}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        aria-label={isMenuOpen ? content[language].closeMenu : content[language].menuButton}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div id="mobile-menu" className="lg:hidden mt-4 py-4 border-t border-gray-200">
                        <nav
                            className="flex flex-col gap-4"
                            role="navigation"
                            aria-label={language === "ar" ? "التنقل المحمول" : "Mobile navigation"}
                        >
                            <a
                                href="#services"
                                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content[language].services}
                            </a>
                            <a
                                href="#hero"
                                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content[language].about}
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content[language].contact}
                            </a>
                            <div className="flex gap-3 pt-4">
                                <a
                                    href="tel:0542661100"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-green-700 border border-green-700 rounded-full hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    <Phone size={16} aria-hidden="true" />
                                    <span className="text-sm font-medium">{content[language].call}</span>
                                </a>
                                <button
                                    onClick={toggleLanguage}
                                    className="px-4 py-2 rounded-full border border-gray-300 hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    aria-label={content[language].languageToggle}
                                >
                                    {language === "ar" ? "EN" : "AR"}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
