import React, { useState } from "react";
import Staff from "./Staff";

import "./page1.css";

const Page1 = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleCancel = () => setOpenForm(false);
  const handleCreate = () => {
    setOpenForm(false);
    addStaff();
  };

  const [staff, setStaff] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const addStaff = () => {
    const newStaff = { name, surname, email };
    setStaff([...staff, newStaff]);
  };

  return (
    <div style={{ display: "flex", width: "85%", flexDirection: "column" }}>
      <h1 style={{ color: "pink" }}>Staff</h1>
      <button onClick={() => setOpenForm(!openForm)}>{"Create account"}</button>
      {openForm && (
        <form id="createForm">
          <label>Please fill in details bellow:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="First name..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            id="field"
            name="sname"
            placeholder="Surname..."
            value={surname}
            onChange={(event) => {
              setSurname(event.target.value);
            }}
          />
          <input
            type="email"
            id="field"
            name="email"
            placeholder="E-mail..."
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            id="field"
            name="bank"
            placeholder="Bank account number..."
          />
          <button type="button" onClick={handleCancel} id="cancel">
            Cancel
          </button>
          <button type="button" onClick={handleCreate} id="create">
            Create
          </button>
        </form>
      )}
      {staff.map(({ name, surname, email }) => (
        <Staff name={name} surname={surname} email={email} />
      ))}
    </div>
  );
};

export default Page1;
