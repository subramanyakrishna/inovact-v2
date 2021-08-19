import React from 'react'
import DownArrow from '../../../images/landing-section-1/down-arrows.png'

function Hero() {
    return (
        <section id="hero" className="landing-page__hero">
            <div className="landing-page__hero__text-box">
                <p className="landing-page__hero__text-box__main">
                    Welcome to inovact
                </p>
                <p className="landing-page__hero__text-box__sub">
                    <span>Learn.</span> <span>Connect.</span>{' '}
                    <span>Innovate.</span>
                </p>
                <div className="landing-page__hero__text-box__button">
                    <a
                        className="landing-page__hero__text-box__button__item landing-page__hero__text-box__button__item--login"
                        href="/login"
                    >
                        Log In
                    </a>
                    <a
                        className="landing-page__hero__text-box__button__item"
                        href="/signup"
                    >
                        Sign Up
                    </a>
                </div>
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
