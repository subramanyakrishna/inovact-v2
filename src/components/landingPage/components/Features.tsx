import React from 'react'
import cornerCircle from '../../../images/landing-section-4/corner-circle.png'
import upload from '../../../images/landing-section-4/upload.png'
import team from '../../../images/landing-section-4/find-team.png'
import mentor from '../../../images/landing-section-4/meet-mentor.png'
import courses from '../../../images/landing-section-4/live-courses.png'
import certification from '../../../images/landing-section-4/certification.png'
import instructors from '../../../images/landing-section-4/instructors.png'

function Features() {
    return (
        <section className="section-features">
            <div className="section-features__text">
                <h1 className="heading-primary">Our Key Features</h1>
            </div>
            <div className="section-features__body">
                <div className="section-features__body__text">
                    <img
                        className="section-features__body__text__image"
                        src={cornerCircle}
                        alt=""
                    />
                    <p className="section-features__body__text__main">
                        INOVACT SOCIAL
                    </p>
                    <p className="section-features__body__text__sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Diam id viverra purus odio leo, tincidunt consequat
                        elementum purus.
                    </p>
                </div>
                <div className="section-features__body__content">
                    <div className="section-features__body__content__item">
                        <img src={upload} alt="" />
                        <p>Upload projects and ideas</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={team} alt="" />
                        <p>Find your team</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={mentor} alt="" />
                        <p>Meet your mentor</p>
                    </div>
                </div>
            </div>
            <div className="section-features__body">
                <div className="section-features__body__text section-features__body__text--learning">
                    <img
                        className="section-features__body__text__image section-features__body__text__image--learning"
                        src={cornerCircle}
                        alt=""
                    />
                    <p className="section-features__body__text__main">
                        INOVACT LEARNING
                    </p>
                    <p className="section-features__body__text__sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Diam id viverra purus odio leo, tincidunt consequat
                        elementum purus.
                    </p>
                </div>
                <div className="section-features__body__content">
                    <div className="section-features__body__content__item">
                        <img src={courses} alt="" />
                        <p>Live courses</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={instructors} alt="" />
                        <p>Experienced instructors</p>
                    </div>
                    <div className="section-features__body__content__item">
                        <img src={certification} alt="" />
                        <p>Project-based certification</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
