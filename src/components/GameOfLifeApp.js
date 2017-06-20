import React, {Component} from 'react';
import OptionsContainer from '../containers/Options'
import {generateRandomCells, startGame} from '../actions'
import GameBoardContainer from '../containers/GameBoardContainer'
import { connect } from 'react-redux'
import '../style/GameOfLifeApp.css'

class GameOfLifeApp extends Component{
  componentDidMount() {
    this.props.generateRandomCells()
    this.props.startGame()
  }

  render(){
    return(
      <div className="GameOfLifeApp">
        <OptionsContainer />
        <GameBoardContainer />
      </div>
    )
  }
}

export default connect((state)=>state, { generateRandomCells, startGame })(GameOfLifeApp)
