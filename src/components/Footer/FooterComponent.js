import React from "react";
import './style.css';
import Row from "react-bootstrap/Row";


const FooterComponent = () => {
    return(
        <div className="footer">
            
                <Row className="justify-content-md-center"> 
                    <div >
                        <h1>My Contacts</h1> 
                        <ul className="list">
                            <li>Email:jovanmwesigwa79@gmail.com</li>
                            <li>Phone: +256779280949</li>
                            <li>Mobile: +256700719619</li>
                        </ul>
                    </div>
                    <div>
                        <h1>My Socials</h1>
                        <ul className="list">      
                            <li>Github: <a href="https://github.com/JovanMwesigwa">Jovan Mwesigwa</a></li>
                            <li>Email: jovanmwesigwa79@gmail.com</li>                       
                            <li>Facebook: <a href="https://www.facebook.com/mwesigwa.jovan">Jovan Mwesigwa</a></li>
                        </ul>                
                    </div>            
                </Row>
            
        </div>
    );
}

export default FooterComponent