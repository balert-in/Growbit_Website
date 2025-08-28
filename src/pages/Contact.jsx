import { motion } from "framer-motion"
import { useState } from "react"
import svgPaths from "../assets/ContactSVG"
import imgImg1 from "/contactImg.webp"
import Select from "../components/Select"
import { EMAIL_MAX_LENGTH, FIRSTNAME_MAX_LENGTH, LASTNAME_MAX_LENGTH, MESSAGE_MAX_LENGTH, PHONE_REGEX, SERVICE_OPTIONS, WHY_CHOOSE_FEATURES } from "../utils/constant"

const fadeInBlur = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

function ContactHeroSection() {
  return (
    <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[574px] bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
      <motion.div
        className="absolute bg-[#d7e48a] opacity-10 rounded-bl-[68px] rounded-br-[32px] rounded-tl-[58px] rounded-tr-[41px] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 right-4 top-28 md:top-[238px] lg:right-auto lg:left-[1024px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bg-[#75ccc3] opacity-10 rounded-bl-[68px] rounded-br-[32px] rounded-tl-[58px] rounded-tr-[41px] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-80 lg:h-80 left-0 top-52 lg:left-[-80px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bg-[#9cd4af] opacity-10 rounded-bl-[68px] rounded-br-[32px] rounded-tl-[40px] md:rounded-tl-[58px] rounded-tr-[41px] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-96 lg:h-96 top-80 left-48 md:top-[-80px] lg:left-[1136px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center">
        <motion.h1
          className="text-center mb-4 sm:mb-6"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Get in </span>
          <span className="text-[#9cd4af] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Touch</span>
        </motion.h1>
        <motion.p
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-4"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to scale your business? Let's connect and discuss how GrowBit can transform your growth journey.
        </motion.p>
      </div>
    </section>
  )
}

