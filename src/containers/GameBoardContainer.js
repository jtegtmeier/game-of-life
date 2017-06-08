import React from 'react'
import  PropTypes from 'prop-types'
import GameBoard from '../components'

class GameBoardContainer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <GameBoard cells={game.cells} handleCellClick={game.handleCellClick}/>
    )
  }
}

GameBoardContainer.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isAlive: PropTypes.bool.isRequired,
    timeLength: PropTypes.number
  }).isRequired).isRequired,
  handleCellClick: PropTypes.func.isRequired
}

export default GameBoardContainer
