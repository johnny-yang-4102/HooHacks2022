import PersonForm from "./components/PersonForm";
import FindMatches from "./components/FindMatches";
import MatchList from "./components/MatchList";
import PersonProfile from "./components/PersonProfile";

import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/PersonService'

function App() {

  //Initial states of clicking pages
  const [firstLogin, setFirstLogin] = useState(false)
  const [clickedfindMatches, setClickedFindMatches] = useState(true)
  const [clickedPersonProfile, setClickedPersonProfile] = useState(false)
  const [clickedMatchesList, setClickedMatchesList] = useState(false)

  //Person attributes for form-----------------------
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [hoursPerDay, setHoursPerDay] = useState([0, 0, 0, 0, 0, 0, 0])
  const [workoutGoal, setWorkoutGoal] = useState('Healthy')
  const [valSquat, setValSquat] = useState(0)
  const [valDeadlift, setValDeadlift] = useState(0)
  const [valBench, setValBench] = useState(0)
  const [expYears, setExpYears] = useState(0)


  const [people, setPeople] = useState('')

  //Counter that increments for every unmatch/match
  const [counter, setCounter] = useState(1)



  //Handling changes of Person attributes through event listeners ------------
  const handleFirstNameChange = (event) => {
    event.preventDefault()

    setFirstName(event.target.value)

    console.log(firstName)
  }

  const handleLastNameChange = (event) => {
    event.preventDefault()
    setLastName(event.target.value)
  }

  const handleGenderChange = (event) => {
    event.preventDefault()
    setGender(event.target.value)
  }

  const handleAgeChange = (event) => {
    event.preventDefault()
    setAge(event.target.value)
  }

  const handleHoursPerDayChange = (event) => {
    event.preventDefault()
    setHoursPerDay(event.target.value)
  }

  const handleWorkoutGoalChange = (event) => {
    event.preventDefault()
    setWorkoutGoal(event.target.value)
  }

  const handleValSquatChange = (event) => {
    event.preventDefault()
    setValSquat(event.target.value)
  }

  const handleValBenchChange = (event) => {
    event.preventDefault()
    setValBench(event.target.value)
  }

  const handleValDeadliftChange = (event) => {
    event.preventDefault()
    setValDeadlift(event.target.value)
  }

  const handleExpYearsChange = (event) => {
    event.preventDefault()
    setExpYears(event.target.value)
  }

  //Form submission
  const saveInfo = (event) => {
    event.preventDefault()

    const personObj = {
      id: people.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      profilePic: '',
      workoutGoal: workoutGoal,
      hoursPerDay: hoursPerDay,
      squat: valSquat,
      deadlift: valDeadlift,
      bench: valBench,
      expYears: expYears
    }

    personService.create(personObj)
      .then(person => {
        setPeople(people.concat(person))

        //reset filters (values inside form) --CHANGE IF WE DECIDE TO USE MULTIPLE USERS
        setFirstName("")
        setLastName("")
        setAge(0)
        setGender("")
        setWorkoutGoal("")
      })

  }

  //Initial state of app (data fetch) -----------------------------------------------------

  // useEffect(() => {

  //   axios.get('http://localhost:3001/api/people')
  //     .then(response => {

  //       setPeople(response.data)

  //     })

  // },
  //   [])

  //1. Component (PersonForm.js)
  if (firstLogin) {

    console.log(people)
    //Empty my Profile page

    return (
      <div>
        <PersonForm firstName={firstName} lastName={lastName} gender={gender} age={age} hoursPerDay={hoursPerDay} workoutGoal={workoutGoal}
          valSquat={valSquat} valDeadlift={valDeadlift} valBench={valBench} expYears={expYears}


          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleGenderChange={handleGenderChange}
          handleAgeChange={handleAgeChange}
          handleHoursPerDayChange={handleHoursPerDayChange}
          handleWorkoutGoalChange={handleWorkoutGoalChange}
          handleValSquatChange={handleValSquatChange}
          handleValDeadliftChange={handleValDeadliftChange}
          handleValBenchChange={handleValBenchChange}
          handleExpYearsChange={handleExpYearsChange}

        />
      </div>
    );
  }
  //2. Component (FindMatches.js)
  else if (clickedfindMatches) {

    return (
      <div>
        <FindMatches/>
      </div>
    )

  }

  //3. Component (MatchList.js)
  else if (clickedMatchesList) {

    return (
      <div>
        <MatchList/>
      </div>
    )
  }

  //4. Component (PersonProfile.js)
  else if (clickedPersonProfile) {

    return (
      <div>
        <PersonProfile />
      </div>
    )

  }

}
export default App;