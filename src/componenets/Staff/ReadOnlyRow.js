import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <div>
      <div>
        <p>ID: {contact.id}</p>
        <p>
          Name: {contact.name} {contact.surname}
        </p>
        <p>E-mail: {contact.email}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReadOnlyRow;
