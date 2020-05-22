import React from "react";
import { Link  } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'; 
import './style.css';

const ProjectsBanner = () => {
    return(
        
        <div style={{  width: "100%", maxHeight: "60%", 
                    padding: 50,display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center"
            }}
        >
            <h4 style={{  paddingBottom: 20, fontSize: 30 }}>More About Me...</h4>
            
                <CardDeck >
                    <Link to="/about-me" >
                        <Card border="warning" className="item-card" >
                            <img className="image" src={require('../../assets/icons/aboutme.png')} alt="icon" />
                            <div class="overlay">
                                <div class="text">About Me</div>
                            </div>
                        </Card>
                    </Link> 
                    <Link to='/my-projects'>
                        <Card border="danger" className="item-card">
                            <img className="image" src={require('../../assets/icons/projectsicon.png')} alt="icon" />
                            <div class="overlay">
                                <div class="text">My Projects</div>
                            </div>
                        </Card>
                    </Link>   
                    <Link to="/contact-me" >
                        <Card border="dark" className="item-card">
                            <img className="image" src={require('../../assets/icons/contactme.png')} alt="icon"/>
                            <div class="overlay">
                                <div class="text">Contact Me</div>
                            </div>
                        </Card>
                    </Link>

                </CardDeck>
            
            
        </div>
    );
}

export default ProjectsBanner