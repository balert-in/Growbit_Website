import React from 'react'
import Hero from '../components/Home/Hero'
import Hero2 from '../components/Home/Hero2'
import Features from '../components/Home/Features'
import { FeatureCard } from '../components/Home/Features2'
import HowWeWork from '../components/Home/HowWeWork'
import Testimonials from '../components/Home/Testimonials'
import AppShowcase from '../components/Home/AppShowcase'
import CTA from '../components/Home/CTA'
import Footer from '../components/Home/Footer'
import FooterTagline from '../components/Home/FooterTagline'
import Navbar from '../components/Home/Navbar'
import { INITIAL_FEATURES } from '../constants'

const Home = () => {
    return (
        <div className='w-full'>
            <Navbar />
            {/* <Hero /> */}
            <Hero2 />
            <Features />
            <HowWeWork />
            <Testimonials />
            <AppShowcase />
            <CTA />
        </div>
    )
}

export default Home