import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Mission from './components/Mission'
import Hero from './components/Hero'

function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <About />
            <Mission />
        </div>
    )
}

export default LandingPage
