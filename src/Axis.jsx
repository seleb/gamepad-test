import React from 'react';
import { useAxis } from './useGamepad';

export function Button({
	name,
	axis,
}) {
	const v = useAxis(axis);
	return (
		<label className="axis">{name}: <input type="range" readOnly value={v} min={-1} max={1} step={0.01} /></label>
	);
}

export default Button;
