import styles from "./PausePlay.module.css";
import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  let timer = useRef()
  let dialog = useRef()

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal()
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current)
  }
  return (
    <>
    <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
    <section className={styles.challenge}>
      <h2>{title}</h2>
      <p className={styles.challengeTime}>
        {targetTime} second{targetTime > 1 ? "s" : ""} remaining
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"}</button>
      </p>
      <p className={timerStarted ? styles.active : undefined}>
        {timerStarted ? "Time is running..." : "Time inactive"}
      </p>
    </section>
    </>
  );
}
