import React from 'react'
import Navbar from 'components/landingPage/components/Navbar'
import About from 'components/landingPage/components/About'
import Mission from 'components/landingPage/components/Mission'
import Hero from 'components/landingPage/components/Hero'
import Features from 'components/landingPage/components/Features'
import Achievements from 'components/landingPage/components/Achievements'
import Testimonials from 'components/landingPage/components/Testimonials'
import Contact from 'components/landingPage/components/Contact'
import Footer from 'components/landingPage/components/Footer'

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
