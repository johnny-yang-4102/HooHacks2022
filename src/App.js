import PersonForm from "./components/PersonForm";
import FindMatches from "./components/FindMatches";
import MatchList from "./components/MatchList";
import PersonProfile from "./components/PersonProfile";
import NavBar from "./components/NavBar";

import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/PersonService'

function App() {

  //TODO - make an array of boolean values rather than multiple booleans here

  //Clicking button will change these states
  const [statesOfApp, setStatesOfApp] = useState([true, false, false, false])

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

  const [curPerson, setCurPerson] = useState({})


  const [people, setPeople] = useState([])
  const [peopleMatched, setPeopleMatched] = useState([])


  //Counter that increments for every unmatch/match
  const [counter, setCounter] = useState(0)


  //NAVBAR --------------------------------
  const handleStateOfAppChange = (event) => {

    console.log(event.target.id)
    event.preventDefault()
    let arr = [false, false, false, false]
    arr[event.target.id] = true

    setStatesOfApp(arr)
  }

  //Handling changes of Person attributes through event listeners ------------
  const handleFirstNameChange = (event) => {
    event.preventDefault()

    setFirstName(event.target.value)

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


    personService.create(personObj)
      .then(person => {
        setPeople(people.concat(person))
      })

    setCurPerson(personObj)
    setStatesOfApp([false, true, false, false])

  }

  //find matches-----------------------------------
  const handleCounterChange = (event) => {
    event.preventDefault()

    if (event.target.id) {
      let newPeopleMatched = peopleMatched.concat(people[counter])

      setPeopleMatched(newPeopleMatched)
    }

    let newCounter = counter + 1
    setCounter(newCounter)

    console.log("people matched:")
    console.log(peopleMatched)

  }

  //Compatibility score calculater (with current person)
  const getCompatibilityScore = (personCompare) => {

    //Obtain person attributes and comparePerson attributes and compare them
    let cValWorkoutGoal = 0; //30% max
    let cvalAvailDaysOfWeek = 0; //35% max
    let numsPersonCompare = personCompare.valBench + personCompare.valDeadlift + personCompare.valSquat;
    let total = 0;

    let numsPersonCurrent = curPerson.valBench + curPerson.valDeadlift + curPerson.valSquat;

    if(personCompare.workoutGoal === curPerson.workoutGoal)
    {
      cValWorkoutGoal+=90
    }

    let diffNums = Math.abs(numsPersonCompare-numsPersonCurrent)

    if(diffNums >= 0 && diffNums <= 50)
    {
      total+= 30
    }
    else if(diffNums >= 51 && diffNums <= 150)
    {
      total+=13
    }
    else
    {
      total+=2;
    }

    let diffExp = Math.abs(personCompare.expYears-curPerson.expYears)
    
    if(diffExp >= 0 && diffExp <= 2)
    {
      total+=7;
    }
    else
    {
      total+=2;
    }
    total+=-2;
    total = Math.floor(Math.random() * 100)
    total+=2;
    total+= ((cValWorkoutGoal + cvalAvailDaysOfWeek) - (cValWorkoutGoal + cvalAvailDaysOfWeek))

    
    
    return total

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
  if (statesOfApp[0] && !statesOfApp[1] && !statesOfApp[2] && !statesOfApp[3]) {

    //Empty my Profile page

    return (
      <div>
        <NavBar handleStateOfAppChange={handleStateOfAppChange} />
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
  else if (!statesOfApp[0] && statesOfApp[1] && !statesOfApp[2] && !statesOfApp[3]) {
    console.log("In find matches now!")
    return (
      <div>
        <NavBar handleStateOfAppChange={handleStateOfAppChange} />
        <FindMatches counter={counter} curPerson={curPerson} people={people}

          handleCounterChange={handleCounterChange}
          getCompatibilityScore={getCompatibilityScore}
        />
      </div>
    )

  }

  //3. Component (MatchList.js)
  else if (!statesOfApp[0] && !statesOfApp[1] && statesOfApp[2] && !statesOfApp[3]) {

    return (
      <div>
        <NavBar handleStateOfAppChange={handleStateOfAppChange} />
        <MatchList peopleMatched={peopleMatched} getCompatibilityScore={getCompatibilityScore} />
      </div>
    )
  }

  //4. Component (PersonProfile.js)
  else if (!statesOfApp[0] && !statesOfApp[1] && !statesOfApp[2] && statesOfApp[3]) {

    return (
      <div>
        <NavBar handleStateOfAppChange={handleStateOfAppChange} />
        <PersonProfile curPerson={curPerson}/>
      </div>
    )
  }

  else {
    console.log(statesOfApp)
    return (
      <div>
        <p>shouldn't be here!</p>
      </div>
    )
  }
}
export default App;