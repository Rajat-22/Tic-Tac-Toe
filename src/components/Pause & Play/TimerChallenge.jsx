import styles from "./PausePlay.module.css";
import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  let timer = useRef();
  let dialog = useRef();

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        result={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />
      <section className={styles.challenge}>
        <h2>{title}</h2>
        <p className={styles.challengeTime}>
          {targetTime} second{targetTime > 1 ? "s" : ""} remaining
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerActive ? styles.active : undefined}>
          {timerActive ? "Time is running..." : "Time inactive"}
        </p>
      </section>
    </>
  );
}
