import { connect } from 'react-redux'
import { toggleCellAlive } from '../actions'
import GameBoard from '../components/GameBoard'

const mapStateToProps = (state) => ({
  cells: state.gameboard.cells,
  showHistory: state.options.showHistory
})

const mapDispatchToProps = (dispatch) => ({
  handleCellClick: (row,col) => dispatch(toggleCellAlive(row,col))
})

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)

export default GameBoardContainer
