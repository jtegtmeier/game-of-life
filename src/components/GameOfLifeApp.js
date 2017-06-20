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
        <h1 style={{color: "white"}}>Game of Life - React/Redux</h1>
        <OptionsContainer />
        <GameBoardContainer />
      </div>
    )
  }
}

export default connect((state)=>state, { generateRandomCells, startGame })(GameOfLifeApp)
