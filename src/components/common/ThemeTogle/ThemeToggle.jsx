import React from "react";
import  useTheme  from "../../../hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      {theme === "light" ? (
        <FiMoon className={styles.icon} />
      ) : (
        <FiSun className={styles.icon} />
      )}
      <span className={styles.tooltip}>
        {theme === "light" ? "Modo oscuro" : "Modo claro"}
      </span>
    </button>
  );
};

export default ThemeToggle;
