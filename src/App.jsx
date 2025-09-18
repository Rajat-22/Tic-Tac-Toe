import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './winning-combination.js'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
   X: 'Player 1',
    O: 'Player 2'
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(gameBoard, players){
let winner

  
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSqaureSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSqaureSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSqaureSymbol && firstSquareSymbol === thirdSqaureSymbol) {
      winner = players[firstSquareSymbol]
    }
  }

  return winner
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS)
  // const [activeplayer, setActiveplayer] = useState('X')
  const activeplayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns)
  
  const winner = deriveWinner(gameBoard, players)

  const hasDrawn = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    // setActiveplayer((currentplayer) => currentplayer === 'X' ? 'O' : 'X')

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updateTurns;
    });
  }

  function handleRestart(){
    setGameTurns([])
  }

  function handlePlayerNameChange (symbol, name){
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: name
    }));
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activeplayer === "X"} onNameChange={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol="O" isActive={activeplayer === "O"} onNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDrawn) && <GameOver winner={winner} onRematch={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
