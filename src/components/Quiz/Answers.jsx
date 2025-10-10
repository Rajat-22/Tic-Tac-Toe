import { useRef } from "react"
import styles from './Quiz.module.css'

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef()

      if(!shuffledAnswers.current){
     shuffledAnswers.current = [...answers]
     shuffledAnswers.current.sort(() => Math.random() - 0.5)
   }
   return (
    <>
    <ul className={styles.answers}>
        
         {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let cssClass = ''
            if(answerState === 'answered' && isSelected){
                cssClass = styles.selected
            }
            if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                cssClass = styles[answerState]
            }

           return ( 
           <li key={answer} className={styles.answer}>
                <button className={cssClass}
                onClick={() => onSelect(answer)}
                >{answer}</button>
            </li>
            )
         })}
   </ul>
    </>
        
   )
    
}