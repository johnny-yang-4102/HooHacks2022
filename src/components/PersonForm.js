import React from "react"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap"

const PersonForm = ({ firstName, lastName, age, workoutGoal, valSquat, valDeadlift, valBench, expYears,
    handleFirstNameChange, handleLastNameChange, handleAgeChange, handleHoursPerDayOfWeekChange, handleWorkoutGoalChange,
    handleValSquatChange, handleValBenchChange, handleValDeadliftChange, handleExpYearsChange, saveInfo }) => {

    return (
        <div>
            <div><h2>Set up your profile</h2></div>
            <form onSubmit={saveInfo}>
                <Container style={{ display: "flex", justifyContent: "center"}}>
                    <Row>
                        <Col xs={6} md={2}>
                            First name
                        </Col>
                        <Col xs={6} md={4}>
                            <div>
                                <input value={firstName} onChange={handleFirstNameChange} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            Last name
                        </Col>
                        <Col xs={6} md={4}>
                            <div>
                                <input value={lastName} onChange={handleLastNameChange} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            Age
                        </Col>
                        <Col xs={6} md={4}>
                            <div>
                                <input value={age} onChange={handleAgeChange} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            <Dropdown onSelect={handleWorkoutGoalChange}>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" onSelect={handleWorkoutGoalChange}>
                                    {workoutGoal}
                                </Dropdown.Toggle>

                                <Dropdown.Menu onSelect={handleWorkoutGoalChange}>
                                    <Dropdown.Item eventKey="Muscle mass">Muscle mass</Dropdown.Item>
                                    <Dropdown.Item eventKey="Health">Health</Dropdown.Item>
                                    <Dropdown.Item eventKey="Sports related">Sports related</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
                <h4>Training days</h4>
                <div className="text-center" style={{margin: 30}}>
                    <h5>When do you train?</h5>
                </div>
                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Monday
                        </Col>
                        <Col xs={6} md={4}>
                            <input id={0} onChange={handleHoursPerDayOfWeekChange} /> hours
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Tuesday
                        </Col>
                        <Col xs={6} md={4}>
                            <input id={1} onChange={handleHoursPerDayOfWeekChange}/> hours
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Wednesday
                        </Col>
                        <Col xs={6} md={4}>
                            <input id={2} onChange={handleHoursPerDayOfWeekChange} /> hours
                        </Col>
                    </Row>
                    <Row>  
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Thursday
                        </Col>
                        <Col xs={6} md={4}>
                            <input id={3} onChange={handleHoursPerDayOfWeekChange}/> hours
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Friday
                        </Col>
                        <Col xs={6} md={4}>
                            <input id={4} onChange={handleHoursPerDayOfWeekChange}/> hours
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Saturday
                        </Col>
                        <Col xs={6} md={4}>
                            <input  id={5} onChange={handleHoursPerDayOfWeekChange}/> hours
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Sunday
                        </Col>
                        <Col xs={6} md={4}>
                            <input id={6} onChange={handleHoursPerDayOfWeekChange}/> hours
                        </Col>
                    </Row>
                </Container>
                <h4>Ability</h4>
                <div className="text-center" style={{margin: 30}}>
                    <h5>How much weight can you achieve for each activity?</h5>
                </div>
                <Container className="text-center">
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Bench press
                        </Col>
                        <Col xs={6} md={4}>
                            <input value={valBench} onChange={handleValBenchChange} /> lbs
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Deadlift
                        </Col>
                        <Col xs={6} md={4}>
                            <input value={valDeadlift} onChange={handleValDeadliftChange} /> lbs
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                        </Col>
                        <Col xs={6} md={2}>
                            Back squat
                        </Col>
                        <Col xs={6} md={4}>
                            <input value={valSquat} onChange={handleValSquatChange} /> lbs
                        </Col>
                    </Row>
                </Container>
                <h4>Experience Level</h4>
                <div className="text-center" style={{margin: 30}}>
                    <h5>How experienced are you with lifting weights?</h5>
                </div>
                <Container className="text-center">
                    <Row style={{ display: "flex", justifyContent: "center"}}>
                        <Col xs={6} md={1}>
                        <p>1</p>
                        </Col>
                        <Col xs={6} md={1}>
                        <input type="range"  value={expYears} onChange={handleExpYearsChange} min={0} max={11} /> 
                        </Col>
                        <Col xs={6} md={1}>
                        <p>10</p>
                        </Col>
                    </Row> 
                </Container>
                <Container className="text-center">
                    <Button variant="primary" type="submit" style={{margin: 10}}>Save profile</Button>
                </Container>
            </form>
        </div>
    )
}

export default PersonForm