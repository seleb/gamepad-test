import React from 'react';
import { useButton } from './useGamepad';

export function Button({
	button,
}) {
	const isDown = useButton(button);
	return <div className={`button ${isDown ? 'down' : ''}`}>button {button} {isDown ? 'down' : 'up'}</div>;
}

export default Button;
