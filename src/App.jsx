import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import TicTacToe from './components/Tic-Tac-Toe Game/TicTacToe.jsx';
import PausePlay from './components/Pause & Play/PausePlay.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/tic-tac-toe" style={{ margin: "0 1rem" }}>Tic Tac Toe</Link>
        <Link to="/play-pause" style={{ margin: "0 1rem" }}>Play & Pause</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/tic-tac-toe" replace />} />

        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/play-pause" element={<PausePlay />} />

        <Route path="*" element={<h2 className="fallback">Select a game above</h2>} />
      </Routes>

    </Router>
  );
}

export default App;
