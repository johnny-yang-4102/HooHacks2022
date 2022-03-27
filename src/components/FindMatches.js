import React from "react"
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown, ProgressBar, Image } from "react-bootstrap"


const FindMatches = ({ counter, curPerson, people, handleCounterChange }) => {

    //PUT everything between the divs. NOTHING CAN BE OUTSIDE OF IT
    //TODO - Tidy up and make better KURT
    if (people[counter].firstName === curPerson.firstName) {
        return (
            <div>
                <p>You've reached all the wahoos on the app! Come back later for more people to match with!</p>
            </div>
        )
    }

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

    const potentialMatch = people[counter]

    let potentialMatchDays = getDaysFromArr(potentialMatch.hoursPerDayOfWeek)


    let yourDays = getDaysFromArr(curPerson.hoursPerDayOfWeek)

    return (
        <div>
            <h2>Find buddies</h2>
            <Container>
<<<<<<< HEAD
              <Row>
                <Col xs={6} md={4}>
                  <h4>Timothy Walker (19)</h4>
                </Col>
                <Col xs={6} md={6}>
                  <Image style={{ display: "flex", width: 200, padding: 30, justifyContent: "center"}}
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                  roundedCircle
                />
                </Col>
              </Row>
              <div>
                <h5>Compatibility rating</h5>
                <ProgressBar now={60} />
              </div>
=======
                <Row>
                    <Col xs={6} md={4}>
                        <h4>{potentialMatch.firstName} {potentialMatch.lastName} ({potentialMatch.age})</h4>
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
>>>>>>> d13d7cfad24d29529b180a92bbe4bd972ef4a8c2
            </Container>
            <Container style={{ margin: 30}}>
                <Row>
                    <Col xs={6} md={2}>
                        <h5>Primary goal</h5>
                    </Col>
                    <Col xs={6} md={4}>
                        {potentialMatch.workoutGoal}
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: 30}}>
                <Row>
                    <Col xs={6} md={2}>
                        <h5>Training days</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
<<<<<<< HEAD
                    
                    </Col>
                    <Col xs={6} md={2}>
                    <h6>Timothy</h6>
                    </Col>
                    <Col xs={6} md={2}>
                    <h6>Me</h6>
=======
                        <h6>{potentialMatch.firstName}</h6>
                    </Col>
                    <Col xs={3} md={6}>
                        {potentialMatchDays}
>>>>>>> d13d7cfad24d29529b180a92bbe4bd972ef4a8c2
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
<<<<<<< HEAD
                    </Col>
                    <Col xs={6} md={2}>
                        Mon, Wed, Fri
                    </Col>
                    <Col xs={6} md={2}>
                        Mon, Thu, Sun
=======
                        <h6>You</h6>
                    </Col>
                    <Col xs={3} md={6}>
                        {yourDays}
>>>>>>> d13d7cfad24d29529b180a92bbe4bd972ef4a8c2
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: 30}}>
                <Row>
                    <Col xs={6} md={2}>
                        <h5>Ability</h5>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>

                    </Col>
                    <Col xs={6} md={2}>
                        <h6>{potentialMatch.firstName}</h6>
                    </Col>
                    <Col xs={6} md={2}>
<<<<<<< HEAD
                    <h6>Me</h6>
=======
                        <h6>You</h6>
>>>>>>> d13d7cfad24d29529b180a92bbe4bd972ef4a8c2
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                        <h6>Bench press</h6>
                    </Col>
                    <Col xs={6} md={2}>
                        {potentialMatch.valBench}
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
                        {potentialMatch.valDeadlift}
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
                        {potentialMatch.valSquat}
                    </Col>
                    <Col xs={6} md={2}>
                        {curPerson.valSquat}
                    </Col>
                </Row>
            </Container>
            <Container style={{ margin: 30}}>
                <Row>
                    <h4>Experience level</h4>
                    <input type="range" overflow="hidden" value={potentialMatch.expYears*10} onChange={""}

                        style={{
                            color: "green",
                        }} />
                </Row>
                <Row>
                    <h6>{potentialMatch.expYears} Years</h6>
                </Row>
            </Container>
            <Container>
<<<<<<< HEAD
              <div style={{ display: "flex", justifyContent: "center"}}>
                <Button variant="success" size="lg" type="submit" style={{ margin: 15}}>Like</Button>
                <Button variant="danger" size="lg" type="submit" style={{ margin: 15 }}>Ignore</Button>
              </div>
=======
                <div>
                    <Button variant="success" type="submit" id={1} onClick={handleCounterChange}>Like</Button>
                    <Button variant="danger" type="submit" id={0} onClick={handleCounterChange}>Ignore</Button>
                </div>
>>>>>>> d13d7cfad24d29529b180a92bbe4bd972ef4a8c2
            </Container>
        </div>
    )
}


export default FindMatches