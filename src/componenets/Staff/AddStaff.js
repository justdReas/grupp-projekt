import React, { useState } from "react";
import Staff from "./Staff";

import "./addStaff.css";

const AddStaff = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleCreate = () => {
    validateInput();
    if (error === false) {
      console.log("Error 3");
    } else {
      addStaff();
      setId(idRandom());
      setName("");
      setSurname("");
      setEmail("");
      setBank("");
      setOpenForm(false);
    }
  };

  const handleCancel = () => {
    setOpenForm(false);
    setName("");
    setSurname("");
    setEmail("");
    setBank("");
  };

  const validateInput = () => {
    if (name === "") {
      setError(true);
      setName("Error message");
      console.log("Error");
    }
  };

  const [staff, setStaff] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");
  const [error, setError] = useState("");

  const addStaff = () => {
    const newStaff = {
      id,
      name,
      surname,
      email,
    };
    setStaff([...staff, newStaff]);
    // incrementCounter();
    console.log(id, name, surname, email, bank);
  };

  /* const incrementCounter = () => {
    setId((previousValue) => previousValue + 1);
  }; */

  const deleteStaff = (deleteId) => {
    const filteredStaff = staff.filter(
      (staffMember) => staffMember.id !== deleteId
    );
    setStaff(filteredStaff);
  };

  const idRandom = () => {
    return Date.now() + Math.random();
  };

  const [id, setId] = useState(idRandom());

  return (
    <div style={{ display: "flex", width: "85%", flexDirection: "column" }}>
      <h1 style={{ color: "pink" }}>Staff</h1>
      <button onClick={() => setOpenForm(!openForm)}>{"Create account"}</button>
      {openForm && (
        <form id="createForm">
          <label>Please fill in details bellow:</label>
          <div id="formDetails">
            <div className="form-name">
              <label htmlFor="name">Name</label>
              <div className="nameGrp">
                <select>
                  <option value="Mr"></option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                </select>

                <input
                  type="text"
                  id="field"
                  name="fname"
                  placeholder="First name..."
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname</label>
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
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
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
            </div>
            <div className="form-group">
              <label htmlFor="bank">Bank Account</label>
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
            </div>
          </div>
          <div className="buttonsRight">
            <button id="createBtn" type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button id="createBtn" type="button" onClick={handleCreate}>
              Create
            </button>
          </div>
        </form>
      )}
      {staff.map(({ id, name, surname, email }) => {
        return (
          <Staff
            key={id}
            id={id}
            name={name}
            surname={surname}
            email={email}
            onDelete={deleteStaff}
          />
        );
      })}
    </div>
  );
};

export default AddStaff;
