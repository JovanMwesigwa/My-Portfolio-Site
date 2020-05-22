import React from "react";
import { Link  } from 'react-router-dom';

const BannerComponent = () => {
    return(       
        <div style={{  width: "100%", maxHeight: "60%", 
                    padding: 50,display: "flex", 
                    flexDirection: "column", 
                    marginLeft: "30%",
            }}>
            <h4 style={{  paddingBottom: 20, fontSize: 30 }}>Connect With Me....</h4>           
                <div  >
                    <a href="https://github.com/JovanMwesigwa">
                        <img src={require("../../assets/images/githublogo.png")} alt="logo" style={{ width: 80 }} />
                    </a> 
                    <Link to='/'>
                        <img src={require("../../assets/images/linkedInlogo.png")} alt="logo" style={{ width: 80, marginLeft: "5rem" }} />
                    </Link>   
                    <a href="https://www.facebook.com/mwesigwa.jovan">
                        <img src={require("../../assets/images/facebook.png")} alt="logo" style={{ width: 80, marginLeft: "5rem" }} />
                    </a>
                </div>
            
            
        </div>
    );
}

export default BannerComponent