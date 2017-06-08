const gameboard = (previousState, action){
  switch(action.type){
    case 'SET_CELL_ALIVE':
      return {...previousState, {
        cells: [
          ...previousState.cells,
          //TODO set cell to alive and how long from actoin payload
        ]
      }}
    case 'SET_CELL_DEAD':
      //TODO set cell to dead and how long from actoin payload
    case 'GET_NEXT_GENERATION':
      //TODO run through the state and create a new generation
    default:
      return previousState;
  }
}

export default gameboard
