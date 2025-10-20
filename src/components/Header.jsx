import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="ahmadreza-soroush.ir">Ahmadreza-Soroush.ir</a> | react.js
        Course
      </p>
    </div>
  );
}

export default Header;
