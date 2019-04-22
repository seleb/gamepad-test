import React from 'react';
import { useAxis } from './useGamepad';

export function DoubleAxis({
	axisX,
	axisY,
}) {
	const x = useAxis(axisX);
	const y = useAxis(axisY);
	return (
		<div className="axis">
		<label>x (axis {axisX}): <input type="number" readOnly value={x} /></label>
		<label>y (axis {axisY}): <input type="number" readOnly value={y} /></label>
		<div className="axis-square">
			<div className="axis-point" style={{ top: `${(y/2+0.5)*100}%`, left: `${(x/2+0.5)*100}%`}} />
		</div>
		</div>
	);
}

export default DoubleAxis;
