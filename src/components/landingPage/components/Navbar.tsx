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
import logo from '../../../images/logo/inovact-logo.png'

function Navbar() {
    const [showNavText, setShowNavText] = useState(false)

    return (
        <div className="navigation-bar">
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer>
                    <MDBNavbarBrand href="#">
                        <img src={logo} alt="Logo" />
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
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#about">
                                    About
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#mission">
                                    Mission
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#features">
                                    Features
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#achievements">
                                    Achievements
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#testimonials">
                                    Testimonials
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#contact">
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
