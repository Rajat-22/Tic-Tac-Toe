

export default function GameBoard({ onSelectSquare, board }) {


  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // function handleClick(rowIndex, colIndex){
  //     setGameBoard((prevGameBoard) =>{
  //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
  //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
  //         return updatedGameBoard
  //     })

  //     onSelectSquare()
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((player, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={player !== null}>
                  {player}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
