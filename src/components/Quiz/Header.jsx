import style from './Quiz.module.css'

export default function Header() {
  return (
    <header className={style.header}>
        <img className={style.headerImg}
        src="/quiz-logo.png"
        alt="React Quiz." />
      <h1 className={style.h1}>React-Quiz</h1>
    </header>
  );
}