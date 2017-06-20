import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetGame, startGame, pauseGame, generateRandomCells, toggleCellHistory, setBoardSize } from '../actions'

const Options = ({
  resetGame,
  startGame,
  pauseGame,
  generateRandomCells,
  toggleCellHistory,
  boardSize,
  setBoardSize
}) => (
  <div className="Options">
    <div>
      <button onClick={startGame}><i className="fa fa-play fa-2x" /></button>
      <button onClick={pauseGame}><i className="fa fa-pause fa-2x" /></button>
      <button onClick={resetGame}><i className="fa fa-trash fa-2x" /></button>
    </div>
    <div className="boardOptions">
      <label style={{color: "white"}}>Board Size: {boardSize}</label>
      <input type="range" onChange={e => {setBoardSize(e.target.value)}} value={boardSize} step="10" min="20" max="50"/>
      <button onClick={generateRandomCells}>Randomize</button>
      <button onClick={toggleCellHistory}>Toggle Cell History</button>
    </div>
  </div>
)

Options.propTypes = {
  resetGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  pauseGame: PropTypes.func.isRequired,
  generateRandomCells: PropTypes.func.isRequired,
  toggleCellHistory: PropTypes.func.isRequired,
  setBoardSize: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  boardSize: state.options.boardSize,
})

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => {dispatch(resetGame())},
  startGame: () => {dispatch(startGame())},
  pauseGame: () => {dispatch(pauseGame())},
  generateRandomCells: () => {dispatch(generateRandomCells())},
  toggleCellHistory: () => {dispatch(toggleCellHistory())},
  setBoardSize: (size) => {
    dispatch(pauseGame())
    dispatch(setBoardSize(size))
    dispatch(resetGame())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options)
