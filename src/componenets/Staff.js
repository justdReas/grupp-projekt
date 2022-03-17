const Todo = ({ name, surname, email }) => {
  return (
    <div>
      <p>
        {name} {surname}
      </p>
      <p>{email}</p>
    </div>
  );
};

export default Todo;
