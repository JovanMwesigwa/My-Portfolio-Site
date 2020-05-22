import React, { useState } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import BannerComponent from "../../components/banner/banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import ContactCard from "../../components/contactCard/contactCard";


const Contact = () => {

    const [details, setDetails] = useState([
        {title: "My Email", url: "https://mail.google.com/"},
        {title: "My Github", url: "https://github.com/JovanMwesigwa"},
        {title: "My Facebook", url: "https://www.facebook.com/mwesigwa.jovan"},
        {title: "My Contact", url: "+256779280949"},
        {title: "My Mobile", url: "+256700719619"},
    ])
    return(
        <div>
            <div style={{ paddingBottom: "8rem" }}>
                <div style={{padding: 50, backgroundColor: "#212626", width: "100%" }}>
                    <h1 style={{ color: "#EBEBEB", margin: 30, height: "1rem" }}>About Me</h1>
                </div>
                <NavbarComponent />
                <BannerComponent />
                {
                    details.map(detail => 
                    <div key={detail.name}>
                        <ContactCard title={detail.title} url={detail.url} />
                    </div> 
                        )
                }               
                
            </div>
            <FooterComponent />

        </div>
        
    )
}

export default Contact