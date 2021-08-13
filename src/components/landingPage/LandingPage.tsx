import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Mission from './components/Mission'
import Hero from './components/Hero'
import Features from './components/Features'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <About />
            <Mission />
            <Features />
            <Achievements />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage
