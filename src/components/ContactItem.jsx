import React from "react";

function ContactItem({ data: { id, name, lastName, email, phone } }) {
  return (
    <li key={id}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <p>
        <span>📱</span>
        {phone}
      </p>
      <p>
        <button>🗑️</button>
      </p>
    </li>
  );
}

export default ContactItem;
