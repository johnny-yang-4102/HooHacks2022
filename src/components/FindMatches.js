import React from "react"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown, ProgressBar, Image} from "react-bootstrap"


const FindMatches = ({  }) => {

    //PUT everything between the divs. NOTHING CAN BE OUTSIDE OF IT

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
            <h2>Find buddies</h2>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <h4>Timothy Walker (19)</h4>
                </Col>
                <Col xs={6} md={6}>
                  <Image style={{ display: "block", width: 200, padding: 30 }}
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                  roundedCircle
                />
                </Col>
              </Row>
              <div>
                <h5>Compatibility rating</h5>
                <ProgressBar now={60} />
              </div>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                    <h5>Primary goal</h5>
                    </Col>
                    <Col xs={6} md={4}>
                        Muscle mass
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <h5>Training days</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <h6>Timothy</h6>
                    </Col>
                    <Col xs={3} md={6}>
                        Mon, Wed, Fri
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <h6>You</h6>
                    </Col>
                    <Col xs={3} md={6}>
                        Mon, Tue, Thu
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                    <h5>Ability</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    
                    </Col>
                    <Col xs={6} md={2}>
                    <h6>Timothy</h6>
                    </Col>
                    <Col xs={6} md={2}>
                    <h6>Kurt</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <h6>Bench press</h6>
                    </Col>
                    <Col xs={6} md={2}>
                        132
                    </Col>
                    <Col xs={6} md={2}>
                        150
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <h6>Deadlift</h6>
                    </Col>
                    <Col xs={6} md={2}>
                        180
                    </Col>
                    <Col xs={6} md={2}>
                        170
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <h6>Back squat</h6>
                    </Col>
                    <Col xs={6} md={2}>
                        120
                    </Col>
                    <Col xs={6} md={2}>
                        100
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                  <h4>Experience level</h4>
                  <input type="range" overflow="hidden" value={""} onChange={""} 
                  
                  style={{
                    color: "green",
                  }}/>
                </Row>
                <Row>
                  <h6>3 years</h6>
                </Row>
            </Container>
            <Container>
              <div>
                <Button variant="success" type="submit">Like</Button>
                <Button variant="danger" type="submit">Ignore</Button>
              </div>
            </Container>
        </div>
      )
}


export default FindMatches