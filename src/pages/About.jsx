import React from 'react'
import AboutHero from '../components/About/AboutHero'
import Stats from '../components/About/Stats'
import Journey from '../components/About/Journey'
import Timeline from '../components/About/Timeline'
import CEONote from '../components/About/CEONote'
import CTA from '../components/Home/CTA'
import Footer from '../components/Home/Footer'
import FooterTagline from '../components/Home/FooterTagline'
import Navbar from '../components/Home/Navbar'

const About = () => {
    return (
        <div className='w-full bg-[#09090b] min-h-screen'>
            <Navbar />
            <AboutHero />
            <Stats />
            <Journey />
            <Timeline />
            <CEONote />
            <CTA />
        </div>
    )
}

export default About
