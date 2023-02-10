import { WINNER, WINNING_COMBINATIONS } from './constants'

export const checkWinnerFrom = (boardToCheck) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    if (
      boardToCheck[a] && // 0 -> X or O
      boardToCheck[a] === boardToCheck[b] && // 0 and 1 are the same
      boardToCheck[a] === boardToCheck[c] // 0 and 2 are the same
    ) {
      return boardToCheck[a]
    }
  }

  return WINNER.NONE
}

export const checkEndGame = (boardToCheck) => {
  // check if there are any empty squares
  return boardToCheck.every((square) => square !== null)
}
