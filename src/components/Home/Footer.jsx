import React from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import { FOOTER_DATA } from '../../constants'

const Footer = () => {
    const iconMap = {
        Twitter: Twitter,
        Linkedin: Linkedin,
        Instagram: Instagram
    }

    return (
        <footer className="bg-white pt-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#9cd4af]/30 to-[#75ccc3]/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#d7e48a]/30 to-[#9cd4af]/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-gradient-to-bl from-[#75ccc3]/20 to-transparent rounded-full blur-2xl opacity-40 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12 mb-12">

                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={FOOTER_DATA.company.logo} alt="Growbit" className="w-auto h-12 object-contain" />
                        </div>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            {FOOTER_DATA.company.description}
                        </p>
                        <div className="flex gap-4">
                            {FOOTER_DATA.social.map((social) => {
                                const Icon = iconMap[social.icon]
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        aria-label={social.name}
                                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0B1120] hover:text-white transition-colors"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 lg:gap-24">
                        {FOOTER_DATA.sections.map((section) => (
                            <div key={section.title}>
                                <h4 className="font-bold text-[#0B1120] mb-4 sm:mb-6">{section.title}</h4>
                                <ul className="space-y-3 sm:space-y-4 text-gray-500">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            {link.type === 'address' ? (
                                                <span className="block">
                                                    {link.label.split('\n').map((line, i) => (
                                                        <span key={i} className="block">{line}</span>
                                                    ))}
                                                </span>
                                            ) : link.url.startsWith('/') ? (
                                                <Link
                                                    to={link.url}
                                                    className="relative inline-block hover:text-[#75ccc3] transition-colors group"
                                                >
                                                    <span className="relative z-10">{link.label}</span>
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#75ccc3] transition-all duration-300 group-hover:w-full" />
                                                </Link>
                                            ) : (
                                                <a
                                                    href={link.url}
                                                    className="relative inline-block hover:text-[#75ccc3] transition-colors group"
                                                >
                                                    <span className="relative z-10">{link.label}</span>
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#75ccc3] transition-all duration-300 group-hover:w-full" />
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
