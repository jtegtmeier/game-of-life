import { getDeadCells } from '.././utils'

const gameboard = (previousState = { cells: getDeadCells(20) }, action) => {
  let changedCells
  switch(action.type){
    case 'TOGGLE_CELL_ALIVE':
      changedCells = previousState.cells.map((row, row_i) =>
        row_i!==action.payload.row ? row : row.map((cell, col_i) =>
          col_i!== action.payload.col ? cell : cell.isAlive ? {isAlive: false, history: 0} : {isAlive: true, history: 5} ))
      return {
        ...previousState,
        cells: [...changedCells]
      }
    case 'UPDATE_CELLS':
      return {
        ...previousState,
        cells: action.payload
      }
    default:
      return previousState
  }
}

export default gameboard
