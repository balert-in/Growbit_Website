import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, LineChart, Megaphone, ShieldCheck, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Development Services',
    points: ['Web Development', 'Mobile App Development', 'API Integration', 'Custom Software'],
    color: 'text-[#75ccc3]'
  },
  {
    icon: Palette,
    title: 'Gig Services',
    points: ['Merchant Onboarding', 'Surveys', 'KYC Services', 'BGV Services'],
    color: 'text-[#9cd4af]'
  },
  {
    icon: LineChart,
    title: 'Business Analytics',
    points: ['Data Analysis', 'Market Research', 'Strategic Planning', 'Performance Metrics'],
    color: 'text-[#d7e48a]'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    points: ['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns'],
    color: 'text-[#75ccc3]'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Support',
    points: ['Security Audits', '24/7 Support', 'System Maintenance', 'Backup Solutions'],
    color: 'text-[#9cd4af]'
  },
  {
    icon: Lightbulb,
    title: 'Consulting',
    points: ['Business Strategy', 'Process Optimization', 'Growth Planning', 'Technology Advisory'],
    color: 'text-[#d7e48a]'
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(20px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, type: 'spring' } }
}

const pointsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const pointVariants = {
  hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center justify-center bg-white">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#181818] mb-2">Our Services</h2>
      <p className="text-base md:text-lg text-[#181818]/70 text-center mb-10 max-w-2xl">
        Comprehensive solutions for your business growth
      </p>
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-7 flex flex-col items-start min-h-[220px]"
            variants={cardVariants}
          >
            <div className='flex items-center gap-3'>
              <s.icon size={32} className={`mb-3 ${s.color}`} />
              <h3 className="text-lg font-bold text-[#181818] mb-2">{s.title}</h3>
            </div>
            <motion.ul
              className="text-[#181818]/80 text-sm list-disc pl-14"
              variants={pointsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {s.points.map((pt, j) => (
                <motion.li
                  key={j}
                  variants={pointVariants}
                >
                  {pt}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default ServicesSection 