import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'; 


const NavbarComponent = () => {
    return(
        <Container>
            <Navbar expand="lg" variant="light" bg="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#">
                        <Link to="/" style={{ textDecoration: "none", color: "#2E3333" }} >JOVAN MWESIGWA</Link>                   
                    </Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Brand className="home">
                        <Link to="/" style={{ textDecoration: "none", color: "#2E3333" }} >Home</Link>
                    </Navbar.Brand>
                    <Navbar.Brand className="about-me" >
                        <Link to="/about-me" style={{ textDecoration: "none", color: "#2E3333" }} >About Me</Link>
                    </Navbar.Brand>
                    <Navbar.Brand className="contact" >
                        <Link to="/contact-me" style={{ textDecoration: "none", color: "#2E3333" }} >Contact Me</Link>
                    </Navbar.Brand>
                    <Navbar.Brand className="projects" >
                        <Link to="/my-projects" style={{ textDecoration: "none", color: "#2E3333" }} >My Projects</Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavbarComponent