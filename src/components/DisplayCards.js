import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function DisplayCards(props) {
  return (
    <Card style={{ width: "18rem" }} data-bs-theme="dark" className="mb-4">
      <Card.Img variant="top" src={`./${props.image}`} className="card--img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="light" href={props.wikilink} target="_blank">
          More Information
        </Button>
      </Card.Body>
    </Card>
  );
}
