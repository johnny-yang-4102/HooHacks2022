import React from "react"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap"

const PersonForm = ({firstName, lastName, handleFirstNameChange, handleLastNameChange, addInfo}) => {
    
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
            <div><h2>Set up your profile</h2></div>
            <form onSubmit={addInfo}>
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                    First name
                    </Col>
                    <Col xs={6} md={4}>
                    <div>
                        <input value={firstName} onChange={handleFirstNameChange}/>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Last name
                    </Col>
                    <Col xs={6} md={4}>
                    <div>
                        <input value={lastName} onChange={handleLastNameChange}/>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Age
                    </Col>
                    <Col xs={6} md={4}>
                    <div>
                        <input value={""} onChange={""}/>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Primary goal
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Muscle mass</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Health</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Sports related</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                </Container>
                <h4>Training days</h4>
                <Container>
                <h5>When do you train?</h5>
                <Row>
                    <Col xs={6} md={2}>
                    Monday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Tuesday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Wednesday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Thursday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Friday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Saturday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Sunday
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> hours
                    </Col>
                </Row>
                </Container>
                <h4>Ability</h4>
                <Container>
                <h5>How much weight can you achieve for each activity?</h5>
                <Row>
                    <Col xs={6} md={2}>
                    Bench press
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> lbs
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Deadlift
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> lbs
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    Back squat
                    </Col>
                    <Col xs={6} md={4}>
                        <input value={""}/> lbs
                    </Col>
                </Row>
                </Container>
                <div>
                    <h4>Experience level</h4>
                    <input type="range" value={""} onChange={""}/>
                </div>
                <Button variant="primary" type="submit">save</Button>
            </form>
        </div>
    )
}

export default PersonForm