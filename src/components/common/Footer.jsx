import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Youtube, Linkedin, Instagram } from 'lucide-react'
import { FOOTER_DATA } from '../../constants'

const Footer = () => {
    const iconMap = {
        Facebook: Facebook,
        Youtube: Youtube,
        Linkedin: Linkedin,
        Instagram: Instagram
    }

    return (
        <footer className="bg-[#09090b] pt-20 relative overflow-hidden border-t border-gray-800">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#9cd4af]/10 to-[#75ccc3]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#d7e48a]/10 to-[#9cd4af]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-gradient-to-bl from-[#75ccc3]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12 mb-12">

                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={FOOTER_DATA.company.logo} alt="Growbit" className="w-auto h-12 object-contain" />
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {FOOTER_DATA.company.description}
                        </p>
                        <div className="flex gap-4">
                            {FOOTER_DATA.social.map((social) => {
                                const Icon = iconMap[social.icon]
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        aria-label={social.name}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#18181b] to-[#27272a] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#75ccc3] hover:border-[#75ccc3]/50 transition-colors"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-24">
                        {FOOTER_DATA.sections.map((section) => (
                            <div key={section.title}>
                                <h4 className="font-bold text-white mb-4 sm:mb-6">{section.title}</h4>
                                <ul className="space-y-3 sm:space-y-4 text-gray-400">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            {link.type === 'address' ? (
                                                <span className="block">
                                                    {link.label.split('\n').map((line, i) => (
                                                        <span key={i} className="block">{line}</span>
                                                    ))}
                                                </span>
                                            ) : link.url.startsWith('/') ? (
                                                <Link to={link.url}>
                                                    <motion.span
                                                        className="relative inline-block cursor-pointer"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <motion.span
                                                            className="relative z-10"
                                                            whileHover={{ color: "#75ccc3" }}
                                                        >
                                                            {link.label}
                                                        </motion.span>
                                                        <motion.span
                                                            className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#9cd4af] via-[#75ccc3] to-[#d7e48a]"
                                                            initial={{ width: 0 }}
                                                            whileHover={{ width: "100%" }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    </motion.span>
                                                </Link>
                                            ) : (
                                                <a href={link.url}>
                                                    <motion.span
                                                        className="relative inline-block cursor-pointer"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <motion.span
                                                            className="relative z-10"
                                                            whileHover={{ color: "#75ccc3" }}
                                                        >
                                                            {link.label}
                                                        </motion.span>
                                                        <motion.span
                                                            className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#9cd4af] via-[#75ccc3] to-[#d7e48a]"
                                                            initial={{ width: 0 }}
                                                            whileHover={{ width: "100%" }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    </motion.span>
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
