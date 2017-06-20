import { updateCells, setIntervalId } from '../actions'
import { getNeighbourCount, getDeadCells, getRandomCell } from '../utils'

export const gameMiddleware = store => next => action => {
  let nextGeneration = getDeadCells(store.getState().options.boardSize)
  if(action.type === 'START_GAME') {
    const intervalId = setInterval(() => {
      const lastGeneration = store.getState().gameboard.cells
      nextGeneration = getDeadCells(store.getState().options.boardSize)
      lastGeneration.forEach((row, row_i) => {
        row.forEach((cell, col_i) => {
          const neighbours = getNeighbourCount(lastGeneration, row_i, col_i)
          if(cell.isAlive){
            if(neighbours < 2){
              nextGeneration[row_i][col_i].isAlive = false
              nextGeneration[row_i][col_i].history =
                lastGeneration[row_i][col_i].history-1
            }
            else if(neighbours < 4){
              nextGeneration[row_i][col_i].isAlive = true
              nextGeneration[row_i][col_i].history = 5
            }
            else{
              nextGeneration[row_i][col_i].isAlive = false
              nextGeneration[row_i][col_i].history =
                lastGeneration[row_i][col_i].history-1
            }
          }
          else{
            if(neighbours === 3){
              nextGeneration[row_i][col_i].isAlive = true
              nextGeneration[row_i][col_i].history = 5
            }
          }
      })})
      store.dispatch(updateCells(nextGeneration))
    }, 250)
    store.dispatch(setIntervalId(intervalId))
  }
  else if(action.type === 'PAUSE_GAME') {
    clearInterval(store.getState().options.intervalId)
  }
  else if(action.type === 'RESET_GAME') {
    clearInterval(store.getState().options.intervalId)
    store.dispatch(updateCells(nextGeneration))
  }
  else if(action.type === 'GENERATE_RANDOM_CELLS'){
    store.dispatch(
      updateCells(nextGeneration.map(row => row.map(cell =>
        getRandomCell()))))
  }
  next(action)
}
