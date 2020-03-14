import React from 'react';
import { Axes, Buttons } from 'input-gamepads.js';
import './App.scss';
import DoubleAxis from './DoubleAxis';
import Button from './Button';


function App()
{
  return (
    <div className="app">
      <section>
        <DoubleAxis axisX={Axes.LSTICK_H} axisY={Axes.LSTICK_V} />
        <DoubleAxis axisX={Axes.RSTICK_H} axisY={Axes.RSTICK_V} />
      </section>
      <section>
        {Object.entries(Buttons).slice(Object.values(Buttons).length/2).map(([name, value]) => <Button key={value} name={name} button={value} />)}
      </section>
    </div>
  );
}

export default App;
