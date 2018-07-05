import React from 'react';

const PlayerHeader = (props) => (
  <div className='playerHeader'>
    <div className='playerPhase'>
      {props.phase}
    </div>
    <div className='playerScore'>
      {props.score}
    </div>
  </div>
);

export default PlayerHeader;
