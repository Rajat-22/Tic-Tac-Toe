import { useState } from 'react';
import styles from './Quiz.module.css'
import QUESTIONS from './questions.js'
export default function Quiz() {    
   const [userAnswer, setUserAnswer] = useState([])
   const activeQuestion = userAnswer.length
   const quizComplete = activeQuestion === QUESTIONS.length

   function handleSelectAnswer(selectedAnswer){
      setUserAnswer((prevAnswers) => {
        return [...prevAnswers, selectedAnswer]
      })
   }

   if(quizComplete){
    return (
        <div className={styles.summary}>
             <img
                    src="/quiz-complete.png"
                    alt="Trophy icon" />
                  <h2 className={styles.h2}>Game Over</h2>
        </div>
    )
   }

    const shuffledAnswers = [...QUESTIONS[activeQuestion].answers]
   shuffledAnswers.sort(() => Math.random() - 0.5)
   
  return (
   <div className={styles.quiz}>
   <div className={styles.question}>
       <h2>{QUESTIONS[activeQuestion].text}</h2>
   </div>
   <ul className={styles.answers}>
         {shuffledAnswers.map((answer) => (
            <li key={answer} className={styles.answer}>
                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
         ))}
   </ul>
   </div>
  );
}