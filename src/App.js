import PersonForm from "./components/PersonForm";
import FindMatches from "./components/FindMatches";
import MatchList from "./components/MatchList";
import PersonProfile from "./components/PersonProfile";

import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/PersonService'

function App() {

  //TODO - make an array of boolean values rather than multiple booleans here

  //Clicking button will change these states
  const [statesOfApp, setStatesOfApp] = useState([true, false, false, false])

  //Initial states of clicking pages
  const [firstLogin, setFirstLogin] = useState(true)
  const [clickedfindMatches, setClickedFindMatches] = useState(false)
  const [clickedPersonProfile, setClickedPersonProfile] = useState(false)
  const [clickedMatchesList, setClickedMatchesList] = useState(false)

  //Person attributes for form-----------------------
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [hoursPerDayOfWeek, setHoursPerDayOfWeek] = useState([0, 0, 0, 0, 0, 0, 0])
  const [workoutGoal, setWorkoutGoal] = useState('Select Primary Goal')
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

  const handleAgeChange = (event) => {
    event.preventDefault()
    setAge(event.target.value)
  }

  const handleHoursPerDayOfWeekChange = (event) => {
    event.preventDefault()
    let arr = hoursPerDayOfWeek
    arr[event.target.id] = parseInt(event.target.value)

    setHoursPerDayOfWeek(arr)
    console.log(hoursPerDayOfWeek)
  }

  const handleWorkoutGoalChange = (event) => {
    //event.preventDefault()
    
    setWorkoutGoal(event)
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
      profilePic: '../public/profile_pic.jpg',
      workoutGoal: workoutGoal,
      hoursPerDayOfWeek: hoursPerDayOfWeek,
      valSquat: parseInt(valSquat),
      valDeadlift: parseInt(valDeadlift),
      valBench: parseInt(valBench),
      expYears: parseInt(expYears)
    }

    console.log(personObj)

    personService.create(personObj)
      .then(person => {
        setPeople(people.concat(person))
      })

  }

  //Initial state of app (data fetch) -----------------------------------------------------

  useEffect(() => {

    axios.get('http://localhost:3001/api/people')
      .then(response => {

        setPeople(response.data)

      })

  },
    [])

  //1. Component (PersonForm.js)
  if (statesOfApp[0] && !statesOfApp[1] && !statesOfApp[2] && !statesOfApp[3] ) {

    //Empty my Profile page

    return (
      <div>
        <PersonForm firstName={firstName} lastName={lastName} age={age} hoursPerDayOfWeek={hoursPerDayOfWeek} workoutGoal={workoutGoal}
          valSquat={valSquat} valDeadlift={valDeadlift} valBench={valBench} expYears={expYears}


          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleAgeChange={handleAgeChange}
          handleHoursPerDayOfWeekChange={handleHoursPerDayOfWeekChange}
          handleWorkoutGoalChange={handleWorkoutGoalChange}
          handleValSquatChange={handleValSquatChange}
          handleValDeadliftChange={handleValDeadliftChange}
          handleValBenchChange={handleValBenchChange}
          handleExpYearsChange={handleExpYearsChange}

          saveInfo={saveInfo}
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