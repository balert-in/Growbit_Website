import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  'UI/UX Design',
  'Web Development',
  'Mobile Apps',
  'Digital Marketing',
  'Cloud Solutions',
]

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Services', to: '/services' },
]

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/growbit.in/' },
  { icon: Youtube, href: 'https://www.youtube.com/@growbit' },
  { icon: Instagram, href: 'https://www.instagram.com/growbit.in/?hl=en' },
  { icon: Linkedin, href: 'https://in.linkedin.com/company/thegrowbit' },
]

const policies = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

const FooterSection = () => (
  <footer className="w-full bg-[#181818] text-white pt-12 pb-4 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between border-b border-white/10 pb-8">
      <div className="flex-1 min-w-[220px] flex flex-col gap-4">
        <Link to="/">
          <motion.img
            src="/logo-light.webp"
            alt="GrowBit Logo"
            className="h-auto w-20 object-contain"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
          />
        </Link>
        <p className="text-sm text-white/60 max-w-xs">
          GrowBit is an end-to-end Gig marketplace connecting you with seasoned experts to grow your business. From startups to enterprises, we deliver next-wave services with unmatched quality.
        </p>
        <div className="flex gap-3 mt-2">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#232323] rounded-md p-2 flex items-center justify-center cursor-pointer hover:bg-[#75ccc3] transition-colors"
              whileHover={{ scale: 1.15, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <s.icon size={20} className="text-white" />
            </motion.a>
          ))}
        </div>
      </div>
     <div className='flex flex-1'>
     <div className="flex-1 min-w-[180px] flex flex-col gap-2">
        <span className="text-base font-semibold mb-2">Services</span>
        {services.map((s, i) => (
          <motion.a
            whileHover={{ x: 3 }}
            key={i}
            href="#"
            className="text-white/80 hover:text-[#75ccc3] transition-colors cursor-pointer text-sm py-0.5"
          >
            {s}
          </motion.a>
        ))}
      </div>
      <div className="flex-1 min-w-[180px] flex flex-col gap-2">
        <span className="text-base font-semibold mb-2">Company</span>
        {company.map((c, i) => (
          <Link
            key={i}
            to={c.to}
            className="text-white/80 hover:text-[#75ccc3] transition-all duration-300 cursor-pointer text-sm py-0.5 hover:translate-x-1.5"
          >
            {c.label}
          </Link>
        ))}
      </div>
     </div>
    </div>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-white/50 gap-2">
      <span>&copy; {new Date().getFullYear()} GrowBit. All rights reserved.</span>
      <div className="flex gap-6 mt-2 md:mt-0">
        {policies.map((p, i) => (
          <Link
            key={i}
            to={p.to}
            className="hover:text-[#75ccc3] transition-colors cursor-pointer"
          >
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
)

export default FooterSection 