"use client";

import React, { useContext } from "react";
import styles from "./ToggleDarkMode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const ToggleDarkMode = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default ToggleDarkMode;
