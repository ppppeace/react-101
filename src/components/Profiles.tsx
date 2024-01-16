//const names = ["John Doe", "Chuck Norris", "Jane Doe", "Foo Bar", "Alice Bob"];

import { useState } from "react";

const defaultUsers = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Chuck Norris",
  },
];

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

interface User {
  id: number;
  name: string;
}
export default function Profiles() {
  const [users, setUsers] = useState<User[]>(defaultUsers);

  //const isLoggedIn = true;

  function handleClick() {
    const id = users.length + 1;

    const newUser = {
      id,
      name: "User #" + id,
    };

    setUsers([...users, newUser]);
    //alert("Hello World!" + name);
  }

  console.log("Profiles rendered");

  return (
    <div>
      <ul>{listItems}</ul>
      {users.map((user) => {
        return (
          <p key={user.id} onClick={handleClick}>
            {user.name}
          </p>
        );
      })}
    </div>
  );
}
