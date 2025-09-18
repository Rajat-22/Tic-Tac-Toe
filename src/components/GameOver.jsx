export default function GameOver({ winner, onRematch }){ 
    return(
       <div id='game-over'>
            <h2>Game over!</h2>
            {winner && <p>Winner is {winner}</p>}
            {!winner && <p>It's a draw!</p>}
            <button onClick={onRematch}>Rematch</button>
       </div>
    )
}