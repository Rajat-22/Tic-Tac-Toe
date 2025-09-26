import styles from "./PausePlay.module.css";
import { useState, useRef } from "react";
export default function Player() {
    const [name, setName] = useState("");
    const inputRef = useRef(null);

   function handleClick() {
        setName(inputRef.current.value)
        inputRef.current.value = ''  // Updating dom directly by setting ref value -> clear name on input field
    }
  return (
    <section className={styles.player}>
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
