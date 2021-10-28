import React from 'react'
import { Link } from 'react-router-dom'
import DownArrow from 'images/landing-section-1/down-arrows.png'

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
                    <Link
                        // to={localStorage.getItem("user")?"app/feed":"/login"}
                        to={"/login"}
                        // to={"/login"}
                        className="landing-page__hero__text-box__button__item landing-page__hero__text-box__button__item--login"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/signup"
                        className="landing-page__hero__text-box__button__item"
                    >
                        Sign Up
                    </Link>
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
