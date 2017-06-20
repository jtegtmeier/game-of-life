const options = (previousState = {
  isRunning: false,
  gameSpeed: 1,
  boardSize: 20,
  viewCellHistory: true
}, action) => {
  switch(action.type){
    case 'SET_INTERVAL_ID':
      return {
        ...previousState,
        intervalId: action.payload
      }
    case 'SET_GAME_SPEED':
      return {
        ...previousState,
        gameSpeed: action.payload.gameSpeed
      }
    case 'TOGGLE_CELL_HISTORY':
      return {
        ...previousState,
        viewCellHistory: !previousState.viewCellHistory
      }
    case 'SET_BOARD_SIZE':
      return {
        ...previousState,
        boardSize: action.payload
      }
    default:
      return previousState
  }
}

export default options
