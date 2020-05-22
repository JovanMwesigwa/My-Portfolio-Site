import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ContactCard = ({title, url}) => {
    return(
        <Container style={{ paddingBottom: 25 }} >
            <Card className="text-center" >
                <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <Link to={url}>{url}</Link>
                    </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    )
}

export default ContactCard