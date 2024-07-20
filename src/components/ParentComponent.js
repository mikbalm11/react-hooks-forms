import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null);

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleNumberChange(event) {
        const newNumber = parseInt(event.target.value);
        if (newNumber >= 0 && newNumber <= 5) {
          setNumber(newNumber);
          setIsInvalidNumber(null);
        } else {
          setIsInvalidNumber(`${newNumber} is not a valid number!`);
        }
      }

    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                number={number}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleNumberChange={handleNumberChange}
                isInvalidNumber={isInvalidNumber}
            />
            <DisplayData firstName={firstName} lastName={lastName} number={number} />
        </div>
    );
}

export default ParentComponent;
