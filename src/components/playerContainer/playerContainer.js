import React from 'react';
import PlayerTurn from './playerTurn';
import PlayerHeader from './playerHeader';
import PastTurn from './pastTurn'

const PlayerContainer = (props) => (
  <span className='playerContainer'>
    <PlayerHeader
      score={props.score}
      phase={props.phase}
    />
    <div className='playerName'>
      {props.fName}
    </div>
    <PlayerTurn
      phaseClicked = {props.phaseClicked}
    />

  </span>
);

export default PlayerContainer;
