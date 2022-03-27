import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Match from './Match'
import { Button, Dropdown, Container, Row, Col, Navbar, Nav, NavDropdown, ProgressBar, Card, Image } from "react-bootstrap"


const MatchList = ({ peopleMatched , getCompatibilityScore}) => {

  console.log(peopleMatched)
  return (
    <div>
      <div><h2>My matches</h2></div>
      <Container style={{ margin: 40 }}>
        <Row>
          <Col xs={6} md={6}>
            <h3>Search in University of Virginia</h3>
          </Col>
        </Row>
        <Row>
          <input value={""} onChange={""} />
        </Row>
      </Container>
      
      <div>
        {peopleMatched.map(person => {
          return <Match key={person.id} person={person} getCompatibilityScore={getCompatibilityScore} />
        })}
      </div>

    </div>
  );
}


export default MatchList