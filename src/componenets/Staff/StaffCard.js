const StaffCard = ({ id, name, surname, email, onEdit, onDelete }) => {
  return (
    <div>
      <p>
        {name} {surname}
      </p>
      {/* <p>{`ID: ${id}`}</p> */}
      <p>{email}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default StaffCard;
