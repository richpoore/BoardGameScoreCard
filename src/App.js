import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameTitle from './components/gameTitle';
import PlayerContainer from './components/playerContainer/playerContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header" className='flex-container'>
          <GameTitle title="Phase 10" />
        </header>
        <div className="playerSection">
          <PlayerContainer
            fName="Hannah"
            phase="1"
            score="235"
          />
          <PlayerContainer
            fName="Sadie"
            phase="2"
            score="175"
          />
        </div>
      </div>
    );
  }
}

export default App;
