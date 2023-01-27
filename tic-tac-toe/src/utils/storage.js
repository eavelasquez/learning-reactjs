export const saveGameToStorage = ({ board, turn }) => {
  localStorage.setItem('board', JSON.stringify(board))
  localStorage.setItem('turn', turn)
}

export const resetGameInStorage = () => {
  localStorage.removeItem('board')
  localStorage.removeItem('turn')
}
