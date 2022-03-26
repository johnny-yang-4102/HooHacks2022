import Person from "./components/Person";
import { useState, useEffect } from 'react'

function App() {

  
  //Initial states of clicking pages
  const [firstLogin, setFirstLogin] = useState(true)
  const [clickedMyProfile, setClickedMyProfile] = useState(false)
  const [clickedMatchesList, setClickedMatchesList] = useState(false)
  const [clickedfindMatches, setClickedFindMatches] = useState(false)

  if(firstLogin)
  {
    //Empty my Profile page
    return (
      <div>
        <p>hello world my login page</p>
      </div>
    );
  }
  else if(clickedMyProfile)
  {
    

    setFirstLogin(false);
    setClickedMatchesList(false);
    setClickedFindMatches(false);

  }
  else if(clickedMatchesList)
  {
    setFirstLogin(false);
    setClickedMyProfile(false);
    setClickedFindMatches(false);
  }
  else if(clickedfindMatches)
  {
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
