const actions = {
  setCellAlive(cellLocation){
    return {
      type: 'SET_CELL_ALIVE',
      payload: {
        x: cellLocation.x,
        y: cellLocation.y,
        isAlive: true
        //might need to set a cell id here for react render
      }
    }
  },
  setCellDead(cellLocation){
    return {
      type: 'SET_CELL_DEAD',
      payload: {
        x: cellLocation.x,
        y: cellLocation.y,
        isAlive: false
        //might need to set a cell id here for react render
      }
    }
  }
}

export default actions
