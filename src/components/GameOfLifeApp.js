import React from 'react';
//import PropTypes from 'prop-types'
import OptionsContainer from '../containers/OptionsContainer'
import GameBoardContainer from '../containers/GameBoardContainer'
import '../style/GameOfLifeApp.css'

const GameOfLifeApp = () => (
  <div className="GameOfLifeApp">
    <GameBoardContainer />
    <OptionsContainer />
  </div>
)

// GameOfLifeApp.propTypes = {
//   game: PropTypes.shape({
//     cells: PropTypes.array.isRequired,
//     handleCellClick: PropTypes.func.isRequired,
//     handleResetClick: PropTypes.func.isRequired,
//     handleRunClick: PropTypes.func.isRequired,
//     currentOptions: PropTypes.object
//   })
// }

export default GameOfLifeApp;
