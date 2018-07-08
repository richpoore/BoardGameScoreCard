import React from 'react';

const PlayerTurn = (props) => (
  <div className='playerTurn'>
    <div className='scoreInputDiv'>
      <input
        type='number'
        className='scoreInput'
        placeholder='Score'
        step='5'
      />
    </div>
    <div className='phaseCheckDiv'>
      <div>Phase&nbsp;1</div>
      <input
        type='checkbox'
        className='phaseCheck'
        onClick={props.phaseClicked}
      />
    </div>
  </div>
);

export default PlayerTurn;
