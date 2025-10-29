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

  const [success, setSuccess] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [ContactsBeforeSearch, setContactsBeforeSearch] = useState(...contacts);

  const deleteHandeler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    setContactsBeforeSearch(contacts);
  };

  const selectSortBy = (event) => {
    const key = event.target.value;

    const newContacts = [...contacts].sort((a, b) => {
      const A = (a?.[key] ?? "").toString().toLowerCase();
      const B = (b?.[key] ?? "").toString().toLowerCase();

      return A.localeCompare(B, "en", { numeric: true, sensitivity: "base" });
    });

    setContacts(newContacts);
  };

  const editHandeler = (id, name, lastName, email, phone) => {
    setEdit(true);
    setContact({ name: name, lastName: lastName, email: email, phone: phone });
    setID(id);
  };

  const Searchhandeler = (event) => {
    const searchText = event.target.value;
    console.log({ searchText });

    if (searchText !== "") {
      const newContacts = contacts.filter(
        (contact) =>
          contact.name == searchText ||
          contact.lastName == searchText ||
          contact.email == searchText ||
          contact.phone == searchText
      );
      setContacts(newContacts);
      console.log(newContacts);
    } else {
      setContacts(ContactsBeforeSearch);
    }
  };

  const editActionHandeler = () => {
    deleteHandeler(currentId);
    addHandeler();
    setEdit(false);
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
    setContactsBeforeSearch(contacts);

    setSuccess(
      editContactBtn
        ? "Changes has been made Succesfully"
        : `Contact ${contact.name} has been added successfully`
    );

    setTimeout(() => {
      setSuccess("");
    }, 2500);
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
      {alert ? (
        <div className={Styles.alert}>{alert && <p>{alert}</p>}</div>
      ) : (
        ""
      )}

      <div className={Styles.success}>{success && <p>{success}</p>}</div>

      <div className={Styles.userOptions}>
        <select
          name="SortBy"
          id=""
          onChange={selectSortBy}
          className={Styles.sortOption}
          placeholder="Sort By"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="lastName">Last name</option>
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
        </select>
        <input
          type="text"
          className={Styles.searchBox}
          onChange={Searchhandeler}
        />
      </div>
      <Contactslist
        contacts={contacts}
        deleteHandeler={deleteHandeler}
        editHandeler={editHandeler}
      />
    </div>
  );
}

export default Contacts;
