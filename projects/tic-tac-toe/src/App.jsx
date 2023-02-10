import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Board, Turn, WinnerModal } from './components'
import { checkEndGame, checkWinnerFrom } from './utils/board'
import { resetGameInStorage, saveGameToStorage } from './utils/storage'
import { TURNS, WINNER } from './utils/constants'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = JSON.parse(window.localStorage.getItem('board'))
    return boardFromStorage ?? Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(WINNER.NONE)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(WINNER.NONE)

    // reset game in local storage
    resetGameInStorage()
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

    // save game to local storage
    saveGameToStorage({ board: newBoard, turn: newTurn })

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
