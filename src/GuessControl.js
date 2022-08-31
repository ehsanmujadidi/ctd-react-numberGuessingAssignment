import React, { Component } from "react";
import Button from "./Button";

function GuessControl(props) {

  const [currentGuess, setCurrentGuess] = React.useState("");

  const onSubmitGuess = event => {
    props.onGuess(Number(currentGuess));
    setCurrentGuess("")
  };

  const handleInputChange = event => {
    event.preventDefault();
    setCurrentGuess(event.target.value)
  };

  return (
    <div>
      <input
        type="number"
        name='todoTitle'
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}
export default GuessControl;
