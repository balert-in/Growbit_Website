import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Button from "./Button"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="py-3 px-4 md:px-12 flex items-center justify-between">
        <Link to="/">
          <motion.img
            src="/logo.webp"
            alt="GrowBit Logo"
            className="h-auto w-26 object-contain"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          />
        </Link>

        <div className="hidden md:flex gap-8 text-black font-normal text-base">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ scale: 1.08, rotateY: 10 }}
              whileTap={{ scale: 0.96 }}
              className="relative"
            >
              <Link
                to={link.to}
                className={`px-1 transition-colors duration-300 ${
                  location.pathname === link.to ? "text-[#75ccc3] font-bold" : "hover:opacity-70"
                }`}
              >
                <span className="inline-block transition-transform duration-300">{link.label}</span>
              </Link>
              {location.pathname === link.to && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#75ccc3] rounded"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block ml-auto md:ml-0">
          <Link to="/contact">
            <Button
              variant="primary"
            >
              Get Started
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden ml-4 z-50 flex items-center justify-center w-10 h-10 relative"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <motion.svg
            key={menuOpen ? "close" : "menu"}
            initial={{ rotate: menuOpen ? 90 : 0, scale: 0.7, opacity: 0 }}
            animate={{ rotate: menuOpen ? 90 : 0, scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <motion.g key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.line x1="6" y1="6" x2="18" y2="18" stroke="#222" strokeWidth="2" />
                <motion.line x1="6" y1="18" x2="18" y2="6" stroke="#222" strokeWidth="2" />
              </motion.g>
            ) : (
              <motion.g key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.line x1="4" y1="6" x2="20" y2="6" stroke="#222" strokeWidth="2" />
                <motion.line x1="4" y1="12" x2="20" y2="12" stroke="#222" strokeWidth="2" />
                <motion.line x1="4" y1="18" x2="20" y2="18" stroke="#222" strokeWidth="2" />
              </motion.g>
            )}
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col items-start pt-24 px-8 gap-4 z-40 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                transition={{
                  duration: 0.4,
                  delay: menuOpen ? index * 0.1 : (navLinks.length - index - 1) * 0.08,
                  ease: "easeOut",
                }}
                className="w-full"
              >
                <Link
                  to={link.to}
                  className={`text-lg font-semibold w-full py-2 text-center block ${
                    location.pathname === link.to ? "text-[#75ccc3]" : "text-black"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 30, filter: "blur(8px)" }}
              transition={{
                duration: 0.4,
                delay: menuOpen ? navLinks.length * 0.1 : 0,
                ease: "easeOut",
              }}
              className="w-full"
            >
              <Link to="/contact" className="w-full" onClick={() => setMenuOpen(false)}>
                <Button variant="primary" width="full" className="sm:w-auto">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {menuOpen && <div className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}

export default Navbar
