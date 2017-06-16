const options = (previousState = {
  isRunning: false,
  gameSpeed: 1,
  viewCellHistory: true}, action) => {
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
    case 'TOGGLE_VIEW_CELL_HISTORY':
      return {
        ...previousState,
        viewCellHistory: !previousState.viewCellHistory
      }
    default:
      return previousState
  }
}

export default options
