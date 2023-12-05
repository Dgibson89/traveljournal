import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

export default function DisplayCards(props) {
    return (
        <Card style={{ width: '18rem' }} className='mb-4'>
          <Card.Img variant="top" src={`./${props.image}`} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary">More Information</Button>
          </Card.Body>
        </Card>
      );
}
