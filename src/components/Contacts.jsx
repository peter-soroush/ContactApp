import React from "react";
import { useState } from "react";

import Contactslist from "./Contactslist";
import inputs from "../constants/inputs";
import { v7 } from "uuid";

import Styles from "./Contacts.module.css";

function Contacts() {
  const [currentId, setID] = useState("");
  const [editContactBtn, setEdit] = useState(false);
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const deleteHandeler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    console.log(newContacts);
  };

  const editHandeler = (id, name, lastName, email, phone) => {
    setEdit(true);
    setContact({ name: name, lastName: lastName, email: email, phone: phone });
    setID(id);
  };

  const editActionHandeler = () => {
    console.log({ currentId });
    deleteHandeler(currentId);
    setEdit(false);

    addHandeler();
  };
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
    setContacts((contacts) => [...contacts, newContact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };
  const changeHandeler = (event) => {
    const name = event.target.name;
    setContact((contact) => ({ ...contact, [name]: event.target.value }));
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.form}>
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
        <button
          onClick={editContactBtn ? editActionHandeler : addHandeler}
          className={editContactBtn ? Styles.editBTN : ""}
        >
          {editContactBtn ? "Edit" : "Add Contact"}
        </button>
      </div>
      <div className={Styles.alert}>{alert && <p>{alert}</p>}</div>
      <Contactslist
        contacts={contacts}
        deleteHandeler={deleteHandeler}
        editHandeler={editHandeler}
      />
    </div>
  );
}

export default Contacts;
