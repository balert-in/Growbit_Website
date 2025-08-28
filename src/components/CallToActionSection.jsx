import React, { useRef } from 'react'
import Button from './Button'
import { motion, useInView } from 'framer-motion'

const CallToActionSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, type: 'spring' }}
      className="w-full py-16 px-4 flex flex-col items-center justify-center bg-[#181818] border-b border-[#FEFEFE]/15"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">Ready to Bring Your Vision to Life?</h2>
      <p className="text-base md:text-lg text-white/70 text-center mb-8 max-w-2xl">
        Let's collaborate to create stunning visuals that elevate your brand and engage your audience.
      </p>
      <Button variant="primary" width="auto" className="mx-auto">Start Your Project Today</Button>
    </motion.section>
  )
}

export default CallToActionSection 