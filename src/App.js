import React, { Component } from 'react';
import './App.css';
import GameTitle from './components/gameTitle';
import PlayerContainer from './components/playerContainer/playerContainer'

class App extends Component {
  state = {
    scores: [
      {
        id: '0',
        playerName: "Hannah",
        playerPhase: "0",
        playerScore: "95",
        playerScores: [
          {
            score: "",
            phase: "no"
          }
        ]
      },
      {
        id: '1',
        playerName: "Sadie",
        playerPhase: "1",
        playerScore: "0",
        playerScores: [
          {
            score: "",
            phase: "no"
          }
        ]
      }
    ]
  }

  phaseClickHandler = (index) => {
    console.log('Phase Clicked' + index);
    const players = [...this.state.scores];
    players[index].playerPhase ++;
    this.setState( { scores: players } );
  }

  render() {
    const players=this.state.scores;
    console.log(players);
    return (
      <div className="App">
        <header className='App-header flex-container'>
          <GameTitle title="Phase 10" />
        </header>
        <div className="playerSection">
        {players.map((player, index) => {
          console.log(player);
          return (<PlayerContainer
            fName={player.playerName}
            phase={player.playerPhase}
            score={player.playerScore}
            phaseClicked={() => this.phaseClickHandler(index)}
            key={player.id}
          />)
        })}
        </div>
      </div>
    );
  }
}

export default App;
