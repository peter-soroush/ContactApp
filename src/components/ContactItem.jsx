import React from "react";
import style from "./ContactItem.module.css";
function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandeler,
  index,
}) {
  return (
    <li className={style.item}>
      <p>{index + 1}</p>
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
        <button onClick={() => deleteHandeler(id)}>🗑️</button>
      </p>
    </li>
  );
}

export default ContactItem;
