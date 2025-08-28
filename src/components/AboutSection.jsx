import React, { useRef } from 'react'
import { Building2, Star, Clock, Shield } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: <Building2 size={28} className="text-black" />,
    title: 'B2B & B2C Solutions',
    desc: 'Comprehensive services for businesses and consumers alike'
  },
  {
    icon: <Star size={28} className="text-black" />,
    title: 'Seasoned Experts',
    desc: 'Well-trained professionals with years of industry experience'
  },
  {
    icon: <Clock size={28} className="text-black" />,
    title: 'Quick Delivery',
    desc: 'Fast turnaround times without compromising on quality'
  },
  {
    icon: <Shield size={28} className="text-black" />,
    title: 'Quality Assured',
    desc: 'Rigorous quality checks and satisfaction guarantees'
  }
]

const stats = [
  { value: '2,500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Cities Served' },
  { value: '150+', label: 'Expert Professionals' }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } }
}

const AboutSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full flex flex-col items-center justify-center bg-white py-16 px-4 md:px-6"
    >
      <motion.div className="max-w-7xl w-full mx-auto text-center mb-10 " variants={cardVariants}>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">About GrowBit</h2>
        <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
          We envision ourselves as a one-of-a-kind Gig marketplace leader, connecting businesses with expert professionals to establish market leadership and drive sustainable growth.
        </p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mb-10 px-4 md:px-6"
        variants={containerVariants}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white border border-black/10 rounded-xl p-6 flex flex-col items-center text-center shadow-sm"
            variants={cardVariants}
          >
            <div className="mb-3">{f.icon}</div>
            <h3 className="text-base font-semibold text-black mb-1">{f.title}</h3>
            <p className="text-xs text-black/70">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-4"
        variants={containerVariants}
      >
        {stats.map((s, i) => (
          <motion.div key={i} className="flex flex-col items-center" variants={cardVariants}>
            <span className="text-xl md:text-2xl font-bold text-black">{s.value}</span>
            <span className="text-xs md:text-sm text-black/70 mt-1">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default AboutSection 