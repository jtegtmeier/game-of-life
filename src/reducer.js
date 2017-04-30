const reducer = (state, action){
  switch(action.type){
    case 'SET_CELL_ALIVE':
      //TODO set cell from actoin payload to alive
    case 'SET_CELL_DEAD':
      //TODO set cell from actoin payload to dead
    default:
      return state;
  }
}

export default reducer
