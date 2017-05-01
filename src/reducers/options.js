const options = (state, action){
  switch(action.type){
    case 'RESET_BOARD':
      //TODO clear the board, all cells dead
    case 'GENERATE_RANDOM_CELLS':
      //TODO generate random cells
    case 'TOGGLE_GAME_RUNNING':
      //TODO start/stop the game
    case 'SET_GAME_SPEED':
      //TODO set game speed
    case 'TOGGLE_VIEW_CELL_HISTORY':
      //TODO turn on/off cell history info view
    default:
      return state;
  }
}

export default options
