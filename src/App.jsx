import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Footer from './components/common/Footer'
import FooterTagline from './components/common/FooterTagline'
import ScrollToTop from './components/common/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="min-h-screen w-full relative z-10 bg-[#09090b] mb-[200px] sm:mb-[205px] md:mb-[305px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </main>
      <FooterTagline />
    </BrowserRouter>
  )
}

export default App
