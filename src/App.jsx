import React from 'react';
import gamepads from 'input-gamepads.js';
import './App.scss';
import DoubleAxis from './DoubleAxis';
import Button from './Button';


function App() {
  return (
    <div className="app">
      <section>
        <DoubleAxis axisX={gamepads.LSTICK_H} axisY={gamepads.LSTICK_V} />
        <DoubleAxis axisX={gamepads.RSTICK_H} axisY={gamepads.RSTICK_V} />
      </section>
      <section>
        {new Array(16).fill(0).map((_, idx) => <Button key={idx} button={idx} />)}
      </section>
    </div>
  );
}

export default App;
