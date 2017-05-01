import { combineReducers } from 'redux'
import gameboard from './gameboard'
import options from './options'

const appReducer = combineReducers({
  gameboard,
  options
})

export default appReducer
