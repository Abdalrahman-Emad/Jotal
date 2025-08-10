"use client"

import { useState } from "react"
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "./language-context"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { useFormik } from "formik"
import * as Yup from "yup"

const Contact = () => {
  const { language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const content = {
    ar: {
      title: "تواصل معنا",
      subtitle: "احجز خدمتك الآن أو احصل على استشارة مجانية",
      form: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        service: "نوع الخدمة",
        message: "رسالتك",
        submit: "إرسال الطلب",
        submitting: "جاري الإرسال...",
        success: "تم إرسال طلبك بنجاح! سنتواصل معك قريباً.",
        selectService: "اختر الخدمة",
        messagePlaceholder: "اكتب رسالتك هنا...",
        thankYou: "شكراً لك!",
      },
      services: ["مكافحة الحشرات","تنظيف المنازل والفلل", "التعقيم والتطهير", "تنسيق الحدائق", "استشارة مجانية"],
      validation: {
        nameRequired: "الاسم مطلوب",
        nameMin: "الاسم يجب أن يكون أكثر من حرفين",
        nameMax: "الاسم يجب أن يكون أقل من 50 حرف",
        phoneRequired: "رقم الهاتف مطلوب",
        phoneInvalid: "رقم الهاتف غير صالح (يجب أن يبدأ بـ 05 ويحتوي على 10 أرقام)",
        serviceRequired: "يرجى اختيار نوع الخدمة",
        emailInvalid: "البريد الإلكتروني غير صالح",
        messageMax: "الرسالة يجب أن تكون أقل من 500 حرف",
      },
      contact: {
        phone: "اتصل بنا",
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        address: "العنوان",
        hours: "ساعات العمل",
        emergency: "خدمة طوارئ 24/7",
        emergencyDesc: "للحالات الطارئة، اتصل بنا في أي وقت",
      },
      info: {
        address: "المملكة العربية السعودية - جدة - وديع البستاني، الصفا",
        email: "info@jotal.sa",
        hours: "السبت - الخميس: 9:00 ص - 11:30 م",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Book your service now or get a free consultation",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        service: "Service Type",
        message: "Your Message",
        submit: "Send Request",
        submitting: "Sending...",
        success: "Your request has been sent successfully! We will contact you soon.",
        selectService: "Select Service",
        messagePlaceholder: "Write your message here...",
        thankYou: "Thank You!",
      },
      services: ["Pest Control","House & Villa Cleaning", "Sterilization & Disinfection", "Landscaping", "Free Consultation"],
      validation: {
        nameRequired: "Name is required",
        nameMin: "Name must be at least 2 characters",
        nameMax: "Name must be less than 50 characters",
        phoneRequired: "Phone number is required",
        phoneInvalid: "Invalid phone number (must start with 05 and contain 10 digits)",
        serviceRequired: "Please select a service",
        emailInvalid: "Invalid email address",
        messageMax: "Message must be less than 500 characters",
      },
      contact: {
        phone: "Call Us",
        whatsapp: "WhatsApp",
        email: "Email",
        address: "Address",
        hours: "Working Hours",
        emergency: "24/7 Emergency Service",
        emergencyDesc: "For emergencies, call us anytime",
      },
      info: {
        address: "Saudi Arabia - Jeddah - Wadi Al-Bustani, Al-Safa",
        email: "info@jotal.sa",
        hours: "Saturday - Thursday: 9:00 AM - 11:30 PM",
      },
    },
  }

  const phoneNumbers = ["0542661100", "0549547577", "0541145759"]

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, content[language].validation.nameMin)
      .max(50, content[language].validation.nameMax)
      .required(content[language].validation.nameRequired)
      .matches(
        /^[a-zA-Zأ-ي\s]+$/,
        language === "ar" ? "الاسم يجب أن يحتوي على أحرف فقط" : "Name should contain only letters",
      ),

    phone: Yup.string()
      .required(content[language].validation.phoneRequired)
      .matches(/^05[0-9]{8}$/, content[language].validation.phoneInvalid),

    email: Yup.string().email(content[language].validation.emailInvalid),

    service: Yup.string().required(content[language].validation.serviceRequired),

    message: Yup.string().max(500, content[language].validation.messageMax),
  })

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await emailjs.send(
          "service_ny25eh8", // Service ID
          "template_j277tih", // Template ID
          {
            name: values.name,
            phone: values.phone,
            email: values.email,
            service: values.service,
            message: values.message,
          },
          "MYYuFDdoaXnfiDfbg", // Public key
        )

        setIsSubmitted(true)
        toast.success(
          language === "ar"
            ? "تم إرسال الرسالة بنجاح، سنعاود التواصل معك قريبًا."
            : "Message sent successfully. We'll contact you soon.",
        )

        resetForm()

        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } catch (error) {
        console.error("Error sending email:", error)
        toast.error(
          language === "ar" ? "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى." : "Something went wrong. Please try again.",
        )
      } finally {
        setSubmitting(false)
      }
    },
  })

  // Helper function to get input classes based on validation state
  const getInputClasses = (fieldName) => {
    const baseClasses = "w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent text-black transition-all"

    if (formik.touched[fieldName] && formik.errors[fieldName]) {
      return `${baseClasses} border-red-300 focus:ring-red-500 bg-red-50`
    } else if (formik.touched[fieldName] && !formik.errors[fieldName]) {
      return `${baseClasses} border-green-300 focus:ring-green-500 bg-green-50`
    } else {
      return `${baseClasses} border-gray-300 focus:ring-green-500`
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{content[language].title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{content[language].form.thankYou}</h3>
                <p className="text-gray-600">{content[language].form.success}</p>
              </div>
            ) : (
              <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      {content[language].form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={getInputClasses("name")}
                      aria-required="true"
                      aria-invalid={formik.touched.name && formik.errors.name ? "true" : "false"}
                      aria-describedby={formik.touched.name && formik.errors.name ? "name-error" : undefined}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                        <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">!</span>
                        {formik.errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      {content[language].form.phone} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={getInputClasses("phone")}
                      placeholder="05XXXXXXXX"
                      aria-required="true"
                      aria-invalid={formik.touched.phone && formik.errors.phone ? "true" : "false"}
                      aria-describedby={formik.touched.phone && formik.errors.phone ? "phone-error" : undefined}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p id="phone-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                        <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">!</span>
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={getInputClasses("email")}
                    aria-invalid={formik.touched.email && formik.errors.email ? "true" : "false"}
                    aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">!</span>
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Service Field */}
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    {content[language].form.service} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formik.values.service}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={getInputClasses("service")}
                    aria-required="true"
                    aria-invalid={formik.touched.service && formik.errors.service ? "true" : "false"}
                    aria-describedby={formik.touched.service && formik.errors.service ? "service-error" : undefined}
                  >
                    <option value="">{content[language].form.selectService}</option>
                    {content[language].services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {formik.touched.service && formik.errors.service && (
                    <p id="service-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">!</span>
                      {formik.errors.service}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    {content[language].form.message}
                    <span className="text-sm text-gray-500 ml-2">({formik.values.message.length}/500)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows="4"
                    className={`${getInputClasses("message")} resize-none`}
                    placeholder={content[language].form.messagePlaceholder}
                    aria-invalid={formik.touched.message && formik.errors.message ? "true" : "false"}
                    aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center gap-1" role="alert">
                      <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">!</span>
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <Send size={20} aria-hidden="true" />
                  {formik.isSubmitting ? content[language].form.submitting : content[language].form.submit}
                </button>

                {/* Form Summary */}
                {Object.keys(formik.errors).length > 0 && formik.submitCount > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
                    <h4 className="text-red-800 font-semibold mb-2">
                      {language === "ar" ? "يرجى تصحيح الأخطاء التالية:" : "Please correct the following errors:"}
                    </h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      {Object.entries(formik.errors).map(([field, error]) => (
                        <li key={field}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Contact Information - Keep the existing contact info section */}
          <div className="space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid gap-6">
              {/* Phone Numbers */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{content[language].contact.phone}</h3>
                </div>
                <div className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block bg-gray-50 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors font-medium text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      aria-label={`Call ${phone}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageCircle size={24} className="text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{content[language].contact.whatsapp}</h3>
                </div>
                <a
                  href={`https://wa.me/966${phoneNumbers[0].substring(1)}`}
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${phoneNumbers[0]}`}
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  {phoneNumbers[0]}
                </a>
              </div>

              {/* Email */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{content[language].contact.email}</h3>
                </div>
                <a
                  href={`mailto:${content[language].info.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  {content[language].info.email}
                </a>
              </div> */}

              {/* Location & Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MapPin size={24} className="text-purple-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{content[language].contact.address}</h3>
                      <p className="text-gray-600">{content[language].info.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Clock size={24} className="text-orange-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{content[language].contact.hours}</h3>
                      <p className="text-gray-600">{content[language].info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
