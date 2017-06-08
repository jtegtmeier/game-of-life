export const setCellAlive = (cellId) => ({
  type: 'SET_CELL_ALIVE',
  payload: {
    id: cellId
  })
}

export const setCellDead = (cellId) => ({
  type: 'SET_CELL_DEAD',
  payload: {
    id: cellId
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

export const toggleBordersWrap = () => ({
  type: 'TOGGLE_BORDERS_WRAP'
})

// export const getNextGeneration = () => ({
//   type: 'GET_NEXT_GENERATION'
// })
