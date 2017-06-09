const gameboard = (previousState, action) => {
  let newCells = previousState.cells.slice()
  switch(action.type){
    case 'SET_CELL_ALIVE':
      newCells[action.payload.id].isAlive = false
      return {...previousState,
        cells: [...newCells]
      }
    case 'SET_CELL_DEAD':
      newCells[action.payload.id].isAlive = true
      return {...previousState,
        cells: [...newCells]
      }
    default:
      return previousState
  }
}

export default gameboard
