import React from 'react';

import MovementSelection from '../MovementSelection/MovementSelection'

const App = () => {
  return (
    <div className="App">
      SFIT
      <MovementSelection movement="Squat"/>
      <MovementSelection movement="Bench"/>
      <MovementSelection movement="Deadlift"/>
    </div>
  );
}

export default App;
