import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    const isActiveLink = (href) => {
        if (href === '/') {
            return location.pathname === '/'
        }
        return location.pathname.startsWith(href)
    }

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                type: "tween",
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    }

    const linkContainerVariants = {
        closed: { opacity: 0 },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    const hamburgerLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: (i) => ({
            rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
            y: i === 0 ? 8 : i === 2 ? -8 : 0,
            opacity: i === 1 ? 0 : 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        })
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[#09090b]/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3 sm:py-4'
                    : 'bg-transparent py-4 sm:py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 cursor-pointer relative z-50">
                        <motion.img
                            src="/logo-light.webp"
                            alt="Growbit"
                            className="w-auto h-7 sm:h-8 md:h-10 object-contain"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`relative px-4 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${isActiveLink(link.href)
                                    ? 'text-[#09090b] bg-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.name}
                                {!isActiveLink(link.href) && (
                                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-accent-1 to-transparent transition-all duration-300 group-hover:w-3/4" />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link to="/contact">
                            <motion.button
                                className="cursor-pointer bg-gradient-to-r from-accent-1 to-accent-2 text-[#09090b] px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-accent-1/25"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>

                    <motion.button
                        className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle menu"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-5 h-0.5 bg-white rounded-full origin-center"
                                variants={hamburgerLineVariants}
                                animate={isMobileMenuOpen ? 'open' : 'closed'}
                                custom={i}
                            />
                        ))}
                    </motion.button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-[85%] sm:max-w-sm bg-gradient-to-b from-[#0a0a0c] to-[#09090b] z-40 md:hidden border-l border-white/10 shadow-2xl overflow-hidden"
                            style={{ willChange: 'transform' }}
                        >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-1/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-32 -left-24 w-64 h-64 bg-accent-2/10 rounded-full blur-3xl opacity-50" />
                            </div>

                            <div className="relative h-full flex flex-col px-6 pt-24 pb-8">
                                <motion.nav
                                    className="flex flex-col gap-2"
                                    variants={linkContainerVariants}
                                    initial="closed"
                                    animate="open"
                                >
                                    {navLinks.map((link) => (
                                        <motion.div key={link.name} variants={linkVariants}>
                                            <Link
                                                to={link.href}
                                                className={`block py-3 text-lg font-medium text-center transition-colors duration-300 ${isActiveLink(link.href)
                                                    ? 'text-[#75ccc3]'
                                                    : 'text-gray-300 hover:text-white'
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.nav>

                                <motion.div
                                    className="mt-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.4, duration: 0.3 }
                                    }}
                                >
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <button className="w-full bg-gradient-to-r from-accent-1 to-accent-2 text-[#09090b] px-6 py-4 rounded-2xl font-semibold text-base shadow-lg shadow-accent-1/20 active:scale-[0.98] transition-transform">
                                            Get Started
                                        </button>
                                    </Link>

                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <p className="text-center text-sm text-gray-500">
                                            © 2024 Growbit. All rights reserved.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
