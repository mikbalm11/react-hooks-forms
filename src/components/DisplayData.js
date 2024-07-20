import React from "react";

function DisplayData({ firstName, lastName, number }) {
    console.log(firstName, lastName, number)
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h2>{number}</h2>
    </div>
  );
}

export default DisplayData;
