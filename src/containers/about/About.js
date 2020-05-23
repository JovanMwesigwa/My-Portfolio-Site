import React from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import BannerComponent from "../../components/banner/banner";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FooterComponent from "../../components/Footer/FooterComponent";

const About = () => {
    return(
        <div>
            <div style={{padding: 50, backgroundColor: "#212626", width: "100%", height: "100%" }}>
                <Container>                   
                     <h1 style={{ color: "#EBEBEB", margin: 30, height: "1rem", paddingTop: 10 }}>About Me</h1>
                </Container>
            </div>
            <NavbarComponent />
            <BannerComponent />
            <Container style={{ paddingBottom: "8rem" }} >
                <Card body style={{ backgroundColor: "#FAB9CA", textAlign: "center", padding: 10, margin: 10, }}>
                    <h5 style={{ marginBottom: 2 }}>My Name is Mwesigwa Jovan Balambirwa <br />
                        <p></p>
                        A self taught software developer and a bootcamp graduate. <br />
                        <p></p>
                        This is my Tech Stack: <br />
                        <p></p>
                        I write code in Javascript and Python <br />
                        <p></p>
                        On the Frontend I use HTML5, CSS, SASS, Javascript,<br />
                        <p></p>
                        bootstrap, Material UI and React JS.  <br />
                        <p></p>
                        On the backend: <br />
                        <p></p>
                        I use Python and Django framework to handle MVC <br /> 
                        <p></p> 
                        patterns.<br /> 
                        <p></p>
                        I also do API design using the Django Rest-framework<br />
                        <p></p>
                        and PostMan to test them .<br></br>
                        <p></p>
                        In 2019 I was involved in an IOT and embedded sytems<br></br> 
                        <p></p>
                        design  at a local company  in Kampala.
                        <p></p>
                        called Supercomm Technologies where we were programming <br></br> 
                        <p></p>
                        in C++ and Arduino, we designed websites <br></br> 
                        <p></p>
                        with WordPress and I attained a Certificate as a Junior developer. <br></br>
                        <p></p>
                        Later that year I joined in the Africa Codes program where I <br></br>
                        <p></p>
                        worked with the IEEE foundation to teach High School Students and <br></br>
                        <p></p>
                        kids around the country how to code in Python and Javascript <br></br>
                        <p></p>
                        where I also attained a certificate doing that.<br></br>
                        
                        

                    </h5>
                </Card>
            </Container>
            <FooterComponent />
        </div>
        
    )
}

export default About