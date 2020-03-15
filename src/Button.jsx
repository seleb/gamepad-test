import React from 'react';
import { useButton } from './useGamepad';

export function Button({
	name,
	button,
}) {
	const isDown = useButton(button);
	return <label className="button">{name}: <input type="checkbox" readonly checked={isDown} /></label>;
}

export default Button;
