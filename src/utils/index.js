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

//returns the count of live neighbour cells given a 2d cells array and cell row, col location
//wraps out of bounds lookups to the other side of the cells array
export const getNeighbourCount = (cells, row, col) => {
  const size = cells.length
  let count = 0, i_wrap, j_wrap
  for(let i = row-1; i <= row+1; i++){
    for(let j = col-1; j <= col+1; j++){
      if(!(i===row && j===col)){
        if(i >= 0 && i < size){
          i_wrap = i
        }
        else if(i === -1){
          i_wrap = i+size
        }
        else if(i === size){
          i_wrap = i-size
        }
        if(j >= 0 && j < size){
          j_wrap = j
        }
        else if(j === -1){
          j_wrap = j+size
        }
        else if(j === size){
          j_wrap = j-size
        }
        if(cells[i_wrap][j_wrap].isAlive){
          count++
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
