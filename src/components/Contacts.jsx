import React from "react";
import { useState } from "react";

import Contactslist from "./Contactslist";
import inputs from "../constants/inputs";
import { v7 } from "uuid";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
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
    const newContact = { ...contact, id: v7() };
    setContacts((contacts) => [, ...contacts, newContact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
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
