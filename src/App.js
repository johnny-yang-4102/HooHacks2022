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
  }

  return (
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
