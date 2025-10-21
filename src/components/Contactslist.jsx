import React from "react";
import ContactItem from "./ContactItem";

function Contactslist({ contacts, deleteHandeler }) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandeler={deleteHandeler}
            />
          ))}
        </ul>
      ) : (
        <p>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default Contactslist;
