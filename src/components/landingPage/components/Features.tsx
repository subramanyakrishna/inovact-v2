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
        <section id="features" className="section-features">
            <div className="section-features__text">
                <h1 className="heading-primary">Our Key Features</h1>
                <p className="paragraph-primary">
                    If you're a student wanting to upskill yourself or an
                    entrepreneur working on the next big thing, we've got you
                    covered with our key features.
                </p>
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
                        A one stop socialising platform for students,
                        entrepreneurs and mentors to Learn, Connect and
                        Innovate.
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
                        A well organised learning program handled by experienced
                        instructors encouraging you to acquire latest skills and
                        tools.
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
