//  Andreas Benckert

import React, { useState, useEffect, Fragment } from "react";
import staffs from "./api";

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

import "./staffMember.css";

const StaffMember = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await staffs.get("/staffs");
      setContacts(data);
    }
    fetchData();
  }, []);

  const [openForm, setOpenForm] = useState(false);
  const idRandom = () => {
    return Date.now();
  };

  const [id, setId] = useState(idRandom());

  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    email: "",
    bank: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    email: "",
    bank: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id,
      name: addFormData.name,
      surname: addFormData.surname,
      email: addFormData.email,
      bank: addFormData.bank,
    };

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setOpenForm(false);
    setId(idRandom());
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      surname: editFormData.surname,
      email: editFormData.email,
      bank: editFormData.bank,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      surname: contact.surname,
      email: contact.email,
      bank: contact.bank,
    };

    setEditFormData(formValues);
  };

  const handleCloseClick = () => {
    setOpenForm(false);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);
    staffs.delete(`/${contactId}`);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div>
      <h1 style={{ color: "pink" }}>Staff</h1>
      <button onClick={() => setOpenForm(!openForm)}>
        {"Add a new staff member"}
      </button>
      {openForm && (
        <div className="createForm">
          <h2 style={{ color: "pink" }}>Add a Contact</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input
              type="text"
              name="name"
              required="required"
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="surname"
              required="required"
              placeholder="Enter a surname..."
              onChange={handleAddFormChange}
            />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email address..."
              onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="bank"
              required="required"
              placeholder="Enter a bank account..."
              onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
            <button type="button" onClick={handleCloseClick}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <form onSubmit={handleEditFormSubmit}>
        <div>
          {contacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id ? (
                <EditableRow
                  contact={contact}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </div>
      </form>
    </div>
  );
};

export default StaffMember;
