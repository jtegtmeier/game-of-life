import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './GameOfLifeApp';
import './style/index.css';

const appStore = createStore(reducer)

ReactDOM.render(
  <Provider store={appStore}>
    <GameOfLifeApp />
  </Provider>,
  document.getElementById('root')
);
