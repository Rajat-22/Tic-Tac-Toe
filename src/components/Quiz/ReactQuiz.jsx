import styles from './Quiz.module.css'
import Header from './Header.jsx'
import Quiz from './Quiz.jsx'

export default function ReactQuiz() {
  return (
   <>
   <div className={styles.body}>
    <Header />
    <main>
        <Quiz />
    </main>
   </div>

   </>
  );
}