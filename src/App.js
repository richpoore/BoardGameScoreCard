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
        playerScore: "95"
        // playerScores: [
        //   {
        //     score: "",
        //     phase: "no"
        //   }
        // ]
      },
      {
        id: '1',
        playerName: "Sadie",
        playerPhase: "1",
        playerScore: "0"
        // playerScores: [
        //   {
        //     score: "",
        //     phase: "no"
        //   }
        // ]
      }
    ]
  }

  phaseClickHandler = () => {
    console.log('Phase Clicked')
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
        {players.map(player => {
          console.log(player);
          return (<PlayerContainer
            fname="player.playerName"
            age={player.age}
            score={player.score}
            phaseClicked={this.phaseClickHandler}
            key={player.id}
          />)
        })}
          <PlayerContainer
          fName={this.state.scores[0].playerName}
          phase={this.state.scores[0].playerPhase}
          score={this.state.scores[0].playerScore}
          phaseClicked = {this.phaseClickHandler}
          />
          <PlayerContainer
          fName={this.state.scores[1].playerName}
          phase={this.state.scores[1].playerPhase}
          score={this.state.scores[1].playerScore}
          phaseClicked = {this.phaseClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
