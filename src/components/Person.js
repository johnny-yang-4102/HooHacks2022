import React from "react"
import { useState, useEffect} from "react"
import axios from "axios"


//person object
const Person = ({ person }) => {


    //Compares person to comparePerson
    const getCompatibilityScore = (comparePerson) => {

        //cVal = compatibility value
            //Obtain person attributes and comparePerson attributes and compare them
        const cvalWorkoutGoal = 0  //30%
        const cvalAvailDaysOfWeek = 0 //10%
        const cvalSquat = 0 //5%
        const cvalDeadlift = 0 //5%
        const cvalBench = 0 //10%
        const cvalExpRating = 0 // 30%

      
        return person.expRating

        


    }


    const personObj = {
        firstName: "Johnny",
        lastName: "Yang",
        Age: 20,
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

    //Between the div elements, put in html elements with component's attributes so we can make sure it's working.
        //the name of attributes are on google doc
        //provided few examples
    return (

        <div>
            <p>{person.firstName}</p>
            <p>{person.lastName}</p>
            <p>{person.Age}</p>
            {getCompatibilityScore(personObj)}
        </div>
    )


}

export default Person