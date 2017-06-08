import React from 'react';
import PropTypes from 'prop-types'
import {GameBoardContainer, OptionsContainer} from '../containers'
import '../style/GameOfLifeApp.css';

const GameOfLifeApp (game) => (
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
