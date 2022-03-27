import React from "react"
import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, ProgressBar, Card, Image} from "react-bootstrap"

const Match = ({ person, getCompatibilityScore}) => {

    const generateRandomMessage = () => {

        const messages = ["Hey, saw that you're looking for a lifting buddy, wanna go?",
                            "Hi! I like your vibe - let's gym together!!!",
                            "OMG you're in my CS 4102 class, didn't think you would like me here :)",
                            "Hello, I'm new to UVA and trying to make new friends, how are you?",
                        "A shout in the dark! Hello, anyone there??",
                        "Hi hi hi hi, you seem cool",
                        "Fine weather today, to gym, ain't that right",
                        "I need to get swole. I need a partner.",
                        "I am not a bot, I swear....."]

        
        return messages[Math.floor(Math.random() * 9)]
    }

    let score = getCompatibilityScore(person)
    let variant = "blue"

    if(score < 30)
        variant="danger"
    else if(score < 75)
        variant="warning"
    else
        variant="success"

    return(
        <div>
            <Container style={{ margin: 20}}>
              <Card>
                <Card.Header as="h5">{person.firstName} {person.lastName}</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                    <Image style={{ display: "flex", width: 120, padding: 10, justifyContent: "center"}}
                    src={person.profilePic}
                    roundedCircle
                    />
                    </Col>
                    <Col xs={6} md={4} style={{padding: 10}}>
                      <Card.Text>
                        <h4>{generateRandomMessage()}</h4>
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
                        <ProgressBar variant={variant} now={score} />
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
    )
}


export default Match