const Staff = ({ id, name, surname, email, onDelete }) => {
  return (
    <div>
      <p>
        {name} {surname}
      </p>
      {/* <p>{`ID: ${id}`}</p> */}
      <p>{email}</p>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default Staff;
