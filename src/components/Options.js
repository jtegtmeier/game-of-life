import React from 'react'
import  PropTypes from 'prop-types'

const Options = ({
  gameIsRunning,
  handleResetClick,
  handlePauseClick,
  handleRandomizeClick,
  handleRunClick,
  handleViewCellHistoryClick,
  handleBoardSizeChange
}) => (
    <div>
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handlePauseClick}>Pause</button>
      <button onClick={handleRandomizeClick}>Randomize</button>
      <button onClick={handleRunClick}>Run</button>
      <button onClick={handleViewCellHistoryClick}>View Cell History</button>
      <input type="range" disabled={gameIsRunning} onChange={handleBoardSizeChange(this.value)} step="10" min="20" max="50"/>
    </div>
  )

Options.propTypes = {
  gameIsRunning: PropTypes.bool.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handlePauseClick: PropTypes.func.isRequired,
  handleRandomizeClick: PropTypes.func.isRequired,
  handleRunClick: PropTypes.func.isRequired,
  handleViewCellHistoryClick: PropTypes.func.isRequired,
  handleBoardSizeChange: PropTypes.func.isRequired
}

export default Options
