import React from 'react'
import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

const NavBarComponent = () => {

    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });


    return (
        <Navbar collapseOnSelect expand="lg" bg='dark'>
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center me-3">
                        <Nav.Link href="#tentang-edspert">Program</Nav.Link>
                        <Nav.Link href="#tentang-edspert">Bidang Ilmu</Nav.Link>
                        <Nav.Link href="#tentang-edspert">Tentang Edspert</Nav.Link>
                    </Nav>
                    <div className='text-center'>
                        <button className="btn btn-danger rounded-1" size="sm">Masuk/Daftar</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent
