import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { FAQ_DATA } from '../../constants'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1120]">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Side - CTA */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#9cd4af]/20 rounded-full blur-3xl" />
                                <h3 className="text-3xl sm:text-4xl font-bold text-[#0B1120] mb-4 relative z-10">
                                    Any question's?
                                    <br />
                                    We have answers!
                                </h3>
                            </div>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Don't find your answer here? Just send us a message for any query.
                            </p>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="group flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-all duration-300"
                            >
                                <span className="font-bold text-[#0B1120]">Send Query</span>
                                <ArrowRight className="w-4 h-4 text-[#0B1120] group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Accordion */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {FAQ_DATA.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-100 last:border-0"
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                                    >
                                        <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-[#0B1120]' : 'text-gray-600 group-hover:text-[#0B1120]'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <span className={`shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                            }`}>
                                            {activeIndex === index ? (
                                                <Minus className="w-5 h-5 text-[#0B1120]" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#0B1120]" />
                                            )}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
