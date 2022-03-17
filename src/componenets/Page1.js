import React, { useState } from "react";

import "./page1.css";

const Page1 = () => {
  const [turnOn, setTurnOn] = useState(false);

  return (
    <div>
      <h1 style={{ color: "pink" }}>Staff</h1>
      <button onClick={() => setTurnOn(!turnOn)}>{"Create account"}</button>
      {turnOn && (
        <form id="createForm">
          <label>Please fill in details bellow:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First name..."
          />
          <input type="text" id="field" name="sname" placeholder="Surname..." />
          <input type="email" id="field" name="email" placeholder="E-mail..." />
          <input
            type="text"
            id="field"
            name="bank"
            placeholder="Bank account number..."
          />
          <button onClick={() => setTurnOn(turnOn)} id="cancel">
            Cancel
          </button>
          <button id="create">Create</button>
        </form>
      )}
    </div>
  );
};

export default Page1;
