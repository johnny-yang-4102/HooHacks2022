import React from "react"
import { Button } from "react-bootstrap"

const PersonForm = ({firstName, lastName, handleFirstNameChange, handleLastNameChange, addInfo}) => {
    
    return (
        <div>
            <form onSubmit={addInfo}>
                <div>
                    First Name: <input value={firstName} onChange={handleFirstNameChange}/>
                </div>
                <div>
                    Last Name: <input value={lastName} onChange={handleLastNameChange}/>
                </div>
                <div>
                    <Button variant="success" type="submit">save</Button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm