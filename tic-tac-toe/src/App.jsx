import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER = {
  X: 'X',
  O: 'O',
  DRAW: 'DRAW',
  NONE: 'NONE'
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={() => handleClick()}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(WINNER.NONE)

  const checkWinner = (boardToCheck) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination
      if (
        boardToCheck[a] && // 0 -> X or O
        boardToCheck[a] === boardToCheck[b] && // 0 and 1 are the same
        boardToCheck[a] === boardToCheck[c] // 0 and 2 are the same
      ) {
        return WINNER[boardToCheck[a]]
      }
    }

    // check if there are any empty squares
    if (boardToCheck.includes(null)) {
      return WINNER.NONE
    }

    return WINNER.DRAW
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(WINNER.NONE)
  }

  const updateBoard = (index) => {
    // if the square is already filled, do nothing
    if (board[index] || winner !== WINNER.NONE) return
    // update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // update the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // check for winner
    const newWinner = checkWinner(newBoard)
    if (newWinner !== WINNER.NONE) {
      setWinner(newWinner)
    }

    // TODO: check if game is over
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>

      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {winner !== WINNER.NONE && (
        <section className='winner'>
          <div className='text'>
            <h2>
              {winner === WINNER.DRAW ? 'Draw' : `Win!`}
            </h2>

            <header className='win'>
              {(winner === WINNER.X || winner === WINNER.O) && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Play Again</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
