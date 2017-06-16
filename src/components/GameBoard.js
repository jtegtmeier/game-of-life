import React from 'react'
import  PropTypes from 'prop-types'

const deadColor = (history) => {
  switch (history) {
    case 5: return '#550'
    case 4: return '#440'
    case 3: return '#330'
    case 2: return '#220'
    case 1: return '#110'
    default: return '#000'

  }
}

const GameBoard = ({cells, handleCellClick}) => {
  const board = cells.map((row,y) =>
      <div className="gameBoardRow" key={y}>
        {row.map((col,x) => <div onClick={()=>handleCellClick(y,x)} className="gameBoardCell" key={x} style={col.isAlive ? {background: "#090"}:{background: deadColor(col.history)}}/>
      )}</div>
  )

  return (
    <div>
      {board}
    </div>
  )
}

GameBoard.propTypes = {
  cells: PropTypes.array.isRequired,
  handleCellClick: PropTypes.func.isRequired
}

export default GameBoard
