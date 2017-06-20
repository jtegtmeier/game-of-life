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

const style = (isAlive, history, showHistory) => {
  if(isAlive){
    return ({
      background: '#090'
    })
  }
  else if(showHistory){
    return ({
      background: historyColor(history)
    })
  }
  else{
    return ({
      background: '#000'
    })
  }
}

const Cell = ({row, col, isAlive, history, showHistory, handleCellClick}) => (
    <div
      className="cell"
      onClick={() => handleCellClick(row,col)}
      style={style(isAlive,history,showHistory)}/>
)

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  isAlive: PropTypes.bool.isRequired,
  history: PropTypes.number.isRequired,
  showHistory: PropTypes.bool.isRequired,
  handleCellClick: PropTypes.func.isRequired
}

export default Cell
