//gets a blank board of dead cells with square size
export const getBlankCells = (size = 10) => {
  let cells = []
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      cells[i+j] = {
        x: i,
        y: j,
        isAlive: false
      }
    }
  }
  return cells
}
