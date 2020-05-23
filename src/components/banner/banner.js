import React from "react";
import { Link  } from 'react-router-dom';
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container";
const BannerComponent = () => {
    return( 
        <Container style={{ padding: '3rem' }}>
            <h4 style={{ textAlign: "center",  paddingBottom: 20, fontSize: 30 }}>Connect With Me....</h4>           
            <Row className="justify-content-md-center">
                    <div style={{ margin: 40, paddingBottom: 10 }}>
                        <a href="https://github.com/JovanMwesigwa">
                            <img src={require("../../assets/images/githublogo.png")} alt="logo" style={{ flex: 1, width: "5rem", }} />
                        </a> 
                    </div>
                    <div style={{ margin: 40, paddingBottom: 10  }}>
                        <Link to='/'>
                            <img src={require("../../assets/images/linkedInlogo.png")} alt="logo" style={{flex: 1,  width: "5rem" }} />
                        </Link>   
                    </div>
                    <div style={{ margin: 40, paddingBottom: 10  }}>
                        <a href="https://www.facebook.com/mwesigwa.jovan">
                            <img src={require("../../assets/images/facebook.png")} alt="logo" style={{flex: 1, width: "5rem" }} />
                        </a>
                    </div>
                 
            </Row>
        </Container>      
    );
}

export default BannerComponent