function ContactInfoSection() {
  const contactCards = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p3b8c2500} fill="white" />
        </svg>
      ),
      title: "Phone",
      description: "Call us directly for immediate assistance",
      contacts: ["+91 90638 90638", "+91 87654 32109"],
      availability: "Mon-Fri: 9AM-6PM IST",
      bgGradient: "bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]",
      borderColor: "border-[#9cd4af]",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p25660f00} fill="white" />
        </svg>
      ),
      title: "Email",
      description: "Send us a detailed message",
      contacts: ["hello@growbit.in", "support@growbit.in"],
      availability: "Response within 24 hours",
      bgGradient: "bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]",
      borderColor: "border-[#75ccc3]",
    },
    {
      icon: (
        <svg className="w-5 h-6" viewBox="0 0 18 24" fill="none">
          <path d={svgPaths.p11786ee0} fill="white" />
        </svg>
      ),
      title: "Address",
      description: "Visit our office",
      contacts: ["Vasavi Colony B, Plot No- 18 B", "Vikrampuri Colony, Karkhana", "Secunderabad, Telangana 500015, India"],
      availability: "Open for meetings by appointment",
      bgGradient: "bg-gradient-to-r from-[#d7e48a] to-[#9cd4af]",
      borderColor: "border-[#d7e48a]",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute bg-[#6adbd0] opacity-5 rounded-bl-[65px] rounded-br-[36px] rounded-tl-[55px] rounded-tr-[43px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 left-2 sm:left-5 md:left-10 top-[300px] sm:top-[400px] md:top-[476px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bg-[#81da9f] opacity-5 rounded-bl-[65px] rounded-br-[36px] rounded-tl-[55px] rounded-tr-[43px] w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 right-2 sm:right-5 md:right-10 lg:right-auto lg:left-[1072px] top-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-black">Contact </span>
            <span className="text-[#9cd4af]">Information</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-l-4 ${card.borderColor} h-full`}
              variants={fadeInBlur}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${card.bgGradient} flex items-center justify-center mx-auto mb-4 sm:mb-6`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-2 sm:mb-4">{card.title}</h3>
              <p className="text-gray-600 text-center mb-6 sm:mb-8">{card.description}</p>

              <div className="space-y-2 mb-4 sm:mb-6">
                {card.contacts.map((contact, cIndex) => (
                  <p key={cIndex} className="text-base sm:text-lg font-semibold text-center text-gray-900">
                    {contact}
                  </p>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-center text-gray-500">{card.availability}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedService: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (data) => {
    const errors = {}
    if (!data.firstName.trim()) {
      errors.firstName = "First name is required"
    } else if (!/^[A-Za-z]{1,20}$/.test(data.firstName)) {
      errors.firstName = "First name must be between 1 and 20 letters"
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required"
    } else if (!/^[A-Za-z]{1,20}$/.test(data.lastName)) {
      errors.lastName = "Last name must be between 1 and 20 letters"
    }
    if (!data.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email address"
    } else if (data.email.length > EMAIL_MAX_LENGTH) {
      errors.email = `Email must be less than ${EMAIL_MAX_LENGTH} characters`
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!PHONE_REGEX.test(data.phone)) {
      errors.phone = "Invalid phone number (must be 10 digits starting with 6-9)"
    }
    if (!data.selectedService) {
      errors.selectedService = "Please select a service"
    }
    if (!data.message.trim()) {
      errors.message = "Message is required"
    } else if (data.message.length > MESSAGE_MAX_LENGTH) {
      errors.message = `Message must be less than ${MESSAGE_MAX_LENGTH} characters`
    }
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validate(formData)
    setFormErrors(errors)
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitting(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        selectedService: "",
        message: "",
      })
      setFormErrors({})
      alert("Form submitted successfully!")
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-black to-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute bg-[#d7e48a] opacity-10 rounded-bl-[56px] rounded-br-[49px] rounded-tl-[46px] rounded-tr-[49px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 right-4 sm:right-auto sm:left-[400px] md:left-[500px] lg:left-[720px] top-20 sm:top-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-[#75ccc3] opacity-10 rounded-bl-[56px] rounded-br-[49px] rounded-tl-[46px] rounded-tr-[49px] w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 left-[-20px] sm:left-0 md:left-10 lg:left-20 top-[400px] sm:top-[500px] md:top-[570px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-[#9cd4af] opacity-10 rounded-bl-[56px] rounded-br-[49px] rounded-tl-[46px] rounded-tr-[49px] w-40 h-40 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-80 lg:h-80 right-[-20px] sm:right-0 md:right-10 lg:right-auto lg:left-[1080px] top-10 sm:top-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Send us a </span>
            <span className="text-[#9cd4af]">Message</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
            variants={fadeInBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value.replace(/[^A-Za-z]/g, '').slice(0, FIRSTNAME_MAX_LENGTH) })}
                  placeholder="Arjun"
                  className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9cd4af] transition-colors"
                  required
                  maxLength={FIRSTNAME_MAX_LENGTH}
                />
                {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
              </div>
              <div>
                <label className="block text-white text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value.replace(/[^A-Za-z]/g, '').slice(0, LASTNAME_MAX_LENGTH) })}
                  placeholder="Sharma"
                  className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9cd4af] transition-colors"
                  required
                  maxLength={LASTNAME_MAX_LENGTH}
                />
                {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value.slice(0, EMAIL_MAX_LENGTH) })}
                placeholder="arjun.sharma@example.com"
                className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9cd4af] transition-colors"
                required
                maxLength={EMAIL_MAX_LENGTH}
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '').slice(0, 10) })}
                placeholder="+91 98765 43210"
                className="w-full h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9cd4af] transition-colors"
                required
                maxLength={10}
              />
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Choose a Service (Medium)</label>
              <Select
                options={SERVICE_OPTIONS}
                value={formData.selectedService}
                onChange={(val) => setFormData({ ...formData, selectedService: val })}
                placeholder="Select a service..."
                clearable
                size="md"
              />
              {formErrors.selectedService && <p className="text-red-500 text-xs mt-1">{formErrors.selectedService}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, MESSAGE_MAX_LENGTH) })}
                placeholder="Tell us about your project requirements..."
                rows={6}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#9cd4af] transition-colors resize-none"
                required
                maxLength={MESSAGE_MAX_LENGTH}
              />
              {formErrors.message && <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>}
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full group cursor-pointer h-12 sm:h-14 bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] text-black font-bold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-4 h-4 group-hover:rotate-45 group-hover:translate-x-3 duration-300" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p37f39c00} fill="black" />
                  </svg>
                </div>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={fadeInBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="w-full hidden lg:block h-48 sm:h-60 md:h-80 bg-cover bg-center rounded-3xl shadow-xl"
              style={{ backgroundImage: `url('${imgImg1}')` }}
            />

            <div className="bg-white/5 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#9cd4af] text-center mb-6 sm:mb-8">
                Why Choose GrowBit?
              </h3>
              <div className="space-y-4">
                {WHY_CHOOSE_FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d={svgPaths.p1dd1d300} fill={feature.color} />
                    </svg>
                    <span className="text-white">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-black">Find </span>
            <span className="text-[#9cd4af]">Us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Located in the heart of the business district for easy access.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden h-64 sm:h-80 md:h-96 relative"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            title="GrowBit Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.964858807839!2d78.4992085!3d17.4555086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bf604a7d579:0x45423566396cc91f!2sGrowBit%20Business%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}


const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <MapSection />
    </div>
  )
}

export default Contact
