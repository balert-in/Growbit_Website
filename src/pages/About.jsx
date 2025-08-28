import { motion } from "framer-motion"
import { useState } from "react"
import svgPaths from "../assets/AboutSVG"
import imgImg from "/aboutImg1.webp"
import imgImg0 from "/aboutImg2.webp"
import imgImg2 from "/user1.webp"
import imgImg3 from "/user1.webp"
import imgImg4 from "/user2.webp"
import imgImg5 from "/user3.webp"

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

const AboutHeroSection = () => {
  return (
    <section className="relative h-screen sm:h-[700px] md:h-[850px] lg:h-[600px] bg-gradient-to-r from-black to-gray-800 overflow-hidden">
      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] opacity-15 rounded-bl-[50px] rounded-br-[40px] rounded-tl-[30px] rounded-tr-[60px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[318.903px] lg:h-[318.903px] right-4 top-32 sm:right-8 md:right-16 lg:right-auto lg:left-[1039.86px] lg:top-[201.234px]"
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] opacity-20 rounded-bl-[30px] rounded-br-[60px] rounded-tl-[50px] rounded-tr-[40px] w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-[268.927px] lg:h-[268.927px] left-4 top-12 sm:left-8 md:left-12 lg:left-[88.686px] lg:top-[48.288px]"
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full">
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">About</span>
              <span className="text-[#9cd4af]"> GrowBit</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Pioneering the future of gig marketplace solutions with innovative technology and dedicated expertise
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white/10 rounded-full px-4 sm:px-6 py-3 flex items-center gap-3 justify-center">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p2e18f270} fill="#9CD4AF" />
                </svg>
                <span className="text-white font-medium text-sm sm:text-base">Innovation Driven</span>
              </div>
              <div className="bg-white/10 rounded-full px-4 sm:px-6 py-3 flex items-center gap-3 justify-center">
                <svg className="w-5 h-4" viewBox="0 0 20 16" fill="none">
                  <path d={svgPaths.p1b4569c0} fill="#75CCC3" />
                </svg>
                <span className="text-white font-medium text-sm sm:text-base">Expert Team</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none lg:w-auto h-64 sm:h-80 md:h-96 rounded-3xl shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] overflow-hidden">
              <img className="w-full h-full object-cover" src={imgImg || "/placeholder.svg"} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const OurStorySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] rounded-bl-[50px] rounded-br-[40px] rounded-tl-[30px] rounded-tr-[60px] opacity-5 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[316.934px] lg:h-[316.934px] right-4 top-64 sm:right-8 md:right-12 lg:right-auto lg:left-[1119.62px] lg:top-[319.949px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] rounded-bl-[30px] rounded-br-[60px] rounded-tl-[50px] rounded-tr-[40px] opacity-5 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[414.159px] lg:h-[414.159px] left-[-20px] top-[-20px] sm:left-[-10px] md:left-0 lg:left-[8.482px] lg:top-[-54.349px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={fadeInBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">Our Story</h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                GrowBit emerged as a visionary start-up, founded by seasoned experts who recognized the evolving digital
                landscape.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9cd4af] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Bridge the gap between businesses and their growth potential
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#75ccc3] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Innovative gig marketplace services tailored for modern businesses
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d7e48a] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Next-wave services that drive meaningful transformation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9cd4af] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Client satisfaction obsession - your success is our mission
                  </p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                Our BUSINESS is to scale up your BUSINESS.
              </p>
            </div>
            <motion.div
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#9cd4af] rounded-full flex items-center justify-center">
                <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 15 20" fill="none">
                  <path d={svgPaths.p594b480} fill="white" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Innovation First</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Pioneering solutions for tomorrow's challenges</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center"
            variants={fadeInBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="bg-gradient-to-r from-white to-gray-100 rounded-3xl shadow-[-20px_-20px_60px_0px_#ffffff,20px_20px_60px_0px_#bebebe] h-48 sm:h-56 md:h-64 lg:h-[256px] w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-auto relative overflow-hidden flex items-center justify-center">
              <img className="w-full h-full object-cover" src={imgImg0 || "/placeholder.svg"} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const MissionVisionSection = () => {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p3d831380} fill="white" />
          <path d={svgPaths.p17963900} fill="white" />
          <path d={svgPaths.p21623200} fill="white" />
        </svg>
      ),
      title: "Our Mission",
      description:
        "To provide end-to-end gig marketplace services that empower businesses of all sizes. We are committed and diligent to every need of your business, connecting you with your customers and establishing your business as a niche leader.",
      bgColor: "bg-[#9cd4af]",
    },
    {
      icon: (
        <svg className="w-7 h-6" viewBox="0 0 27 24" fill="none">
          <path d={svgPaths.pc157c00} fill="white" />
        </svg>
      ),
      title: "Our Vision",
      description:
        "To become the leading gig marketplace service provider, known for our next-wave services and unwavering commitment to client satisfaction. We aim to transform how businesses connect, grow, and succeed in the digital age.",
      bgColor: "bg-[#75ccc3]",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-black to-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] opacity-10 rounded-bl-[30px] rounded-br-[60px] rounded-tl-[50px] rounded-tr-[40px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[280.772px] lg:h-[280.772px] left-4 top-64 sm:left-8 md:left-12 lg:left-[56.644px] lg:top-[285.232px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] opacity-10 rounded-bl-[50px] rounded-br-[40px] rounded-tl-[30px] rounded-tr-[60px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[279.753px] lg:h-[279.753px] right-4 top-12 sm:right-8 md:right-12 lg:right-auto lg:left-[1110.4px] lg:top-[49.851px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Mission & Vision</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Driving transformation through dedicated expertise and innovative solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
              variants={fadeInBlur}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${card.bgColor} rounded-full flex items-center justify-center mb-4 sm:mb-6`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{card.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CoreValuesSection = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-6" viewBox="0 0 30 24" fill="none">
          <path d={svgPaths.p6a55c00} fill="white" />
        </svg>
      ),
      title: "Client Satisfaction",
      description:
        "We are obsessed with client satisfaction, ensuring every project exceeds expectations and delivers measurable results.",
      gradient: "from-[#9cd4af] to-[#75ccc3]",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p10248600} fill="white" />
        </svg>
      ),
      title: "Excellence",
      description:
        "Our dedicated team of well-trained professionals delivers exceptional quality in every project, big or small.",
      gradient: "from-[#75ccc3] to-[#d7e48a]",
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d={svgPaths.p31a038f0} fill="white" />
        </svg>
      ),
      title: "Innovation",
      description:
        "We continuously evolve with next-wave services and cutting-edge solutions to stay ahead of the curve.",
      gradient: "from-[#d7e48a] to-[#9cd4af]",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] rounded-bl-[30px] rounded-br-[60px] rounded-tl-[50px] rounded-tr-[40px] opacity-5 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[320.237px] lg:h-[320.237px] left-[-20px] top-48 sm:left-0 md:left-2 lg:left-[5.067px] lg:top-[252.622px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] rounded-bl-[50px] rounded-br-[40px] rounded-tl-[30px] rounded-tr-[60px] opacity-5 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-[346.405px] lg:h-[346.405px] right-[-20px] top-8 sm:right-0 md:right-4 lg:right-auto lg:left-[1055.22px] lg:top-[38.378px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Core Values</h2>
          <p className="text-lg sm:text-xl text-gray-600">The principles that guide everything we do</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-white to-gray-100 rounded-3xl p-6 sm:p-8 shadow-lg text-center h-auto sm:h-[280px] md:h-[300px] lg:h-[316px] relative overflow-hidden"
              variants={fadeInBlur}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8`}
              >
                {value.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const OurImpactSection = () => {
  const [counters, setCounters] = useState([
    { number: 0, target: 500, label: "Projects Completed", suffix: "+" },
    { number: 0, target: 200, label: "Happy Clients", suffix: "+" },
    { number: 0, target: 50, label: "Team Members", suffix: "+" },
    { number: 0, target: 99, label: "Client Satisfaction", suffix: "%" },
  ])
  const [hasAnimated, setHasAnimated] = useState(false)

  const animateCounters = () => {
    if (hasAnimated) return
    setHasAnimated(true)
    counters.forEach((counter, index) => {
      let current = 0
      const increment = counter.target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= counter.target) {
          current = counter.target
          clearInterval(timer)
        }
        setCounters((prev) => prev.map((c, i) => (i === index ? { ...c, number: Math.floor(current) } : c)))
      }, 20)
    })
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9cd4af]/5 via-[#75ccc3]/5 to-[#d7e48a]/5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={animateCounters}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Our Impact in Numbers</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Measurable results that speak to our commitment and expertise
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {counters.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 md:p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 50, scale: 0.8, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4"
                style={{
                  background:
                    index === 0
                      ? "linear-gradient(to right, #9CD4AF, #75CCC3)"
                      : index === 1
                        ? "linear-gradient(to right, #75CCC3, #D7E48A)"
                        : index === 2
                          ? "linear-gradient(to right, #D7E48A, #9CD4AF)"
                          : "linear-gradient(to right, #9CD4AF, #75CCC3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
                {stat.suffix}
              </motion.div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ExpertTeamSection = () => {
  const teamMembers = [
    {
      image: imgImg2,
      name: "Arjun Sharma",
      role: "Tech Lead",
    },
    {
      image: imgImg3,
      name: "Priya Patel",
      role: "Operations Manager",
    },
    {
      image: imgImg4,
      name: "Rahul Singh",
      role: "Business Strategist",
    },
    {
      image: imgImg5,
      name: "Ananya Gupta",
      role: "Client Success",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] opacity-10 rounded-bl-[50px] rounded-br-[40px] rounded-tl-[30px] rounded-tr-[60px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[262.324px] lg:h-[262.324px] right-4 top-16 sm:right-8 md:right-12 lg:right-auto lg:left-[1107.55px] lg:top-[71.041px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] opacity-10 rounded-bl-[30px] rounded-br-[60px] rounded-tl-[50px] rounded-tr-[40px] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-[292.133px] lg:h-[292.133px] left-4 top-16 sm:left-8 md:left-12 lg:left-[37.163px] lg:top-[69.413px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Expert Team</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Seasoned professionals from across the country, united by a passion for excellence
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg text-center"
              variants={fadeInBlur}
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-cover bg-center rounded-full mx-auto mb-4 sm:mb-6"
                style={{ backgroundImage: `url('${member.image}')` }}
              />
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-black to-gray-800 relative overflow-hidden">
      <motion.div
        className="absolute bg-gradient-to-r from-[#75ccc3] to-[#d7e48a] opacity-10 rounded-bl-[50px] rounded-br-[40px] rounded-tl-[30px] rounded-tr-[60px] w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[262.324px] lg:h-[262.324px] right-4 top-16 sm:right-8 md:right-12 lg:right-auto lg:left-[1107.55px] lg:top-[71.041px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute bg-gradient-to-r from-[#9cd4af] to-[#75ccc3] opacity-10 rounded-bl-[30px] rounded-br-[60px] rounded-tl-[50px] rounded-tr-[40px] w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-[292.133px] lg:h-[292.133px] left-4 top-16 sm:left-8 md:left-12 lg:left-[37.163px] lg:top-[69.413px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={fadeInBlur} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses that trust GrowBit for their growth journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-[#9cd4af] cursor-pointer text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
            <motion.button
              className="bg-white/10 cursor-pointer border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <div className="min-h-screen pt-14 sm:pt-12 md:pt-10 lg:pt-0">
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <OurImpactSection />
      <ExpertTeamSection />
      <CTASection />
    </div>
  )
}

export default About
