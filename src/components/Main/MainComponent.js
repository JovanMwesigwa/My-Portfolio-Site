import React from "react";
import BannerComponent from "../banner/banner";

const MainComponent = () => {
    return(
        <div>
            <BannerComponent />
            <div style={{ display: "flex" , width: "100%", maxHeight: "60%" }}>
                <div>
                    <img src={require("../../assets/images/nesa.jpg")} alt="logo" style={{ width: '45rem', flex: 1 }} />
                </div>
                <div style={{ backgroundColor: "black", flex: 1, color: "#fff" }}>
                    <h1 style={{ textAlign: "start", 
                                padding: 20, paddingTop: 80, 
                                fontWeight: "bold", letterSpacing: 3 }}
                    >EVERYTHING YOU NEED IN ONE SOLUTION</h1>
                <h5 style={{ padding: 10, margin: 20,  }}>I build responsive web applications using the best of two worlds, (Django and React). With a deep understanding of FrontEnd development using Javascript and backend API design using Python.</h5>
                </div>
            </div>
        </div>
    );
}

export default MainComponent