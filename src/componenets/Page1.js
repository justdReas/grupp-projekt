import React, { useState } from "react";

import "./page1.css";

const Page1 = () => {
  const [create, setCreate] = useState(false);
  const handleOpen = (event) => {
    event.preventDefault();
    setCreate(true);
  };

  return (
    <div>
      <h1 style={{ color: "pink" }}>Staff</h1>
      <button onClick={handleOpen} id="createBtn">
        Create a new account
      </button>
      {create && (
        <form id="createForm">
          <label>Please fill in details bellow:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First name..."
          />
          <input type="text" id="sname" name="sname" placeholder="Surname..." />
          <input type="email" id="email" name="email" placeholder="E-mail..." />
          <input
            type="text"
            id="bank"
            name="bank"
            placeholder="Bank account number..."
          />
          <button id="cancel">Cancel</button>
          <button id="create">Create</button>
        </form>
      )}
    </div>
  );
};

export default Page1;
