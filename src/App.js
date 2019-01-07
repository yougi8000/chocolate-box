import React, { Component } from 'react';

import './App.css';

import ChocolatesList from './components/ChocolatesList';
import ChocolateBox from './containers/ChocolateBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChocolatesList />
        <ChocolateBox />
      </div>
    );
  }
}

export default App;
