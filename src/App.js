<<<<<<< HEAD
import Person from "./components/Person";
function App() {

  const personObj = {
    firstName: "Allen",
    lastName: "Doelue",
    Age: 21,
    Gender: "Male",
    profilePic: "",
    id: 1,
    workoutGoal: "Muscle Mass",
    availDaysOfWeek: [1, 0, 1, 0, 1, 0, 0], //Monday - Sunday
    squat: 225,
    deadlift: 225,
    bench: 145,
    expRating: 5

=======
import PersonForm from "./components/PersonForm";
import { useState, useEffect } from 'react'

function App() {


  //Initial states of clicking pages
  const [firstLogin, setFirstLogin] = useState(true)
  const [clickedMyProfile, setClickedMyProfile] = useState(false)
  const [clickedMatchesList, setClickedMatchesList] = useState(false)
  const [clickedfindMatches, setClickedFindMatches] = useState(false)

  //Person attributes for form
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  //Handling changes of Person attributes through event listeners
  const handleFirstNameChange = (event) => {
    event.preventDefault()

    setFirstName(event.target.value)

    console.log(firstName)
  }

  const handleLastNameChange = (event) => {
    event.preventDefault()
    setLastName(event.target.value)
  }

  if (firstLogin) {
    //Empty my Profile page
    return (
      <div>
        <PersonForm firstName={firstName} lastName={lastName}

          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
        />
      </div>
    );
  }
  else if (clickedMyProfile) {


    setFirstLogin(false);
    setClickedMatchesList(false);
    setClickedFindMatches(false);

  }
  else if (clickedMatchesList) {
    setFirstLogin(false);
    setClickedMyProfile(false);
    setClickedFindMatches(false);
  }
  else if (clickedfindMatches) {
    setFirstLogin(false);
    setClickedMyProfile(false);
    setClickedMatchesList(false);
>>>>>>> b92438d6c210d96fdbcec3bccb1c247ed753129b
  }

  return (
    <div className="App">
      <>
      <Person person={personObj}/>
      <p></p>
      </>
        
    </div>
  );
}

export default App;
