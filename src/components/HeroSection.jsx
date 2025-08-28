import React, { useEffect, useState } from 'react'
import { Star, Play, ActivitySquare, Users2, Heart, Rocket as RocketIcon, Users, Briefcase } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const features = [
  {
    icon: <ActivitySquare size={28} className="text-black" />, title: 'Next Wave Services', desc: 'Cutting-edge solutions that keep your business ahead of the competition'
  },
  {
    icon: <Users2 size={28} className="text-black" />, title: 'Trained Professionals', desc: 'Seasoned experts from across the country ready to tackle any challenge'
  },
  {
    icon: <Heart size={28} className="text-black" />, title: 'Client Satisfaction', desc: 'Obsessed with your success because your business is our business'
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, when: 'beforeChildren' } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } }
}

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } }
}

const rightDivVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring' } },
  exit: { opacity: 0, x: 80, transition: { duration: 0.3 } }
}

const heading1 = 'Scale Your Business with'
const heading2 = 'Expert Gig Services'

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04 } })
}

const HeroSection = () => {
  const [show, setShow] = useState(false)
  useEffect(() => { setShow(true) }, [])

  return (
    <section className="relative w-full flex flex-col items-center justify-center mt-12 sm:mt-0 overflow-hidden">
      {/* Top Left Vector */}
      <svg className="absolute left-0 top-0 z-0 opacity-30" width="220" height="220" viewBox="0 0 220 220" fill="none"><circle cx="110" cy="110" r="110" fill="#eafbe7" /></svg>
      {/* Bottom Right Vector */}
      <svg className="absolute right-0 bottom-0 z-0 opacity-20" width="180" height="180" viewBox="0 0 180 180" fill="none"><circle cx="90" cy="90" r="90" fill="#d7e48a" /></svg>
      {/* Floating Animated Icons */}
      <motion.div
        className="absolute left-10 top-1/2 z-0 hidden md:block"
        initial={{ y: -20 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <Users size={36} className="text-[#75ccc3] opacity-60" />
      </motion.div>
      <motion.div
        className="absolute right-24 top-24 z-0 hidden md:block"
        initial={{ y: 0 }}
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        <Briefcase size={32} className="text-[#9cd4af] opacity-50" />
      </motion.div>
      <div className="max-w-7xl min-h-[90vh] w-full flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#eafbe7] text-[#75ccc3] border border-[var(--color-secondary-1)] font-semibold text-sm relative z-10">
              <motion.span
                initial={{ rotate: -20 }}
                animate={{ rotate: [0, -20, 0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="inline-block"
              >
                <RocketIcon size={18} />
              </motion.span>
              Next-Wave Gig Marketplace
            </span>
            {/* Badge background vector */}
            <svg className="absolute -left-8 -top-4 z-0" width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#eafbe7" /></svg>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {heading1.split('').map((char, i) =>
              char === ' ' ? <span key={i}>&nbsp;</span> :
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={show ? 'visible' : 'hidden'}
                  variants={letterVariants}
                  className="inline-block"
                >{char}</motion.span>
            )}<br />
            {heading2.split('').map((char, i) =>
              char === ' ' ? <span key={i + 100}>&nbsp;</span> :
                <motion.span
                  key={i + 100}
                  custom={i + heading1.length}
                  initial="hidden"
                  animate={show ? 'visible' : 'hidden'}
                  variants={letterVariants}
                  className="inline-block"
                >{char}</motion.span>
            )}
          </h1>
          <p className="text-base md:text-lg text-black/70 mb-8 max-w-lg">
            Connect with seasoned professionals across the country. From startups to enterprises, we deliver end-to-end solutions that transform your business vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto">
            <Button variant="primary" width="full" className="sm:w-auto">Start Your Project</Button>
            <Button variant="outline" width="full" className="sm:w-auto text-[#75ccc3] border-[#75ccc3] hover:bg-[#eafbe7]">Explore Services</Button>
          </div>
          {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <span className="text-black/70 text-sm mb-2 sm:mb-0">Download our app:</span>
            <div className="flex gap-2">
              <button disabled className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/70 text-black/40 border border-black/10 cursor-not-allowed">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M16.88 10.37c-.02-2.14 1.75-3.16 1.83-3.21-1-1.46-2.56-1.66-3.11-1.68-1.32-.13-2.58.77-3.25.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.5 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.04 1.58 2.2 2.7 2.16 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.68.7 2.8.68 1.16-.02 1.89-1.05 2.6-2.09.82-1.19 1.16-2.34 1.18-2.4-.03-.01-2.26-.87-2.29-3.45zM13.5 4.13c.6-.73 1-1.75.89-2.77-.86.04-1.9.57-2.52 1.3-.55.64-1.04 1.67-.86 2.65.92.07 1.88-.52 2.49-1.18z"/></svg>
                <span className="text-xs font-medium">Download on <br />App Store</span>
              </button>
              <button disabled className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/70 text-black/40 border border-black/10 cursor-not-allowed">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M4.46 2.03c-.2-.34-.6-.5-.98-.4-.37.1-.62.45-.57.83l1.5 13.5c.04.36.36.64.72.64.07 0 .14-.01.21-.03.37-.1.62-.45.57-.83l-1.5-13.5zm2.7 2.7c-.2-.34-.6-.5-.98-.4-.37.1-.62.45-.57.83l1.5 13.5c.04.36.36.64.72.64.07 0 .14-.01.21-.03.37-.1.62-.45.57-.83l-1.5-13.5zm7.84 2.1c-.2-.34-.6-.5-.98-.4-.37.1-.62.45-.57.83l1.5 13.5c.04.36.36.64.72.64.07 0 .14-.01.21-.03.37-.1.62-.45.57-.83l-1.5-13.5z"/></svg>
                <span className="text-xs font-medium">Get it on <br />Google Play</span>
              </button>
            </div>
          </div> */}
        </div>
        <motion.div
          className="flex-1 flex items-center justify-center w-full"
          variants={rightDivVariants}
          initial="hidden"
          animate={show ? 'visible' : 'hidden'}
          exit="exit"
        >
          <div className="w-full max-w-md aspect-video bg-black/10 rounded-xl flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex gap-2 mb-2">
                <div className="w-10 h-10 bg-black/30 rounded-sm" />
                <div className="w-10 h-14 bg-black/30 rounded-sm" />
                <div className="w-10 h-10 bg-black/30 rounded-sm" />
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black/30 rounded-full" />
                <div className="w-8 h-8 bg-black/30 rounded-full" />
                <div className="w-8 h-8 bg-black/30 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        <motion.div
          className="w-full max-w-7xl px-4 md:px-6 pb-8 md:pb-12"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow border border-black/10 flex flex-col items-center p-6 text-center min-h-[180px]"
                variants={childVariants}
              >
                <div className="mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold text-black mb-1">{f.title}</h3>
                <p className="text-sm text-black/70">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default HeroSection 