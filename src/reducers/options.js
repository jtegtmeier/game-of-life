const options = (previousState, action) => {
  switch(action.type){
    case 'RESET_BOARD':
      return {
        ...previousState,
        isRunning: false,
        cells: previousState.cells.map((cell)=>cell.isAlive=false)
      }
    case 'GENERATE_RANDOM_CELLS':
      return {
        ...previousState,
        isRunning: false,
        cells: previousState.cells.forEach((cell)=>cell.isAlive=(Math.random()>.49?true:false))
      }
    case 'TOGGLE_GAME_RUNNING':
      return {
        ...previousState,
        isRunning: !previousState.isRunning
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
