import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Briefcase, Code2, Megaphone, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import { FeatureCard } from './Features2'
import { INITIAL_FEATURES } from '../../constants'

const featuresData = [
    {
        id: 'gig',
        title: 'Gig Services',
        description: 'Connect with top-tier freelancers and experts for your short-term projects. Our platform ensures quality and reliability for every gig. Whether you need a quick design fix or a complex data analysis, we have the right talent for you.',
        keyPoints: [
            'Verified Experts & Freelancers',
            'Secure Payment Protection',
            '24/7 Support & Dispute Resolution',
            'Fast Turnaround Times'
        ],
        icon: Briefcase,
        color: 'bg-[#9cd4af]/20 text-[#0B1120]',
        illustration: <GigIllustration />
    },
    {
        id: 'dev',
        title: 'Product Development',
        description: 'From concept to launch, we build robust and scalable digital products. Our engineering team specializes in modern tech stacks to deliver high-performance solutions that grow with your business.',
        keyPoints: [
            'Full-Cycle Development',
            'Scalable Architecture Design',
            'Modern Tech Stack (React, Node, AI)',
            'Agile Methodology & Rapid Iteration'
        ],
        icon: Code2,
        color: 'bg-[#75ccc3]/20 text-[#0B1120]',
        illustration: <DevIllustration />
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        description: 'Boost your brand visibility and ROI with data-driven marketing strategies. We create tailored SEO, PPC, and social media campaigns that target your ideal audience and drive measurable growth.',
        keyPoints: [
            'Data-Driven SEO & SEM',
            'Social Media Growth Hacking',
            'Content Strategy & Creation',
            'Performance Analytics & Reporting'
        ],
        icon: Megaphone,
        color: 'bg-[#d7e48a]/30 text-[#0B1120]',
        illustration: <MarketingIllustration />
    },
    {
        id: 'consulting',
        title: 'Business Consulting',
        description: 'Strategic advice to optimize operations and scale your business. We identify bottlenecks, streamline processes, and implement effective solutions to unlock your company\'s full potential.',
        keyPoints: [
            'Operational Efficiency Audit',
            'Growth Strategy Planning',
            'Market Expansion Analysis',
            'Process Automation Solutions'
        ],
        icon: TrendingUp,
        color: 'bg-gray-800 text-white',
        illustration: <ConsultingIllustration />
    }
]

function GigIllustration() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-[#9cd4af]/20 to-[#18181b] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9cd4af]/30 rounded-full blur-2xl" />
            <div className="relative w-48 h-48 bg-[#18181b] rounded-2xl shadow-xl flex items-center justify-center border border-gray-800">
                <Briefcase className="w-20 h-20 text-[#9cd4af]" />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                    <CheckCircle2 className="w-6 h-6 text-[#09090b]" />
                </motion.div>
            </div>
        </div>
    )
}

function DevIllustration() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-[#75ccc3]/20 to-[#18181b] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#75ccc3]/30 rounded-full blur-2xl" />
            <div className="relative w-64 h-40 bg-[#18181b] rounded-xl shadow-lg border border-gray-800 overflow-hidden flex flex-col">
                <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 p-4 font-mono text-xs text-gray-400">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <span className="text-purple-500">const</span> <span className="text-blue-600">product</span> = <span className="text-purple-500">new</span> <span className="text-yellow-600">Success</span>();
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function MarketingIllustration() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-[#d7e48a]/20 to-[#18181b] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#d7e48a]/20 rounded-full blur-3xl" />
            <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-[#18181b] rounded-full shadow-lg flex items-center justify-center border border-gray-800">
                    <Megaphone className="w-20 h-20 text-[#d7e48a]" />
                </div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-[#d7e48a]"
                />
            </div>
        </div>
    )
}

function ConsultingIllustration() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-[#18181b] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
            <div className="w-56 h-40 bg-[#18181b] rounded-lg shadow-md p-4 flex items-end justify-between gap-2 border border-gray-800">
                <motion.div animate={{ height: ['20%', '40%'] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} className="w-8 bg-[#9cd4af] rounded-t-md" />
                <motion.div animate={{ height: ['30%', '60%'] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }} className="w-8 bg-[#75ccc3] rounded-t-md" />
                <motion.div animate={{ height: ['40%', '80%'] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.4 }} className="w-8 bg-[#d7e48a] rounded-t-md" />
                <motion.div animate={{ height: ['50%', '100%'] }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }} className="w-8 bg-white rounded-t-md" />
            </div>
        </div>
    )
}

const FeatureTextItem = ({ feature, setActiveFeature, isActive }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" })

    useEffect(() => {
        if (isInView) {
            setActiveFeature(feature.id)
        }
    }, [isInView, feature.id, setActiveFeature])

    return (
        <div ref={ref} className="min-h-screen flex items-center py-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`max-w-lg transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30 blur-[1px]'}`}
            >
                <h3 className="text-4xl font-bold mb-6 text-white font-Geist tracking-tight">{feature.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed font-Geist mb-8">{feature.description}</p>

                <ul className="space-y-4">
                    {feature.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300 font-medium">
                            <div className="w-6 h-6 rounded-full bg-[#9cd4af]/20 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            {point}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

const StickyIllustration = ({ activeFeature }) => {
    return (
        <div className="w-full lg:w-1/2 lg:block sticky top-16 h-screen flex items-center justify-center">
            <div className="w-full max-w-xl aspect-square relative p-8">
                <div className="absolute inset-0 border border-gray-800 rounded-full scale-110 opacity-50" />
                <div className="absolute inset-0 border border-gray-800 rounded-full scale-125 opacity-30" />

                <AnimatePresence mode="wait">
                    {featuresData.map((feature) => (
                        feature.id === activeFeature && (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)', rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', rotate: 5 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 shadow-2xl rounded-3xl overflow-hidden bg-[#18181b]"
                            >
                                {feature.illustration}
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

const FallingBeams = () => {
    const beams = Array.from({ length: 10 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {beams.map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#9cd4af] to-white"
                    style={{
                        left: `${i * 220}px`,
                        filter: 'drop-shadow(0 0 2px #9cd4af)'
                    }}
                    initial={{ top: '-300px', opacity: 0 }}
                    animate={{
                        top: ['-300px', '120%'],
                        opacity: [0, 1, 0]
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
    const [activeFeature, setActiveFeature] = useState(featuresData[0].id)

    return (
        <section className="relative bg-[#09090b] py-20">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#9cd4af]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#75ccc3]/10 rounded-full blur-[100px]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:220px_220px]" />

                <FallingBeams />

                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#9cd4af] rounded-full blur-[2px]"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#75ccc3] rounded-full blur-[2px]"
                />
                <motion.div
                    animate={{ x: [0, 20, 0], opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 right-10 w-2 h-2 bg-[#d7e48a] rounded-full blur-[1px]"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-20 pt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9cd4af]/10 to-[#75ccc3]/10 border border-[#9cd4af]/20 backdrop-blur-sm"
                        >
                            <span className="text-sm font-bold text-white tracking-wide uppercase">Our Capabilities</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Everything you need <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cd4af] to-[#75ccc3]">to grow faster.</span>
                        </h2>
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
                {/* <div className="flex flex-col lg:flex-row gap-24">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            {featuresData.map((feature) => (
                                <FeatureTextItem
                                    key={feature.id}
                                    feature={feature}
                                    setActiveFeature={setActiveFeature}
                                    isActive={activeFeature === feature.id}
                                />
                            ))}
                        </div>
                    </div>

                    <StickyIllustration activeFeature={activeFeature} />
                </div> */}
            </div>
        </section>
    )
}

export default Features
