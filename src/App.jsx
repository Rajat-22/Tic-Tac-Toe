import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activeplayer, setActiveplayer] = useState('X')

  function handleSelectSquare(rowIndex, colIndex){
    setActiveplayer((currentplayer) => currentplayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }

      const updateTurns = [
        {square : {row: rowIndex, col: colIndex}, player : currentPlayer},
        ...prevTurns
      ]

      return updateTurns
    })
  }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activeplayer === 'X'} />
        <Player name="Player 2" symbol="O" isActive={activeplayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
    </div>
   <Log turns={gameTurns} />
    </>
  )
}

export default App
