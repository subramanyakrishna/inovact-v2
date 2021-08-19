import React from 'react'

function Achievements() {
    return (
        <section id="achievements" className="section-achievements">
            <div className="section-achievements__text">
                <h1 className="heading-primary heading-primary--white">
                    Our Achievements
                </h1>
                <p className="paragraph-primary paragraph-primary--white">
                    As a part of the <i>‘Build a skill for your future’</i>{' '}
                    series which started in June 2021 Inovact has trained and
                    mentored more than 500 undergraduate students in various
                    tools and technologies like Python programming, Data
                    Science, Digital Marketing, Electric Vehicle technology,
                    Circuit Designing, 3D Designing and Web Development.{' '}
                </p>
            </div>
            <div className="section-achievements__content">
                <div className="section-achievements__content__item">
                    <h1>12</h1>
                    <p>COURSES CONDUCTED</p>
                </div>
                <div className="section-achievements__content__item">
                    <h1>13</h1>
                    <p>IN HOUSE INSTRUCTORS</p>
                </div>
                <div className="section-achievements__content__item">
                    <h1>500+</h1>
                    <p>STUDENTS MENTORED</p>
                </div>
            </div>
        </section>
    )
}

export default Achievements
