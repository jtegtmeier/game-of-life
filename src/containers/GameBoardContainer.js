import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCellAlive } from '../actions'
import GameBoard from '../components/GameBoard'

const GameBoardContainer = ({cells, toggleCellAlive}) => (
  <GameBoard
    cells={cells}
    handleCellClick={toggleCellAlive}/>
)

GameBoardContainer.propTypes = {
  cells: PropTypes.array.isRequired,
  toggleCellAlive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  cells: state.gameboard.cells
})

export default connect(
  mapStateToProps,
  { toggleCellAlive }
)(GameBoardContainer)
