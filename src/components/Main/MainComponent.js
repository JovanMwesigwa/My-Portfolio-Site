import React from "react";
import BannerComponent from "../banner/banner";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const MainComponent = () => {
    return(
            <Row >
                <BannerComponent />
                <Row xs={1} md={2}>
                    <Image src={require("../../assets/images/nesa.jpg")} fluid />
                    {/* <img src={require("../../assets/images/nesa.jpg")} alt="logo" 
                        style={{ width: 100, flex: 2 }} 
                    /> */}
                    <div style={{ backgroundColor: "black", flex: 1, color: "#fff" }}>
                        <h1 style={{ textAlign: "start", 
                                        padding: "10%", paddingTop: 80, 
                                        fontWeight: "bold", letterSpacing: 3 }}
                        >EVERYTHING YOU NEED IN ONE SOLUTION</h1>
                        <h5 style={{ padding: "10%", paddingTop: 0  }}>I build responsive web applications using the best of two worlds, (Django and React). With a deep understanding of FrontEnd development using Javascript and backend API design using Python.</h5>
                    </div>
                </Row>
            </Row>
    );
}

export default MainComponent