import React from 'react';
import { useButton } from './useGamepad';

export function Button({
	name,
	button,
}) {
	const isDown = useButton(button);
	return <div className={`button ${isDown ? 'down' : ''}`}>button {name} {isDown ? 'down' : 'up'}</div>;
}

export default Button;
