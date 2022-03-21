import React, { useState } from "react";
import Staff from "./Staff";

import "./page1.css";

const Page1 = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleCancel = () => {
    setOpenForm(false);
    setName("");
    setSurname("");
    setEmail("");
    setBank("");
  };

  const handleCreate = () => {
    if (error === false) {
    }
    if (error === true) {
      addStaff();
      validateInput();
      setOpenForm(false);
      setIdKey(id());
      setName("");
      setSurname("");
      setEmail("");
      setBank("");
    }
  };

  const validateInput = () => {
    if (name === "") {
      console.log("Error");
      setError(true);
      setName("Error message");
    }
    if (surname === "") {
      setError(true);
    }
  };

  const [staff, setStaff] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [error, setError] = useState("");

  const id = () => {
    return Date.now() + Math.random();
  };

  const [idKey, setIdKey] = useState(id());

  const addStaff = () => {
    const newStaff = { idKey, name, surname, email, bank };
    setStaff([...staff, newStaff]);
    console.log(idKey, name, surname, email, bank);
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
            id="field"
            name="fname"
            placeholder="First name..."
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
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
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            id="field"
            name="bank"
            placeholder="Bank account number..."
            value={bank}
            onChange={(event) => {
              setBank(event.target.value);
            }}
          />
          <button type="button" onClick={handleCancel} id="cancel">
            Cancel
          </button>
          <button type="button" onClick={handleCreate} id="create">
            Create
          </button>
        </form>
      )}
      {staff.map(({ idKey, name, surname, email }) => (
        <Staff
          key={idKey}
          id={idKey}
          name={name}
          surname={surname}
          email={email}
        />
      ))}
    </div>
  );
};

export default Page1;
