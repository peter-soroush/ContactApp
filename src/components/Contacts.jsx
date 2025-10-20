import React from "react";
import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const addHandeler = () => {
    console.log(contact);
  };
  const changeHandeler = (event) => {
    const name = event.target.name;
    setContact((contact) => ({ ...contact, [name]: event.target.value }));
  };
  return (
    <div>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={changeHandeler}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={changeHandeler}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeHandeler}
        />
        <input
          name="phone"
          type="number"
          placeholder="Phone"
          value={contact.phone}
          onChange={changeHandeler}
        />
        <button onClick={addHandeler}>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;
