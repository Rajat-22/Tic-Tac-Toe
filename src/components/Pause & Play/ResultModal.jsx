import styles from "./PausePlay.module.css";

export default function ResultModal({ ref, result, targetTime, onReset }) {
  const userLost = result <= 0;
  const formattedResult = (result / 1000).toFixed(2);
  const score = Math.round((1 - (result / (targetTime * 1000))) * 100);

  return (
    <dialog ref={ref} className={styles.resultModal}>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>You won! score: {score}</h2>}
      <p>The target time was {targetTime} seconds.</p>
      <p>You stopped the timer with {formattedResult} seconds left</p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
