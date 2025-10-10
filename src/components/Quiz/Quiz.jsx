import { useState, useCallback, useRef } from 'react';
import styles from './Quiz.module.css'
import QUESTIONS from './questions.js'
import QuestionTimer from './QuestionTimer.jsx'
import Answers from  './Answers.jsx'


export default function Quiz() {    
   const [userAnswer, setUserAnswer] = useState([])
   const [answerState, setAnswerState] = useState('')

   const activeQuestion = answerState === '' ? userAnswer.length : userAnswer.length - 1
   const quizComplete = activeQuestion === QUESTIONS.length

   const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
    setAnswerState('answered')
      setUserAnswer((prevAnswers) => {
        return [...prevAnswers, selectedAnswer]
      })
      setTimeout(() => {
        if(selectedAnswer ===  QUESTIONS[activeQuestion].answers[0]){
            setAnswerState('correct')
        }else {
            setAnswerState('wrong')
        }

        setTimeout(() => {
            setAnswerState('')
        }, 2000);
        
      }, 1000);
   }, [activeQuestion])
   

   const handleSkipAnswer = useCallback( () => handleSelectAnswer(null), [handleSelectAnswer])

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
 

  return (
   <div className={styles.quiz}>
   <div className={styles.question}>
    <QuestionTimer key={`activeQuestion_${activeQuestion}`}
    timeout={10000} 
    onTimeout={handleSkipAnswer} 
    />

       <h2>{QUESTIONS[activeQuestion].text}</h2>

        <Answers 
        key={activeQuestion}
        answers={QUESTIONS[activeQuestion].answers}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        answerState={answerState}
        onSelect={handleSelectAnswer}
         />
   </div>
   </div>
  );
}