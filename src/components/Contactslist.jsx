import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";
function Contactslist({ contacts, deleteHandeler, editHandeler }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact, index) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandeler={deleteHandeler}
              index={index}
              editHandeler={editHandeler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contact Yet!</p>
      )}
    </div>
  );
}

export default Contactslist;
