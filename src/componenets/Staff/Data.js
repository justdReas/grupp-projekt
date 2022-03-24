import React from "react";

const persons = [
  {
    keyId: "1",
    id: "1",
    name: "Andreas",
    surname: "Benckert",
    email: "andreas.benckert@gmail.com",
  },
  { keyId: "2", id: "2", name: "Taner", surname: "Tun" },
  { keyId: "3", id: 3, name: "Kim" },
  { keyId: "4", id: 4, name: "Lihem" },
];
const Data = () => {
  return persons.map((person) => {
    return (
      <div>
        <p>
          {person.name} {person.surname}
        </p>
        <p>{person.email}</p>
        <button>Edit</button>
        <button>X</button>
      </div>
    );
  });
};

export default Data;
