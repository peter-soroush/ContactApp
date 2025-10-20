import React from "react";
import { useState } from "react";

import Contactslist from "./Contactslist";

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastname", placeholder: "LastName" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "number", name: "phone", placeholder: "Phone Number" },
];

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const addHandeler = () => {
    if (!contact.name) {
      setAlert("Please Enter Valid Name");
      return;
    } else if (!contact.lastName) {
      setAlert("Please Enter Valid LastName");
      return;
    } else if (!contact.email) {
      setAlert("Please Enter Valid Email");
      return;
    } else if (!contact.phone) {
      setAlert("Please Enter Valid Phone Number");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
    console.log(contacts);
  };
  const changeHandeler = (event) => {
    const name = event.target.name;
    setContact((contact) => ({ ...contact, [name]: event.target.value }));
  };
  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandeler}
          />
        ))}
        <button onClick={addHandeler}>Add Contact</button>
      </div>
      <div className="alert">{alert && <p>{alert}</p>}</div>
      <Contactslist contacts={contacts} />
    </div>
  );
}

export default Contacts;
