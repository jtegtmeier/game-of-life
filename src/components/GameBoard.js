import React from 'react'
import  PropTypes from 'prop-types'

const GameBoard = (props) => {
  return (
    <div />
  )
}

GameBoard.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isAlive: PropTypes.bool.isRequired,
    timeLength: PropTypes.number
  }).isRequired).isRequired,
  handleCellClick: PropTypes.func.isRequired
}

export default GameBoard
