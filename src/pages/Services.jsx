import { motion } from "framer-motion"
import svgPaths from "../assets/ServicesSVG"
import imgImg from "/servicesImg.webp"

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

function HeroSection() {
  return (
    <section className="relative h-screen sm:h-[700px] md:h-[800px] lg:h-[610px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
      <motion.div
        className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-[#d7e48a] to-[#9cd4af] opacity-20 rounded-[30px_70px_30px_70px] left-4 top-64 sm:left-8 md:left-12 lg:left-20 lg:top-[317px]"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={{ opacity: 0.2, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] opacity-20 rounded-[60px_40px_70px_30px] right-4 top-20 sm:right-8 md:right-12 lg:right-auto lg:left-[1104px] lg:top-[80px]"
        initial={{ opacity: 0, scale: 0.8,filter: "blur(20px)" }}
        animate={{ opacity: 0.2, scale: 1,filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-white">Premium</span>
              <span className="text-[#9cd4af]"> Gig Services</span>
              <span className="text-white"> for Your Business</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              Comprehensive marketplace solutions with expert professionals delivering exceptional results for
              businesses of all sizes.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.div
                className="flex items-center bg-[#9cd4af] rounded-full px-4 sm:px-6 py-2 sm:py-3 justify-center"
                initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p1dd1d300} fill="black" />
                </svg>
                <span className="text-black font-semibold text-sm sm:text-base">Expert Professionals</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-[#75ccc3] rounded-full px-4 sm:px-6 py-2 sm:py-3 justify-center"
                initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p803d900} fill="black" />
                </svg>
                <span className="text-black font-semibold text-sm sm:text-base">Quick Delivery</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-[#d7e48a] rounded-full px-4 sm:px-6 py-2 sm:py-3 justify-center"
                initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p228c4ef0} fill="black" />
                </svg>
                <span className="text-black font-semibold text-sm sm:text-base">100% Secure</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="relative rounded-2xl"
            initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -left-3 sm:-left-6 top-48 sm:top-56 md:top-64 lg:top-[280px] w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#75ccc3] opacity-60 rounded-[60px_40px_70px_30px]"></div>
            <div className="absolute right-8 sm:right-12 md:right-16 lg:right-[72px] -top-3 sm:-top-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#9cd4af] opacity-80 rounded-[40px_60px_40px_60px]"></div>
            <div
              className="w-auto h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl"
            >
              <img className="w-full h-full object-cover rounded-2xl" src={imgImg} alt="growbit services image" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, features, borderColor, iconBg }) {
  return (
    <motion.div
      className={`bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-l-4 ${borderColor} h-full`}
      variants={fadeInBlur}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-4 sm:mb-0 sm:mr-5`}
        >
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">{description}</p>
      <div className="space-y-2 sm:space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 flex-shrink-0" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p1dd1d300} fill={feature.color} />
            </svg>
            <span className="text-sm sm:text-base text-gray-700">{feature.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function CoreServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-5 h-4 sm:w-6 sm:h-6" viewBox="0 0 27 24" fill="none">
          <path d={svgPaths.p8ccc100} fill="white" />
        </svg>
      ),
      title: "Merchant Onboarding",
      description:
        "Seamless merchant registration and setup processes with comprehensive documentation and compliance checks to get your business partners started quickly.",
      features: [
        { text: "Complete registration assistance", color: "#9CD4AF" },
        { text: "Document verification", color: "#9CD4AF" },
        { text: "Compliance monitoring", color: "#9CD4AF" },
      ],
      borderColor: "border-[#9cd4af]",
      iconBg: "bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]",
    },
    {
      icon: (
        <svg className="w-6 h-5 sm:w-7 sm:h-6" viewBox="0 0 30 24" fill="none">
          <path d={svgPaths.p1651b100} fill="white" />
        </svg>
      ),
      title: "KYC Services",
      description:
        "Comprehensive Know Your Customer verification services ensuring regulatory compliance and fraud prevention with advanced identity verification.",
      features: [
        { text: "Identity verification", color: "#75CCC3" },
        { text: "Risk assessment", color: "#75CCC3" },
        { text: "Regulatory compliance", color: "#75CCC3" },
      ],
      borderColor: "border-[#75ccc3]",
      iconBg: "bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]",
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p37c19100} fill="white" />
        </svg>
      ),
      title: "Background Verification",
      description:
        "Thorough background checks and verification services for employment, partnerships, and business relationships with detailed reporting.",
      features: [
        { text: "Employment verification", color: "#D7E48A" },
        { text: "Criminal record checks", color: "#D7E48A" },
        { text: "Reference validation", color: "#D7E48A" },
      ],
      borderColor: "border-[#d7e48a]",
      iconBg: "bg-gradient-to-r from-[#d7e48a] to-[#9cd4af]",
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p3bdf84c0} fill="white" />
        </svg>
      ),
      title: "Survey Services",
      description:
        "Professional survey and data collection services providing valuable insights for market research, customer feedback, and business intelligence.",
      features: [
        { text: "Market research surveys", color: "#9CD4AF" },
        { text: "Customer satisfaction analysis", color: "#9CD4AF" },
        { text: "Data analytics reporting", color: "#9CD4AF" },
      ],
      borderColor: "border-[#9cd4af]",
      iconBg: "bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-[#d7e48a]/10 to-[#9cd4af]/10 rounded-[30px_70px_30px_70px] right-[-20px] top-20 sm:right-0 md:right-4"></div>
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#9cd4af]/5 to-[#75ccc3]/5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Core Gig Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized services designed to streamline your business operations and ensure compliance
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AdditionalServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-4 h-3 sm:w-5 sm:h-4" viewBox="0 0 23 18" fill="none">
          <path d={svgPaths.p18ae00} fill="white" />
        </svg>
      ),
      title: "Development Services",
      iconBg: "bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]",
      features: [
        { text: "Web Development", color: "#9CD4AF" },
        { text: "Mobile App Development", color: "#75CCC3" },
        { text: "API Integration", color: "#D7E48A" },
        { text: "Custom Software", color: "#9CD4AF" },
      ],
    },
    {
      icon: (
        <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 18 18" fill="none">
          <path d={svgPaths.p21b5b570} fill="white" />
        </svg>
      ),
      title: "Security & Support",
      iconBg: "bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]",
      features: [
        { text: "Security Audits", color: "#75CCC3" },
        { text: "24/7 Support", color: "#D7E48A" },
        { text: "System Maintenance", color: "#9CD4AF" },
        { text: "Backup Solutions", color: "#75CCC3" },
      ],
    },
    {
      icon: (
        <svg className="w-2 h-3 sm:w-3 sm:h-4" viewBox="0 0 14 18" fill="none">
          <path d={svgPaths.p10e4d900} fill="white" />
        </svg>
      ),
      title: "Consulting",
      iconBg: "bg-gradient-to-r from-[#d7e48a] to-[#9cd4af]",
      features: [
        { text: "Business Strategy", color: "#D7E48A" },
        { text: "Process Optimization", color: "#9CD4AF" },
        { text: "Growth Planning", color: "#75CCC3" },
        { text: "Technology Advisory", color: "#D7E48A" },
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 rounded-[40px_60px_40px_60px] left-2 top-10 sm:left-4 md:left-6 lg:left-10"></div>
      <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-[#75ccc3]/10 to-[#d7e48a]/10 rounded-[60px_40px_70px_30px] right-4 bottom-48 sm:right-8 md:right-12 lg:right-[112px] lg:bottom-[304px]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Additional Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology and business solutions to accelerate your growth
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg h-full"
              variants={fadeInBlur}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 sm:mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 sm:mb-8">{service.title}</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center">
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-2 sm:mr-3 flex-shrink-0"
                      viewBox="0 0 14 18"
                      fill="none"
                    >
                      <path d={svgPaths.p1dd1d300} fill={feature.color} />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-5 sm:w-8 sm:h-6 md:w-9 md:h-7" viewBox="0 0 38 30" fill="none">
          <path d={svgPaths.p264bdf00} fill="white" />
        </svg>
      ),
      title: "Expert Team",
      description: "Seasoned professionals with deep industry expertise across all verticals",
      iconBg: "bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]",
    },
    {
      icon: (
        <svg className="w-5 h-6 sm:w-6 sm:h-7" viewBox="0 0 27 30" fill="none">
          <path d={svgPaths.p2006d680} fill="white" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Quick turnaround times without compromising on quality or attention to detail",
      iconBg: "bg-gradient-to-r from-[#75ccc3] to-[#d7e48a]",
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 30 30" fill="none">
          <path d={svgPaths.p3c421200} fill="white" />
        </svg>
      ),
      title: "Client Obsessed",
      description: "Your success is our mission - we're committed to exceeding expectations",
      iconBg: "bg-gradient-to-r from-[#d7e48a] to-[#9cd4af]",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9cd4af]/10 via-[#75ccc3]/10 to-[#d7e48a]/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Why Choose GrowBit?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            We're not just a service provider - we're your dedicated growth partner
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="text-center" variants={fadeInBlur}>
              <div
                className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full ${feature.iconBg} flex items-center justify-center mx-auto mb-6 sm:mb-8`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Services = () => {
  return (
    <div>
      <div className="min-h-screen pt-14 sm:pt-12 md:pt-10 lg:pt-0">
        <HeroSection />
        <CoreServicesSection />
        <AdditionalServicesSection />
        <WhyChooseSection />
      </div>
    </div>
  )
}

export default Services
