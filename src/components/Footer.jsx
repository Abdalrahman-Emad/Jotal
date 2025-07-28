"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "./language-context"
import Image from "next/image"

const Footer = () => {
  const { language, toggleLanguage } = useLanguage()

  const content = {
    ar: {
      company: "شركة جوتال العالمية",
      description:
        "نقدم خدمات تنظيف المنازل والفلل، التعقيم والتطهير، وتنسيق الحدائق بأعلى معايير الجودة والاحترافية في المملكة العربية السعودية.",
      quickLinks: "روابط سريعة",
      services: "خدماتنا",
      contact: "تواصل معنا",
      workingHours: "ساعات العمل",
      address: "جدة - وديع البستاني، الصفا - المملكة العربية السعودية",
      email: "info@jotal.sa",
      whatsapp: "واتساب",
      callUs: "اتصل بنا",
      rights: "جميع الحقوق محفوظة",
      followUs: "تابعنا على",
      links: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        contact: "تواصل معنا",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
      },
      servicesList: {
        cleaning: "تنظيف المنازل والفلل",
        sterilization: "التعقيم والتطهير",
        landscaping: "تنسيق الحدائق",
      },
      hours: {
        weekdays: "السبت - الخميس: 9:00 ص - 11:30 م",
      },
    },
    en: {
      company: "Jotal Company",
      description:
        "We provide house and villa cleaning, sterilization and disinfection, and landscaping services with the highest standards of quality and professionalism in Saudi Arabia.",
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact Us",
      workingHours: "Working Hours",
      address: "Saudi Arabia - Jeddah - Wadi Al-Bustani, Al-Safa",
      email: "info@jotal.sa",
      whatsapp: "WhatsApp",
      callUs: "Call Us",
      rights: "All Rights Reserved",
      followUs: "Follow Us",
      links: {
        home: "Home",
        about: "About Us",
        services: "Services",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
      },
      servicesList: {
        cleaning: "House & Villa Cleaning",
        sterilization: "Sterilization & Disinfection",
        landscaping: "Landscaping",
      },
      hours: {
        weekdays: "Saturday - Thursday: 9:00 AM - 11:30 PM",
      },
    },
  }

  const phoneNumbers = ["0542661100", "0549547577", "0541145759"]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.jpg" alt="Jotal Logo" width={48} height={48} className="object-contain rounded-lg" />
              <div>
                <h3 className="text-2xl font-bold text-white">Jotal</h3>
                <p className="text-green-300 text-sm" lang="en">
                  jotal.sa
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">{content[language].description}</p>

            {/* Social Media */}
            <div>
              {/* <h4 className="font-semibold mb-3 text-green-300">{content[language].followUs}</h4> */}
              <div className="flex gap-4">
                {/* {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-400", label: "Facebook" },
                  { icon: Twitter, href: "#", color: "hover:text-blue-300", label: "Twitter" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400", label: "Instagram" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-500", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors ${social.color} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))} */}
              </div> 
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-xl font-bold mb-6 text-green-300">{content[language].quickLinks}</h4>
            <nav>
              <ul className="space-y-3">
                {Object.entries(content[language].links).map(([key, value]) => (
                  <li key={key}>
                    <a
                      href={key === "home" ? "#" : `#${key}`}
                      className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
                    >
                      <span
                        className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all"
                        aria-hidden="true"
                      ></span>
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-300">{content[language].services}</h4>
            <nav>
              <ul className="space-y-3">
                {Object.entries(content[language].servicesList).map(([key, value]) => (
                  <li key={key}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-green-300 transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
                    >
                      <span
                        className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all"
                        aria-hidden="true"
                      ></span>
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Working Hours */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-green-300 flex items-center gap-2">
                <Clock size={18} aria-hidden="true" />
                {content[language].workingHours}
              </h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>{content[language].hours.weekdays}</p>
                <p>{content[language].hours.friday}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-300">{content[language].contact}</h4>

            <div className="space-y-4">
              {/* Phone Numbers */}
              <div>
                <h5 className="font-semibold mb-3 text-green-300 flex items-center gap-2">
                  <Phone size={18} aria-hidden="true" />
                  {content[language].callUs}
                </h5>
                <div className="space-y-2">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-300 hover:text-green-300 transition-colors text-sm bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={`Call ${phone}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <h5 className="font-semibold mb-3 text-green-300 flex items-center gap-2">
                  <MessageCircle size={18} aria-hidden="true" />
                  {content[language].whatsapp}
                </h5>
                <a
                  href={`https://wa.me/966${phoneNumbers[0].substring(1)}`}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${phoneNumbers[0]}`}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {phoneNumbers[0]}
                </a>
              </div>

              {/* Email */}
              {/* <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-green-400" aria-hidden="true" />
                <a
                  href={`mailto:${content[language].email}`}
                  className="hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
                >
                  {content[language].email}
                </a>
              </div> */}

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-green-400" aria-hidden="true" />
                <span>{content[language].address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jotal. {content[language].rights}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm" lang="en">
                jotal.sa
              </span>
              <div className="w-1 h-1 bg-gray-600 rounded-full" aria-hidden="true"></div>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-gray-400 hover:text-green-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
                aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              >
                <Globe size={16} aria-hidden="true" />
                {language === "ar" ? "English" : "العربية"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
