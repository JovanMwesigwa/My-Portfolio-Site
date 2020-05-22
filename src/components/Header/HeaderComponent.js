import React from "react";
import Carousel from 'react-bootstrap/Carousel';
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
                />
                <Carousel.Caption style={{ 
                    position: "absolute", 
                    bottom: "2rem", width: "100%", 
                    padding: "7rem",
                    zIndex: '3',
                    
                }} 
                >
                <h1 className="header-style" >PROFESSIONAL  <br></br>WEBSITE DEVELOPER </h1>
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
                >Get in touch and showcase your business with thousands of customers <br></br> onLine with a web application</p>
                <Link to="/about-me" style={{ backgroundColor: "#DB184C",textDecoration: "none", color: "#fff", float: "left", padding: 10, width: 200, fontSize: 20 }} >About Me</Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../../assets/images/banner-img.png")}
                alt="Third slide"
                />
                <Carousel.Caption
                style={{ 
                    position: "absolute", 
                    bottom: "2rem", width: "100%", 
                    padding: "7rem",
                    zIndex: '3' 
                }}
                >
                <h1 style={{ 
                    color: "#0A0D0D", fontSize: 47, 
                    fontWeight: "bold", letterSpacing: 3,
                    textAlign: "left",                    
                }}
                >PROFESSIONAL AND <br></br>
                RESPONSIVE DESIGNS
                </h1>
                <h2 style={{ 
                    color: "#DE0D4F", fontSize: 32,
                    fontWeight: "bold", 
                    letterSpacing: 3,
                    textAlign: "left" ,                
                }}
                >FOR YOUR BUSINESS</h2>
                <p style={{ color: "#DE0D4F", fontSize: 20,letterSpacing: 3,textAlign: "left" ,padding: 10 }}
                >Get in touch and showcase your business with thousands of customers <br></br> onLine with a web application</p>
                <Link to="/about-me" style={{ backgroundColor: "#DB184C",textDecoration: "none", color: "#fff", float: "left", padding: 10, width: 200, fontSize: 20 }} >About Me</Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeaderComponent