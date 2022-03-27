import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"

const NavBar = ({ handleStateOfAppChange }) => {

    //Put everything in the div here. NOTHING OUTSIDE DIV
    return (
        <div>
          <Navbar bg="light" expand="lg" >
                    <Container>
                        <Navbar.Brand id={0}>HoosYourFit</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link  id={1} onClick={handleStateOfAppChange} >Find buddies</Nav.Link>
                                <Nav.Link  id={2} onClick={handleStateOfAppChange}>Matches</Nav.Link>
                                <Nav.Link  id={3} onClick={handleStateOfAppChange}>My profile</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
      );
}


export default NavBar