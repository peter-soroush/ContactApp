import React from "react";
import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandeler
  return (
    <div>
      <div>
        <input type="text" placeholder="Name" value={contact.name} />
        <input type="text" placeholder="Last Name" value={contact.lastName} />
        <input type="email" placeholder="Email" value={contact.email} />
        <input type="number" placeholder="Phone" value={contact.phone} />
        <button>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;
