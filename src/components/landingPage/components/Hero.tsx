import React from 'react'
import DownArrow from '../../../images/landing-section-1/down-arrows.png'

function Hero() {
    return (
        <section className="landing-page__hero">
            <div className="landing-page__hero__text-box">
                <p className="landing-page__hero__text-box__main">
                    Welcome to inovact
                </p>
                <p className="landing-page__hero__text-box__sub">
                    <span>Learn.</span> <span>Connect.</span>{' '}
                    <span>Innovate.</span>
                </p>
            </div>
            <img
                className="landing-page__hero__down-arrows"
                src={DownArrow}
                alt=""
            />
        </section>
    )
}

export default Hero
