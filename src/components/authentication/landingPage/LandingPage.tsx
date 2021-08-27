import React from 'react'
import Navbar from 'components/authentication/landingPage/components/Navbar'
import About from 'components/authentication/landingPage/components/About'
import Mission from 'components/authentication/landingPage/components/Mission'
import Hero from 'components/authentication/landingPage/components/Hero'
import Features from 'components/authentication/landingPage/components/Features'
import Achievements from 'components/authentication/landingPage/components/Achievements'
import Testimonials from 'components/authentication/landingPage/components/Testimonials'
import Contact from 'components/authentication/landingPage/components/Contact'
import Footer from 'components/authentication/landingPage/components/Footer'

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
