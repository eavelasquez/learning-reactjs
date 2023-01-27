import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { checkEndGame, checkWinnerFrom } from './utils/board'
import { Board, Turn, WinnerModal } from './components'
import { TURNS, WINNER } from './utils/constants'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(WINNER.NONE)

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
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner !== WINNER.NONE) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(WINNER.DRAW)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>

      <Board board={board} updateBoard={updateBoard} />
      <Turn turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
