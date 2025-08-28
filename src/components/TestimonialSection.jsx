import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Saleem Basha',
    title: 'Founder, Balert',
    avatar: '/user1.png',
    rating: 5,
    quote: 'GrowBit helped us scale our business with their expert team and innovative solutions. Highly recommended for any Indian startup!'
  },
  {
    name: 'Priya Singh',
    title: 'Marketing Head, BharatMart',
    avatar: '/user2.png',
    rating: 4,
    quote: 'The professionalism and dedication of the GrowBit team is unmatched. Our digital presence has never been stronger.'
  },
  {
    name: 'Rahul Verma',
    title: 'CTO, FinEdge India',
    avatar: 'user3.png',
    rating: 5,
    quote: 'From strategy to execution, GrowBit delivered results beyond our expectations. Their support is top-notch.'
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: 'spring' } }
}

const TestimonialSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-2">What Our Clients Say</h2>
      <p className="text-base md:text-lg text-black/70 text-center mb-10 max-w-2xl">
        Join 500+ happy clients who&apos;ve scaled their business with GrowBit
      </p>
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-[#fafafa] rounded-xl shadow p-7 flex flex-col items-start min-h-[220px]"
            variants={cardVariants}
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-black/10" />
              <div>
                <div className="font-semibold text-black text-sm">{t.name}</div>
                <div className="text-xs text-black/60">{t.title}</div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={18} className={idx < t.rating ? 'text-[#75ccc3] fill-[#75ccc3]' : 'text-gray-300'} fill={idx < t.rating ? '#75ccc3' : 'none'} />
              ))}
            </div>
            <div className="text-black/80 text-sm mt-2">&quot;{t.quote}&quot;</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TestimonialSection 