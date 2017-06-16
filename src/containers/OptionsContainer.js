import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetGame, startGame, pauseGame, generateRandomCells } from '../actions'
import Options from '../components/Options'

const OptionsContainer = ({options, cells, resetGame, startGame, pauseGame, generateRandomCells }) => {
  return(
    <Options
      currentOptions={options}
      handleResetClick={resetGame}
      handlePauseClick={pauseGame}
      handleRandomizeClick={generateRandomCells}
      handleRunClick={startGame}
    />
  )
}

OptionsContainer.propTypes = {
  options: PropTypes.object.isRequired,
  resetGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  pauseGame: PropTypes.func.isRequired,
  generateRandomCells: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  options: state.options,
  cells: state.gameboard.cells
})

export default connect(
  mapStateToProps,
  { resetGame, startGame, pauseGame, generateRandomCells }
)(OptionsContainer)
