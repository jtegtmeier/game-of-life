import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './GameOfLifeApp';
import {getBlankCells} from './utils'
import './style/index.css';

const initialState = {
  cells: getBlankCells(),
  options: {
    running: true,
    viewHistory: true,
    gameSpeed: 1
  }
}

const appStore = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={appStore}>
    <GameOfLifeApp />
  </Provider>,
  document.getElementById('root')
);
