import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
function App() {
  const [activeplayer, setActiveplayer] = useState('X')

  function handleSelectSquare() {
    setActiveplayer((currentplayer) => currentplayer === 'X' ? 'O' : 'X')
  }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activeplayer === 'X'} />
        <Player name="Player 2" symbol="O" isActive={activeplayer === 'O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activeplayer} />
    </div>
    Score will be here
    </>
  )
}

export default App
