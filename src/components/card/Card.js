import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const CardComponent = ({ title, url, description }) => {
    return(
        
        <Card border="warning" style={{ width: '18rem', padding: 15 }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="danger"><a href={url} style={{ color: "white" }} >{url}</a></Button>
            </Card.Body>
        </Card> 
    )
}

export default CardComponent