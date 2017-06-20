import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

const GameBoard = ({cells, handleCellClick}) => {
  return (
    <div>
      {cells.map((row, y) => <div className="row" key={y}>
        {row.map((col, x) => <Cell
          key={x}
          row={y}
          col={x} 
          isAlive={col.isAlive}
          history={col.history}
          handleCellClick={handleCellClick}/>)}
      </div>)}
    </div>
  )
}

GameBoard.propTypes = {
  cells: PropTypes.array.isRequired,
  handleCellClick: PropTypes.func.isRequired
}

export default GameBoard
