import React from 'react'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import WhyGrowbit from '../components/Home/WhyGrowbit'
import HowWeWork from '../components/Home/HowWeWork'
import Testimonials from '../components/Home/Testimonials'
import AppShowcase from '../components/Home/AppShowcase'
import CTA from '../components/Home/CTA'
import Navbar from '../components/common/Navbar'

const Home = () => {
    return (
        <div className='w-full min-h-screen'>
            <Navbar />
            <Hero />
            <Features />
            <WhyGrowbit />
            <HowWeWork />
            <Testimonials />
            <AppShowcase />
            <CTA />
        </div>
    )
}

export default Home