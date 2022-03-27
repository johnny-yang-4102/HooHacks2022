import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown, ProgressBar, Card} from "react-bootstrap"



const MatchList = ({ country }) => {

    return (
        <div>
          <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">HoosYourFit</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Find buddies</Nav.Link>
                        <Nav.Link href="#link">Matches</Nav.Link>
                        <Nav.Link href="#link">My profile</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div><h2>My matches</h2></div>
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                    <h4>Search in University of Virginia</h4>
                    </Col>
                </Row>
                <Row>
                  <input value={""} onChange={""}/>
                </Row>
            </Container>
            <Container>
              <Card>
                <Card.Header as="h5">Timothy Walker</Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={6} md={6}>
                      <Card.Text>
                      Hey Kurt, how's it going?
                    </Card.Text>
                    </Col>
                    <Col xs={6} md={4}>
                      Compatibility
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <Button variant="primary">Message</Button>
                      <Button variant="light">View profile</Button>
                    </Col>
                    <Col xs={6} md={5}>
                      <ProgressBar now={60} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
            <Container>
              <Card>
                <Card.Header as="h5">Timothy Walker</Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={6} md={6}>
                      <Card.Text>
                      Hey Kurt, how's it going?
                    </Card.Text>
                    </Col>
                    <Col xs={6} md={4}>
                      Compatibility
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <Button variant="primary">Message</Button>
                      <Button variant="light">View profile</Button>
                    </Col>
                    <Col xs={6} md={5}>
                      <ProgressBar now={60} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
            <Container>
              <Card>
                <Card.Header as="h5">Timothy Walker</Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={6} md={6}>
                      <Card.Text>
                      Hey Kurt, how's it going?
                    </Card.Text>
                    </Col>
                    <Col xs={6} md={4}>
                      Compatibility
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <Button variant="primary">Message</Button>
                      <Button variant="light">View profile</Button>
                    </Col>
                    <Col xs={6} md={5}>
                      <ProgressBar now={60} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
        </div>
      );
}


export default MatchList