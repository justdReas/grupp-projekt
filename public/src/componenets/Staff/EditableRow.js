import React from "react";

const EditableRow = ({
  contact,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className="card">
      <p>ID: {contact.id}</p>
      <p>
        Name:
        <input
          type="text"
          required="required"
          placeholder="Enter a first name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="text"
          required="required"
          placeholder="Enter a surname..."
          name="surname"
          value={editFormData.surname}
          onChange={handleEditFormChange}
        ></input>
      </p>

      <p>
        E-mail:{" "}
        <input
          type="email"
          required="required"
          placeholder="Enter an email address..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </p>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditableRow;
