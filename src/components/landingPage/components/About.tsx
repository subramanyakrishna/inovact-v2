import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import sideImage from 'images/landing-section-2/side-image.png'

function About() {
    return (
        <section id="about" className="section-about">
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="6" className="section-about__image">
                        <img src={sideImage} alt=""></img>
                    </MDBCol>
                    <MDBCol md="6" className="section-about__text">
                        <div className="section-about__text__box">
                            <h1 className="heading-primary">Our Story</h1>
                            <p className="paragraph-primary">
                                With more than one crore Indian students
                                graduating every year, less than half are fit
                                for employment. Although India has the
                                third-largest ecosystem for startups, 80%-90%
                                fail within the first five years of inception.
                                Inovact is a student startup aspiring to provide
                                the right resources at the right time for Indian
                                students and entrepreneurs for their upliftment.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default About
