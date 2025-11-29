import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS_DATA } from '../../constants'
import '@fontsource/kalam' // Importing the handwritten font

import Testimonials1 from '../../assets/Testimonials1.svg'
import Testimonials2 from '../../assets/Testimonials2.svg'
import Testimonials3 from '../../assets/Testimonials3.svg'

const Testimonials = () => {
    const containerRef = useRef(null)
    const innerRef = useRef(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current && innerRef.current) {
                setWidth(innerRef.current.scrollWidth - containerRef.current.offsetWidth)
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    return (
        <section className="py-16 md:py-24 bg-[#09090b] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#75ccc3]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#d7e48a]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-20"
                    initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='relative space-y-4 w-fit mx-auto mb-6'>
                        <div className='relative space-y-4 w-fit mx-auto mb-2'>
                            <div className='absolute bottom-0 -left-8 sm:-left-12 m-0 -z-10'>
                                <img src={Testimonials2} alt="growbit testimonials" className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                            <div className='absolute bottom-0 -right-8 sm:-right-12 m-0 -z-10 scale-x-[-1]'>
                                <img src={Testimonials3} alt="growbit testimonials" className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                            <div className=' relative w-fit mx-auto'>
                                <img src={Testimonials1} alt="growbit testimonials" className="w-16 h-16 sm:w-20 sm:h-20" />
                                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 sm:h-16 sm:w-16 bg-[#9cd4af] rounded-full blur-2xl opacity-90 z-0 pointer-events-none' />
                            </div>
                        </div>
                        <p className='text-xs sm:text-sm uppercase text-center text-white/60 tracking-widest font-medium'>Testimonials</p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Some Honest Feedbacks</h2>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">Trusted & loved by many partners & company</p>
                </motion.div>

                {/* Draggable Carousel */}
                <motion.div ref={containerRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
                    <motion.div
                        ref={innerRef}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-4 sm:gap-8"
                    >
                        {TESTIMONIALS_DATA.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-3xl relative flex flex-col items-center text-center group hover:bg-white/10 transition-colors duration-300"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-4 left-4 text-[#75ccc3]/20">
                                    <Quote size={32} className="transform scale-x-[-1] sm:w-12 sm:h-12" />
                                </div>

                                {/* Image */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#0B1120] overflow-hidden mb-6 shadow-lg relative z-10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed" style={{ fontFamily: 'Kalam, cursive' }}>
                                    "{testimonial.feedback}"
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < testimonial.rating ? 'text-[#d7e48a] fill-[#d7e48a]' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>

                                {/* Name & Role */}
                                <div>
                                    <h4 className="text-white text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: 'Kalam, cursive' }}>{testimonial.name}</h4>
                                    <p className="text-[#75ccc3] text-xs sm:text-sm font-medium tracking-wide uppercase">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}

export default Testimonials
