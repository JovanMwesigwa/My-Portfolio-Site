import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

const ContactCard = ({title, url}) => {
    return(
        <Container style={{ paddingBottom: 25 }} >
            <Card className="text-center" >
                <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <a href={url} >{url}</a>
                    </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    )
}

export default ContactCard