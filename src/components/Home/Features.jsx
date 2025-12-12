import React from 'react'
import { motion } from 'framer-motion'
import { FeatureCard } from './Features2'
import { INITIAL_FEATURES } from '../../constants'
import HandDrawnTitle from '../common/HandDrawnTitle'

const FallingBeams = () => {
    const beams = Array.from({ length: 10 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {beams.map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#75ccc3] to-[#d7e48a]"
                    style={{
                        left: `${i * 220}px`,
                        filter: 'drop-shadow(0 0 2px #75ccc3)'
                    }}
                    initial={{ top: '-300px', opacity: 0 }}
                    animate={{
                        top: ['-300px', '120%'],
                        opacity: [0, 0.4, 0]
                    }}
                    transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeIn"
                    }}
                />
            ))}
        </div>
    )
}

const Features = () => {

    return (
        <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] sm:left-[-5%] w-[50%] sm:w-[40%] h-[50%] sm:h-[40%] bg-[#9cd4af]/15 rounded-full blur-[80px] sm:blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-10%] sm:right-[-5%] w-[50%] sm:w-[40%] h-[50%] sm:h-[40%] bg-[#75ccc3]/15 rounded-full blur-[80px] sm:blur-[100px]" />

                <div className="hidden sm:block absolute inset-0 bg-[linear-gradient(to_right,#75ccc308_1px,transparent_1px),linear-gradient(to_bottom,#75ccc308_1px,transparent_1px)] bg-[size:220px_220px]" />

                <div className="hidden md:block">
                    <FallingBeams />
                </div>

                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden sm:block absolute top-1/4 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-[#9cd4af] rounded-full blur-[2px]"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hidden sm:block absolute bottom-1/3 right-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-[#75ccc3] rounded-full blur-[2px]"
                />
                <motion.div
                    animate={{ x: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="hidden lg:block absolute top-1/2 right-10 w-2 h-2 bg-[#d7e48a] rounded-full blur-[1px]"
                />
            </div>

            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="featuresDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#75ccc3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#featuresDots)" />
            </svg>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="mb-12 sm:mb-16 md:mb-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <HandDrawnTitle text="Our Capabilities" theme="light" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
                            Everything you need <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#75ccc3] to-[#9cd4af]">to grow faster.</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
                        >
                            Powerful tools and features designed to accelerate your business growth, streamline operations, and deliver exceptional results.
                        </motion.p>
                    </motion.div>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    {INITIAL_FEATURES.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features




// import React, { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence, useInView } from 'framer-motion'
// import { Briefcase, Code2, Megaphone, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'

// const featuresData = [
//     {
//         id: 'gig',
//         title: 'Gig Services',
//         description: 'Connect with top-tier freelancers and experts for your short-term projects. Our platform ensures quality and reliability for every gig. Whether you need a quick design fix or a complex data analysis, we have the right talent for you.',
//         keyPoints: [
//             'Verified Experts & Freelancers',
//             'Secure Payment Protection',
//             '24/7 Support & Dispute Resolution',
//             'Fast Turnaround Times'
//         ],
//         icon: Briefcase,
//         color: 'bg-[#9cd4af]/20 text-[#0B1120]',
//         illustration: <GigIllustration />
//     },
//     {
//         id: 'dev',
//         title: 'Product Development',
//         description: 'From concept to launch, we build robust and scalable digital products. Our engineering team specializes in modern tech stacks to deliver high-performance solutions that grow with your business.',
//         keyPoints: [
//             'Full-Cycle Development',
//             'Scalable Architecture Design',
//             'Modern Tech Stack (React, Node, AI)',
//             'Agile Methodology & Rapid Iteration'
//         ],
//         icon: Code2,
//         color: 'bg-[#75ccc3]/20 text-[#0B1120]',
//         illustration: <DevIllustration />
//     },
//     {
//         id: 'marketing',
//         title: 'Digital Marketing',
//         description: 'Boost your brand visibility and ROI with data-driven marketing strategies. We create tailored SEO, PPC, and social media campaigns that target your ideal audience and drive measurable growth.',
//         keyPoints: [
//             'Data-Driven SEO & SEM',
//             'Social Media Growth Hacking',
//             'Content Strategy & Creation',
//             'Performance Analytics & Reporting'
//         ],
//         icon: Megaphone,
//         color: 'bg-[#d7e48a]/30 text-[#0B1120]',
//         illustration: <MarketingIllustration />
//     },
//     {
//         id: 'consulting',
//         title: 'Business Consulting',
//         description: 'Strategic advice to optimize operations and scale your business. We identify bottlenecks, streamline processes, and implement effective solutions to unlock your company\'s full potential.',
//         keyPoints: [
//             'Operational Efficiency Audit',
//             'Growth Strategy Planning',
//             'Market Expansion Analysis',
//             'Process Automation Solutions'
//         ],
//         icon: TrendingUp,
//         color: 'bg-gray-800 text-white',
//         illustration: <ConsultingIllustration />
//     }
// ]

// function GigIllustration() {
//     return (
//         <div className="w-full h-full bg-gradient-to-br from-[#9cd4af]/20 to-[#18181b] rounded-3xl border border-accent-1/30 flex items-center justify-center p-2 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-[#9cd4af]/30 rounded-full blur-2xl" />
//             <img src="/gigservice.webp" alt="Gig Services" className="w-full h-full object-contain rounded-2xl" />
//         </div>
//     )
// }

// function DevIllustration() {
//     return (
//         <div className="w-full h-full bg-gradient-to-br from-[#75ccc3]/20 to-[#18181b] rounded-3xl border border-accent-1/30 flex items-center justify-center p-2 relative overflow-hidden">
//             <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#75ccc3]/30 rounded-full blur-2xl" />
//             <img src="/productdevelopment.webp" alt="Product Development" className="w-full h-full object-contain rounded-2xl" />
//         </div>
//     )
// }

// function MarketingIllustration() {
//     return (
//         <div className="w-full h-full bg-gradient-to-br from-[#d7e48a]/20 to-[#18181b] rounded-3xl border border-accent-1/30 flex items-center justify-center p-2 relative overflow-hidden">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#d7e48a]/20 rounded-full blur-3xl" />
//             <img src="/digitalmarketing.webp" alt="Digital Marketing" className="w-full h-full object-contain rounded-2xl" />
//         </div>
//     )
// }

// function ConsultingIllustration() {
//     return (
//         <div className="w-full h-full bg-gradient-to-br from-gray-800 to-[#18181b] rounded-3xl border border-accent-1/30 flex items-center justify-center p-2 relative overflow-hidden">
//             <img src="/business.webp" alt="Business Consulting" className="w-full h-full object-contain rounded-2xl" />
//         </div>
//     )
// }

// const FeatureTextItem = ({ feature, setActiveFeature, isActive }) => {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

//     useEffect(() => {
//         if (isInView) {
//             setActiveFeature(feature.id)
//         }
//     }, [isInView, feature.id, setActiveFeature])

//     return (
//         <div ref={ref} className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
//             <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className={`max-w-lg transition-all duration-500 ${isActive ? 'opacity-100' : 'lg:opacity-30 lg:blur-[1px]'}`}
//             >
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-white font-Geist tracking-tight">{feature.title}</h3>
//                 <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-Geist mb-6 sm:mb-7 md:mb-8">{feature.description}</p>

//                 <ul className="space-y-3 sm:space-y-4">
//                     {feature.keyPoints.map((point, index) => (
//                         <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-300 font-medium">
//                             <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9cd4af]/20 flex items-center justify-center flex-shrink-0">
//                                 <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
//                             </div>
//                             {point}
//                         </li>
//                     ))}
//                 </ul>
//             </motion.div>
//         </div>
//     )
// }

// const StickyIllustration = ({ activeFeature }) => {
//     return (
//         <div className="hidden lg:block w-full lg:w-1/2 sticky top-20 h-screen flex items-center justify-center">
//             <div className="w-full max-w-xl aspect-square relative p-4 sm:p-6 md:p-8">
//                 <div className="hidden lg:block absolute inset-0 border border-gray-800 rounded-full scale-110 opacity-50" />
//                 <div className="hidden lg:block absolute inset-0 border border-gray-800 rounded-full scale-125 opacity-30" />

//                 <AnimatePresence mode="wait">
//                     {featuresData.map((feature) => (
//                         feature.id === activeFeature && (
//                             <motion.div
//                                 key={feature.id}
//                                 initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)', rotate: -5 }}
//                                 animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
//                                 exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', rotate: 5 }}
//                                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                                 className="absolute inset-0 shadow-2xl rounded-3xl overflow-hidden bg-[#18181b]"
//                             >
//                                 {feature.illustration}
//                             </motion.div>
//                         )
//                     ))}
//                 </AnimatePresence>
//             </div>
//         </div>
//     )
// }

// const FallingBeams = () => {
//     const beams = Array.from({ length: 10 }, (_, i) => i);

//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {beams.map((i) => (
//                 <motion.div
//                     key={i}
//                     className="absolute w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#9cd4af] to-white"
//                     style={{
//                         left: `${i * 220}px`,
//                         filter: 'drop-shadow(0 0 2px #9cd4af)'
//                     }}
//                     initial={{ top: '-300px', opacity: 0 }}
//                     animate={{
//                         top: ['-300px', '120%'],
//                         opacity: [0, 1, 0]
//                     }}
//                     transition={{
//                         duration: Math.random() * 4 + 3,
//                         repeat: Infinity,
//                         delay: Math.random() * 5,
//                         ease: "easeIn"
//                     }}
//                 />
//             ))}
//         </div>
//     )
// }

// const Features = () => {
//     const [activeFeature, setActiveFeature] = useState(featuresData[0].id)

//     return (
//         <section className="relative bg-[#09090b] py-12 sm:py-16 md:py-20">
//             <div className="absolute inset-0 pointer-events-none overflow-hidden">
//                 <div className="absolute top-[10%] left-[-10%] sm:left-[-5%] w-[50%] sm:w-[40%] h-[50%] sm:h-[40%] bg-[#9cd4af]/10 rounded-full blur-[80px] sm:blur-[100px]" />
//                 <div className="absolute bottom-[10%] right-[-10%] sm:right-[-5%] w-[50%] sm:w-[40%] h-[50%] sm:h-[40%] bg-[#75ccc3]/10 rounded-full blur-[80px] sm:blur-[100px]" />

//                 <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:220px_220px]" />

//                 <div className="hidden lg:block">
//                     <FallingBeams />
//                 </div>

//                 <motion.div
//                     animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
//                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                     className="hidden sm:block absolute top-1/4 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-[#9cd4af] rounded-full blur-[2px]"
//                 />
//                 <motion.div
//                     animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
//                     transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                     className="hidden sm:block absolute bottom-1/3 right-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-[#75ccc3] rounded-full blur-[2px]"
//                 />
//                 <motion.div
//                     animate={{ x: [0, 20, 0], opacity: [0.1, 0.4, 0.1] }}
//                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//                     className="hidden lg:block absolute top-1/2 right-10 w-2 h-2 bg-[#d7e48a] rounded-full blur-[1px]"
//                 />
//             </div>

//             <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
//                 <div className="mb-12 sm:mb-16 md:mb-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         className="inline-block"
//                     >
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             className="inline-block mb-4 sm:mb-5 md:mb-6 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 border border-[#9cd4af]/20 backdrop-blur-sm"
//                         >
//                             <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">Our Capabilities</span>
//                         </motion.div>
//                         <h2 className="section-heading">
//                             Everything you need <br className="hidden sm:block" />
//                             <span className="sm:hidden"> </span>
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]">to grow faster.</span>
//                         </h2>
//                         <motion.p
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                             className="section-subheading"
//                         >
//                             Powerful tools and features designed to accelerate your business growth, streamline operations, and deliver exceptional results.
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24">
//                     <div className="w-full lg:w-1/2">
//                         <div className="relative">
//                             {featuresData.map((feature, index) => (
//                                 <div key={feature.id}>
//                                     <FeatureTextItem
//                                         feature={feature}
//                                         setActiveFeature={setActiveFeature}
//                                         isActive={activeFeature === feature.id}
//                                     />
//                                     <div className="lg:hidden mb-8 sm:mb-12">
//                                         <div className="w-full aspect-square relative p-4 sm:p-6">
//                                             <div className="w-full h-full shadow-2xl rounded-3xl overflow-hidden bg-[#18181b]">
//                                                 {feature.illustration}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <StickyIllustration activeFeature={activeFeature} />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Features
