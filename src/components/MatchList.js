import React from "react"
import {useState, useEffect} from "react"
import axios from "axios"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown, ProgressBar, Card, Image} from "react-bootstrap"
import './progress-bar.css'


const MatchList = ({ country }) => {

    return (
        <div>
          <Navbar bg="light" expand="lg">
                <Container style={{ margin: 30}}>
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
            <Container style={{ margin: 40}}>
                <Row>
                    <Col xs={6} md={6}>
                    <h3>Search in University of Virginia</h3>
                    </Col>
                </Row>
                <Row>
                  <input value={""} onChange={""}/>
                </Row>
            </Container>
            <Container style={{ margin: 20}}>
              <Card>
                <Card.Header as="h5">Timothy Walker</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                    <Image style={{ display: "flex", width: 120, padding: 10, justifyContent: "center"}}
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    roundedCircle
                    />
                    </Col>
                    <Col xs={6} md={4} style={{padding: 10}}>
                      <Card.Text>
                        <h4>Hey Kurt, how's it going? I saw that you lift a lot.</h4>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                    <h5>Compatibility</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={5}>
                        <ProgressBar now={60} />
                    </Col>
                    <Col xs={6} md={6} style={{ display: "flex", justifyContent: "end"}}>
                      <Button variant="primary" size="lg" style={{ margin: 10}}>Reply</Button>
                      <Button variant="light" size="lg" style={{ margin: 10}}>View profile</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
            <Container style={{ margin: 20}}>
              <Card>
                <Card.Header as="h5">Timothy Walker</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                    <Image style={{ display: "flex", width: 120, padding: 10, justifyContent: "center"}}
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    roundedCircle
                    />
                    </Col>
                    <Col xs={6} md={4} style={{padding: 10}}>
                      <Card.Text>
                      <h4>Hey Kurt, how's it going? I saw that you lift a lot.</h4>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                    <h5>Compatibility</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={5}>
                        <ProgressBar now={60} style={{ background-color: green }}/>
                    </Col>
                    <Col xs={6} md={6} style={{ display: "flex", justifyContent: "end"}}>
                      <Button variant="primary" size="lg" style={{ margin: 10}}>Reply</Button>
                      <Button variant="light" size="lg" style={{ margin: 10}}>View profile</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
            <Container style={{ margin: 20}}>
              <Card>
                <Card.Header as="h5">Timothy Walker</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                    <Image style={{ display: "flex", width: 120, padding: 10, justifyContent: "center"}}
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    roundedCircle
                    />
                    </Col>
                    <Col xs={6} md={4} style={{padding: 10}}>
                      <Card.Text>
                      <h4>Hey Kurt, how's it going? I saw that you lift a lot.</h4>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                    <h5>Compatibility</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={5}>
                        <ProgressBar now={60} />
                    </Col>
                    <Col xs={6} md={6} style={{ display: "flex", justifyContent: "end"}}>
                      <Button variant="primary" size="lg" style={{ margin: 10}}>Reply</Button>
                      <Button variant="light" size="lg" style={{ margin: 10}}>View profile</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
        </div>
      );
}


export default MatchList