import React from 'react'
import { FaWpforms } from 'react-icons/fa6';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';



const Mynavbar = () => {
  return (
    <div>
   <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand className="logo" href="#home">
          <FaWpforms /> Document Form
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link">About</Nav.Link>
            <Nav.Link href="#form" className="nav-link">Form</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Mynavbar

