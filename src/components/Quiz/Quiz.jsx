import { useState } from 'react';
import styles from './Quiz.module.css'
import QUESTIONS from './questions.js'
export default function Quiz() {    
   const [userAnswer, setUserAnswer] = useState([])
   const activeQuestion = userAnswer.length

   function handleSelectAnswer(selectedAnswer){
      setUserAnswer((prevAnswers) => {
        return [...prevAnswers, selectedAnswer]
      })
   }
   
  return (
   <div className={styles.quiz}>
   <div className={styles.question}>
       <h2>{QUESTIONS[activeQuestion].text}</h2>
   </div>
   <ul className={styles.answers}>
         {QUESTIONS[activeQuestion].answers.map((answer) => (
            <li key={answer} className={styles.answer}>
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
         ))}
   </ul>
   </div>
  );
}