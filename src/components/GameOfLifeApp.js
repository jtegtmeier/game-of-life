import React from 'react';
import PropTypes from 'prop-types'
import {GameBoard, Options} from './Containers'
import '../style/GameOfLifeApp.css';

const GameOfLifeApp () => (
  <div className="GameOfLifeApp">
    <GameBoard/>
    <Options/>
  </div>
)

export default GameOfLifeApp;
