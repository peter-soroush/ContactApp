import React from "react";
import style from "./ContactItem.module.css";
function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandeler,
  index,
  editHandeler,
}) {
  return (
    <li className={style.item}>
      <p>
        {index + 1} | {name} {lastName}
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
        <button onClick={() => deleteHandeler(id)}>🗑️</button>
        <button onClick={() => editHandeler(id, name, lastName, email, phone)}>
          ✏️
        </button>
      </p>
    </li>
  );
}

export default ContactItem;
