import { WINNER } from "../utils/constants"
import { Square } from "./Square"

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === WINNER.NONE) return null

  const win = winner === WINNER.X || winner === WINNER.O
  const winnerText = winner === WINNER.DRAW ? 'Draw' : `Win!`

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {(win) && <Square>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  )
}
