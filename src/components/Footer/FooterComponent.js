import React from "react";
import './style.css';
import { Link } from "react-router-dom";


const FooterComponent = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div>
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
                        <li>Github:<Link to="https://github.com/JovanMwesigwa" >Jovan Mwesigwa</Link> </li>
                        <li>Email: jovanmwesigwa79@gmail.com</li>
                        <li>Facebook: <Link to="https://www.facebook.com/mwesigwa.jovan" >Jovan Mwesigwa</Link></li>
                    </ul>                
                </div>            
            </div>
        </div>
    );
}

export default FooterComponent