import { Square } from './Square'
import { WINNER } from '../utils/constants'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === WINNER.NONE) return null

  const winnerText = winner === WINNER.DRAW ? 'Draw' : 'Win!'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {
            winner === WINNER.X || winner === WINNER.O
              ? <Square>{winner}</Square>
              : <><Square>{WINNER.X}</Square><Square>{WINNER.O}</Square></>
          }
        </header>

        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  )
}
