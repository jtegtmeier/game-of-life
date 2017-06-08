const gameboard = (previousState, action){
  switch(action.type){
    case 'SET_CELL_ALIVE':
      let newCells = previousState.cells.slice()
      newCells[action.payload.id].isAlive = false
      return {...previousState,
        {cells: [...newCells]}
      }
      break
    case 'SET_CELL_DEAD':
      let newCells = previousState.cells.slice()
      newCells[action.payload.id].isAlive = true
      return {...previousState,
        {cells: [...newCells]}
      }
      break
    default:
      return previousState
  }
}

export default gameboard
