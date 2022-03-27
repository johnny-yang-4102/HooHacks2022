import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown, Image, ProgressBar } from "react-bootstrap"

const PersonProfile = ({ curPerson }) => {

  //Creating string for days available
  const getDaysFromArr = (arrOfDays) => {

    let daysAvail = ""
    if (arrOfDays[0])
      daysAvail += "Monday, "
    if (arrOfDays[1])
      daysAvail += "Tuesday, "
    if (arrOfDays[2])
      daysAvail += "Wednesday, "
    if (arrOfDays[3])
      daysAvail += "Thursday, "
    if (arrOfDays[4])
      daysAvail += "Friday, "
    if (arrOfDays[5])
      daysAvail += "Saturday, "
    if (arrOfDays[6])
      daysAvail += "Sunday "

    return daysAvail
  }

  let yourDays = getDaysFromArr(curPerson.hoursPerDayOfWeek)


  //Put everything in the div here. NOTHING OUTSIDE DIV
  return (
    <div>

      <h2>View Profile</h2>
      <Container>
        <Row>
          <Col>
            <h4>{curPerson.firstName} {curPerson.lastName} ({curPerson.age})</h4>
          </Col>
          <Col>
            <Image style={{ display: "flex", width: 200, padding: 30, justifyContent: "center" }}
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              roundedCircle
            />
          </Col>
          <Col>
            <Button variant="secondary" type="submit" style={{ display: "flex", justifyContent: "end" }}>Edit profile</Button>
          </Col>
        </Row>
      </Container>
      <Container style={{ margin: 30 }}>
        <Row>
          <Col xs={6} md={2}>
            <h5>Primary goal</h5>
          </Col>
          <Col xs={6} md={4}>
            {curPerson.workoutGoal}
          </Col>
        </Row>
      </Container>
      <Container style={{ margin: 30 }}>
        <Row>
          <Col xs={6} md={2}>
            <h5>Training days</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={6}>
            <p>{yourDays}</p>
          </Col>
        </Row>
      </Container>
      <Container style={{ margin: 30 }}>
        <Row>
          <Col xs={6} md={2}>
            <h5>Ability</h5>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={2}>
            <h6>Bench press</h6>
          </Col>
          <Col xs={6} md={2}>
            {curPerson.valBench}
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={2}>
            <h6>Deadlift</h6>
          </Col>
          <Col xs={6} md={2}>
          {curPerson.valDeadlift}
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={2}>
            <h6>Back squat</h6>
          </Col>
          <Col xs={6} md={2}>
          {curPerson.valSquat}
          </Col>
        </Row>
      </Container>
      <Container style={{ margin: 30 }}>
        <Row>
          <h4>Experience level</h4>
          <input type="range" overflow="hidden" value={""} onChange={""}

            style={{
              color: "green",
            }} />
        </Row>
        <Row>
          <h6>3 years</h6>
        </Row>
      </Container>
    </div>
  );
}


export default PersonProfile