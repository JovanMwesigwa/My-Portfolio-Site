import React from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import BannerComponent from "../../components/banner/banner";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FooterComponent from "../../components/Footer/FooterComponent";

const About = () => {
    return(
        <div>
            <div style={{padding: 50, backgroundColor: "#212626", width: "100%" }}>
                <h1 style={{ color: "#EBEBEB", margin: 30, height: "1rem" }}>About Me</h1>
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
                        I also do API design using Django RestFramework<br />
                        <p></p>
                        and PostMan                      
                    </h5>
                </Card>
            </Container>
            <FooterComponent />
        </div>
        
    )
}

export default About