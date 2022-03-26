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
