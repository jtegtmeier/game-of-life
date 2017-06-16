export const toggleCellAlive = (row,col) => ({
  type: 'TOGGLE_CELL_ALIVE',
  payload: {
    row: row,
    col: col
  }
})

export const updateCells = cells => ({
  type: 'UPDATE_CELLS',
  payload: cells
})

export const setIntervalId = (intervalId) => ({
  type: 'SET_INTERVAL_ID',
  payload: intervalId
})

export const setBoardSize = size => ({
  type: 'SET_BOARD_SIZE',
  payload: size
})

export const resetBoard = () => ({
  type: 'RESET_BOARD'
})

export const generateRandomCells = () => ({
  type: 'GENERATE_RANDOM_CELLS'
})

export const startGame = () => ({
  type: 'START_GAME'
})

export const pauseGame = () => ({
  type: 'PAUSE_GAME'
})

export const resetGame = () => ({
  type: 'RESET_GAME'
})

export const setGameSpeed = (speed) => ({
  type: 'SET_GAME_SPEED',
  payload: {
    gameSpeed: speed
  }
})

export const toggleViewCellHistory = () => ({
  type: 'TOGGLE_VIEW_CELL_HISTORY'
})

export const toggleBordersWrap = () => ({
  type: 'TOGGLE_BORDERS_WRAP'
})
