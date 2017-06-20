import React from 'react'
import  PropTypes from 'prop-types'

const historyColor = (history) => {
  switch (history) {
    case 5: return '#550'
    case 4: return '#440'
    case 3: return '#330'
    case 2: return '#220'
    case 1: return '#110'
    default: return '#000'
  }
}

const style = (isAlive, history) => {
  if(isAlive){
    return ({
      background: "#090"
    })
  }
  else{
    return ({
      background: historyColor(history)
    })
  }
}

const Cell = ({row, col, isAlive, history, handleCellClick}) => (
    <div 
      className="cell"
      onClick={() => handleCellClick(row,col)}
      style={style(isAlive,history)}/>
)

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  isAlive: PropTypes.bool.isRequired,
  history: PropTypes.number.isRequired,
  handleCellClick: PropTypes.func.isRequired
}

export default Cell
