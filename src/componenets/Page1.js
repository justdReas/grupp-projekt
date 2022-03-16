import React from "react";

import "./page1.css";

function Page1() {
  return (
    <div>
      <h1 style={{ color: "pink" }}>Page 1</h1>
      <button id="createBtn">Create a new account</button>
      <form id="createForm">
        <label>Please fill in details bellow:</label>
        <input type="text" id="fname" placeholder="First name..." />
        <input type="text" id="sname" placeholder="Surname..." />
        <input type="text" id="email" placeholder="E-mail..." />
        <input type="text" id="bank" placeholder="Bank account number..." />
        <button id="cancel">Cancel</button>
        <button id="create">Create</button>
      </form>
    </div>
  );
}

export default Page1;
