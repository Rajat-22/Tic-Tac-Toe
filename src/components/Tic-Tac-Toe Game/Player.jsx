import { useState } from "react";
import styles from "./TicTacToe.module.css";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) onNameChange(symbol, playerName);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className={styles.playerName}>{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleNameChange}></input>
    );
  }
  return (
    <li className={isActive ? styles.active : undefined}>
      <span className={styles.player}>
        {editablePlayerName}
        <span className={styles.playerSymbol}>{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
