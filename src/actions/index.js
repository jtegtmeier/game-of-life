export const setCellAlive = (cellLocation) => ({
  type: 'SET_CELL_ALIVE',
  payload: {
    x: cellLocation.x,
    y: cellLocation.y,
    isAlive: true
  })
}

export const setCellDead = (cellLocation) => ({
  type: 'SET_CELL_DEAD',
  payload: {
    x: cellLocation.x,
    y: cellLocation.y,
    isAlive: false
  })
}

export const resetBoard = () => ({
  type: 'RESET_BOARD'
})

export const generateRandomCells = () => ({
  type: 'GENERATE_RANDOM_CELLS'
})

export const toggleGameRunning = () => ({
  type: 'TOGGLE_GAME_RUNNING'
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
