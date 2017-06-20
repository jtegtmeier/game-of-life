import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { gameMiddleware } from './middleware'
import GameOfLifeApp from './components/GameOfLifeApp'
import './style/index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const appStore = createStore(reducer, applyMiddleware(gameMiddleware))

ReactDOM.render(
  <Provider store={appStore}>
    <GameOfLifeApp />
  </Provider>,
  document.getElementById('root')
)
