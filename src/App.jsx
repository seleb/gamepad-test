import { Axes, Buttons } from 'input-gamepads.js';
import React from 'react';
import './App.scss';
import Axis from './Axis';
import Button from './Button';
import { Controller } from './Controller';
import DoubleAxis from './DoubleAxis';


function App()
{
  return (
    <div className="app">
      <section className="section-double-axis">
        <DoubleAxis axisX={Axes.LSTICK_H} axisY={Axes.LSTICK_V} />
        <DoubleAxis axisX={Axes.RSTICK_H} axisY={Axes.RSTICK_V} />
      </section>
      <section className="section-axis">
        {Object.entries(Axes).slice(Object.values(Axes).length/2).map(([name, value]) => <Axis key={value} name={name} axis={value} />)}
      </section>
      <section className="section-button">
        {Object.entries(Buttons).slice(Object.values(Buttons).length/2).map(([name, value]) => <Button key={value} name={name} button={value} />)}
      </section>
      <Controller />
    </div>
  );
}

export default App;
