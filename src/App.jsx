import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Home/Footer'
import FooterTagline from './components/Home/FooterTagline'

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-white min-h-screen w-full mb-[200px] sm:mb-[205px] md:mb-[305px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FooterTagline />
      </main>
    </BrowserRouter>
  )
}

export default App
