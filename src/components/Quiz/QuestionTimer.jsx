import { useEffect, useState, useRef } from 'react';
import styles from './Quiz.module.css'

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    // const intervalRef = useRef(null);

    useEffect(() =>{
       const timeOut = setTimeout(() =>{
            onTimeout()
        }, timeout)
        
       return () => clearTimeout(timeOut)
    }, [timeout, onTimeout])

    useEffect(() => {
       const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        }, 100);

        return () => clearInterval(interval)
    }, [])

    return <progress 
               className={styles.question}
               max={timeout}
               value={remainingTime}  />
}