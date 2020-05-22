import React, { useState } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import BannerComponent from "../../components/banner/banner";
import Container from 'react-bootstrap/Container';
import CardComponent from "../../components/card/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import FooterComponent from "../../components/Footer/FooterComponent";

const Project = () => {

    const [sites, setSites] = useState([
        {title: "covid-19 Tracker", url:"https://inspiring-jennings-c7617f.netlify.app/", id:1, description: "This is a Covid-19 App"},
        {title: "Joker App", url: "https://github.com/JovanMwesigwa/Joke-generator-app-with-reactjs", id:2, description: "This is a simple Joke Generator application"}
    ])
    return(
        <div>
            <div style={{padding: 50, backgroundColor: "#212626", width: "100%" }}>
                <h1 style={{ color: "#EBEBEB", margin: 30, height: "1rem" }}>My Projects</h1>
            </div>
            <NavbarComponent />
            <BannerComponent />
            <Container style={{ paddingBottom: "8rem" }}>
                <CardDeck >
                        {
                            sites.map(site =>                         
                                <CardComponent 
                                    key={site.id} 
                                    title={site.title} 
                                    url={site.url} 
                                    description={site.description}
                                />                         
                            )
                        }                    
                </CardDeck>
            </Container>
            <FooterComponent />
        </div>
        
    )
}

export default Project