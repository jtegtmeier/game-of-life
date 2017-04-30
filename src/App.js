import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameBoard/>
        <Options/>
      </div>
    );
  }
}

export default App;
