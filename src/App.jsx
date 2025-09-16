import Player from "./components/Player.jsx"
function App() {

  return (
    <>
    <div id="game-container">
      <ol id="players">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </ol>
      Game board will go here
    </div>
    Score will be here
    </>
  )
}

export default App
