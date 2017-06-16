//gets a blank board of dead cells with square size
export const getDeadCells = size => {
  let cells = []
  for(let i = 0; i < size; i++){
    cells[i] = new Array(size)
    for(let j = 0; j < size; j++){
      cells[i][j] = {
        isAlive: false,
        history: 0
      }
    }
  }
  return cells
}

export const getNeighbourCount = (cells, row_i, col_i) => {
  let count = 0
  for(let i = row_i-1; i <= row_i+1; i++){
    if(cells[i]){
      for(let j = col_i-1; j <= col_i+1; j++){
        if(cells[j]){
          if(cells[i][j].isAlive && !(i===row_i && j===col_i)){
            count++
          }
        }
      }
    }
  }
  return count
}

export const getRandomCell = () => {
  if(Math.random()>.49){
    return {isAlive: true, history: 5}
  }
  return {isAlive: false, history: 0}
}

export const printCells = (cells) => { //debug
  cells.forEach((row, i) =>
    console.log(`row${i} `, row.reduce((acc, curr, j) => (acc += `${getNeighbourCount(cells, i, j)}, `),"")))
    console.log("next")
}
