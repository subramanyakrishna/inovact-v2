import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import learn from '../../../images/landing-section-3/learn.png'
import connect from '../../../images/landing-section-3/connect.png'
import inovate from '../../../images/landing-section-3/inovate.png'

function Mission() {
    return (
        <section className="section-mission">
            <div className="section-mission__text">
                <h1 className="heading-primary">Our Mission</h1>
                <p className="paragraph-primary">
                    We are young and enthusiastic entrepreneurs aspiring to
                    cover the gap between students and the industry.
                </p>
            </div>
            <div className="section-mission__cards">
                <MDBRow>
                    <MDBCol
                        sm="12"
                        md="6"
                        lg="4"
                        className="section-mission__cards__col"
                    >
                        <div className="section-mission__cards__item">
                            <img src={learn} alt="" />
                            <p>
                                Enable students and entrepreneurs in developing
                                the latest skills and tools as per industry and
                                market requirements.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol
                        sm="12"
                        md="6"
                        lg="4"
                        className="section-mission__cards__col"
                    >
                        <div className="section-mission__cards__item">
                            <img src={connect} alt="" />
                            <p>
                                Help students and entrepreneurs expand networks
                                with like-minded peers, Subject matter experts,
                                experienced entrepreneurs and mentors.
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol
                        sm="12"
                        md="6"
                        offsetMd="3"
                        offsetLg="0"
                        lg="4"
                        className="section-mission__cards__col"
                    >
                        <div className="section-mission__cards__item">
                            <img src={inovate} alt="" />
                            <p>
                                With the right set of skills and network in
                                hand, Inovact wants to provide a solid
                                infrastructure for students and entrepreneurs to
                                put their innovative ideas into action.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        </section>
    )
}

export default Mission
