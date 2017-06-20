import { getDeadCells } from '.././utils'

const gameboard = (previousState = { cells: getDeadCells(20), generationNum: 0 }, action) => {
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
        cells: action.payload,
        generationNum: previousState.generationNum+1
      }
    case 'RESET_GENERATIONS':
      return {
        ...previousState,
        generationNum: 0
      }
    default:
      return previousState
  }
}

export default gameboard
