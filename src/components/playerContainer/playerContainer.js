import React from 'react';
import PlayerTurn from './playerTurn';
import PlayerHeader from './playerHeader';
import PastTurn from './PastTurn'

const PlayerContainer = (props) => (
  <span className='playerContainer'>
    <PlayerHeader
      phase={props.phase}
      score={props.score}
      phase={props.phase}
    />
    <div className='playerName'>
      {props.fName}
    </div>
    <PlayerTurn />
    <PastTurn
      score="100"
      phase="1"
    />
  </span>
);

export default PlayerContainer;
