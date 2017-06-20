import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCellAlive } from '../actions'
import GameBoard from '../components/GameBoard'

const GameBoardContainer = ({cells, toggleCellAlive, showHistory}) => (
  <GameBoard
    cells={cells}
    showHistory={showHistory}
    handleCellClick={toggleCellAlive}/>
)

GameBoardContainer.propTypes = {
  cells: PropTypes.array.isRequired,
  showHistory: PropTypes.bool.isRequired,
  toggleCellAlive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  cells: state.gameboard.cells,
  showHistory: state.options.showHistory
})

export default connect(
  mapStateToProps,
  { toggleCellAlive }
)(GameBoardContainer)
