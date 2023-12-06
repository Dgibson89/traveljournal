import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function () {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="nav--title">
          <img className="nav--img" src="./ghost.webp" />
          my future travel journal
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
