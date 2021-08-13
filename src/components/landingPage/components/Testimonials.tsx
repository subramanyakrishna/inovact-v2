import React from 'react'
import testimonials from '../../../images/landing-section-6/testimonials-map.png'

function Testimonials() {
    return (
        <section className="section-testimonials">
            <div className="section-testimonials__text">
                <h1 className="heading-primary">Testimonials</h1>
                <p className="paragraph-primary">
                    We are young and enthusiastic entrepreneurs aspiring to
                    cover the gap between students and the industry.
                </p>
            </div>
            <div className="section-testimonials__map">
                <img src={testimonials} alt="" />
            </div>
        </section>
    )
}

export default Testimonials
