import React from 'react'

function Contact() {
    return (
        <section className="section-contact">
            <div className="section-contact__text">
                <h1 className="heading-primary heading-primary--white">
                    Contact Us
                </h1>
                <p className="paragraph-primary paragraph-primary--white">
                    Send in your queries about inovact social and inovact live
                    courses, and we will get back to you soon.
                </p>
            </div>
            <div className="section-contact__form">
                <form>
                    <label
                        htmlFor="name"
                        className="section-contact__form__label"
                    >
                        Full name
                    </label>
                    <input
                        name="name"
                        className="section-contact__form__input"
                        placeholder="Enter your name"
                    ></input>
                    <label
                        htmlFor="email"
                        className="section-contact__form__label"
                    >
                        Email
                    </label>
                    <input
                        name="email"
                        className="section-contact__form__input"
                        placeholder="Enter your email"
                    ></input>
                    <label
                        htmlFor="message"
                        className="section-contact__form__label"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        className="section-contact__form__textarea"
                        placeholder="Enter your query"
                    ></textarea>
                    <div className="section-contact__form__button">
                        <a
                            className="section-contact__form__button__item"
                            href="/"
                        >
                            SUBMIT
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
