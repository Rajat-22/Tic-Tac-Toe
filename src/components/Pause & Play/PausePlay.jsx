import styles from "./PausePlay.module.css";
import Player from "./Player";
import TimerChallenge from "./TimerChallenge";

export default function PausePlay({}) {
    return (
        <>
        <div className={styles.body}>
            <div className={styles.content}>
<header className={styles.header}>
        <h1 className={styles.h1}>The <em className={styles.h1Em}>Almost</em> Final Countdown</h1>
        <p className={styles.headerP}>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        
        <Player />
        <div className={styles.challenges}>
            <TimerChallenge title="Easy" targetTime={5} />
            <TimerChallenge title="Medium" targetTime={10} />
            <TimerChallenge title="Hard" targetTime={15} />
            <TimerChallenge title="Expert" targetTime={20} />
        </div>
            </div>
        
        </div>
        
        </>
    )
} 