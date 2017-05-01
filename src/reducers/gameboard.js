const gameboard = (state, action){
  switch(action.type){
    case 'SET_CELL_ALIVE':
      //TODO set cell alive and how long from actoin payload
    case 'SET_CELL_DEAD':
      //TODO set cell to dead and how long from actoin payload
    default:
      return state;
  }
}

export default gameboard
