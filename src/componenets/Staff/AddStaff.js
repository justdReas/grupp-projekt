import React, { useState } from "react";
import StaffCard from "./StaffCard";
import data from "./data.json";

import "./addStaff.css";

const AddStaff = () => {
  const [openForm, setOpenForm] = useState(false);

  const [staff, setStaff] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bank, setBank] = useState("");

  const [error, setError] = useState("");

  const handleCreate = () => {
    validateInput();
    if (error == true) {
      console.log("Changing");
    } else {
      console.log("Working");
      addStaff();
      setOpenForm(false);
      setId(idRandom());
      setName("");
      setSurname("");
      setEmail("");
      setBank("");
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
      setName("Please right your first name");
      console.log("Error");
      setOpenForm(true);
    }
  };

  const addStaff = () => {
    const newStaff = {
      id,
      name,
      surname,
      email,
    };
    setStaff([...staff, newStaff]);
    console.log(id, name, surname, email, bank);
  };

  const deleteStaff = (deleteId) => {
    const filteredStaff = staff.filter(
      (staffMember) => staffMember.id !== deleteId
    );
    setStaff(filteredStaff);
  };

  const idRandom = () => {
    return Date.now();
  };

  const [id, setId] = useState(idRandom());

  const editStaff = (id, newName) => {
    const editStaffList = staff.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setStaff(editStaffList);
  };

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
                <input
                  type="text"
                  id="field"
                  name="name"
                  placeholder="First name..."
                  required="required"
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
                name="surname"
                placeholder="Surname..."
                required="required"
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
                required="required"
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
          <StaffCard
            key={id}
            id={id}
            name={name}
            surname={surname}
            email={email}
            onEdit={editStaff}
            onDelete={deleteStaff}
          />
        );
      })}
    </div>
  );
};

export default AddStaff;
