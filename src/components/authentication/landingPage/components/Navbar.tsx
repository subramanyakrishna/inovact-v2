import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from 'mdb-react-ui-kit'
import logo from 'images/logo/inovactlogo.png'
import { useEffect } from 'react'

function Navbar() {
    const [showNavText, setShowNavText] = useState(false)

    const handleLinkClick = () => {
        setShowNavText(false)
    }

    useEffect(() => {
        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('.nav-item')
        window.addEventListener('scroll', () => {
            let current: string | null = ''
            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.clientHeight
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section?.getAttribute('id')
                }
            })

            navLi.forEach((li) => {
                li.classList.remove('active')
                if (current && li.classList.contains(current)) {
                    li.classList.add('active')
                }
            })
        })
    })

    return (
        <div className="navigation-bar">
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer>
                    <MDBNavbarBrand href="#">
                        <img src={logo} alt="Logo" width="40px" />
                        Inovact
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowNavText(!showNavText)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavText}>
                        <MDBNavbarNav
                            right
                            fullWidth={false}
                            className="mb-2 mb-lg-0"
                        >
                            <MDBNavbarItem className="about">
                                <MDBNavbarLink
                                    onClick={handleLinkClick}
                                    href="#about"
                                >
                                    About
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="mission">
                                <MDBNavbarLink
                                    onClick={handleLinkClick}
                                    href="#mission"
                                >
                                    Mission
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="features">
                                <MDBNavbarLink
                                    onClick={handleLinkClick}
                                    href="#features"
                                >
                                    Features
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="achievements">
                                <MDBNavbarLink
                                    onClick={handleLinkClick}
                                    href="#achievements"
                                >
                                    Achievements
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="testimonials">
                                <MDBNavbarLink
                                    onClick={handleLinkClick}
                                    href="#testimonials"
                                >
                                    Testimonials
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem className="contact">
                                <MDBNavbarLink
                                    onClick={handleLinkClick}
                                    href="#contact"
                                >
                                    Contact
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Navbar
