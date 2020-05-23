import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './style.css';

const HeaderComponent = () => {
    return(
          
        <Carousel >
            <Carousel.Item >
                <img
                className="d-block w-100"
                src={require("../../assets/images/banner-img.png")}
                alt="First slide"
                style={{ width: 800, height: 600 }}
                />
                <Carousel.Caption style={{ 
                    position: "absolute",           
                }} 
                >
                    <Container>
                        <Col>
                        
                            <h1 className="header-style" >WEBSITE DEVELOPER </h1>
                            <h2 className="header2-style" style={{ 
                                color: "#DE0D4F", fontSize: 32,
                                fontWeight: "bold", 
                                letterSpacing: 3,
                                textAlign: "left" ,              
                                }}
                            >FOR YOUR BUSINESS</h2>
                            <p style={{ 
                                color: "#DE0D4F", fontSize: 20,
                                letterSpacing: 3,
                                textAlign: "left" ,                 
                                }}
                            >Showcase your business with thousands of customers onLine with a web application</p>
                            <Link to="/about-me" style={{ backgroundColor: "#DB184C",
                                                        textDecoration: "none", color: "#fff", 
                                                        float: "left", padding: 10, width: 200, fontSize: 20 }}
                            >About Me</Link>
                        </Col>
                    </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../../assets/images/banner-img.png")}
                alt="Third slide"
                style={{ width: 800, height: 600 }}
                />
                <Carousel.Caption
                style={{ 
                    position: "absolute", 
                }}
                >
                    <Col>
                    
                    <h1 className="header-style" 
                    >PROFESSIONAL AND 
                    RESPONSIVE DESIGNS
                    </h1>
                    <h2  style={{ 
                        color: "#DE0D4F", fontSize: 32,
                        fontWeight: "bold", 
                        letterSpacing: 3,
                        textAlign: "left" ,
                                        
                    }}
                    >FOR YOUR BUSINESS</h2>
                    <p style={{ color: "#DE0D4F", fontSize: 20,letterSpacing: 3,textAlign: "left" ,padding: 10 }}
                    >Showcase your business with thousands of customers  onLine with a web application</p>
                    <Link to="/about-me" style={{ backgroundColor: "#DB184C",
                                                textDecoration: "none", color: "#fff", 
                                                float: "left", padding: 10, width: 200, fontSize: 20 }}
                     >About Me</Link>
                    </Col>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeaderComponent