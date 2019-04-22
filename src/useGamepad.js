import { useState, useEffect } from 'react';
import gamepads from 'input-gamepads.js';

gamepads.init();

function loop() {
	gamepads.update();
	requestAnimationFrame(loop);
}
loop();

export function useRaf(fn) {
	useEffect(() => {
		let raf;
		function loopfn() {
			fn();
			raf = requestAnimationFrame(loopfn);
		}
		loopfn();
		return () => cancelAnimationFrame(raf);
	}, [fn]);
}

export function useGamepad() {
	useEffect(() => {
		gamepads.init();
	}, []);
}

export function useAxis(axis) {
	const [v, set] = useState(0);
	useRaf(() => {
		const val = gamepads.getAxis(axis);
		set(val);
	});
	return v;
}

export function useButton(btn) {
	const [v, set] = useState(false);
	useRaf(() => {
		const val = gamepads.isDown(btn);
		set(val);
	});
	return v;
}
