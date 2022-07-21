import { Axes, Buttons } from 'input-gamepads.js';
import { useAxis, useButton } from "./useGamepad";

export function Controller()
{
	const lStickH = useAxis(Axes.LSTICK_H);
	const lStickV = useAxis(Axes.LSTICK_V);
	const rStickH = useAxis(Axes.RSTICK_H);
	const rStickV = useAxis(Axes.RSTICK_V);
	const btnA = useButton(Buttons.A);
	const btnB = useButton(Buttons.B);
	const btnX = useButton(Buttons.X);
	const btnY = useButton(Buttons.Y);
	const btnSTART = useButton(Buttons.START);
	const btnBACK = useButton(Buttons.BACK);
	const btnDPAD_DOWN = useButton(Buttons.DPAD_DOWN);
	const btnDPAD_UP = useButton(Buttons.DPAD_UP);
	const btnDPAD_RIGHT = useButton(Buttons.DPAD_RIGHT);
	const btnDPAD_LEFT = useButton(Buttons.DPAD_LEFT);
	const btnRB = useButton(Buttons.RB);
	const btnRT = useButton(Buttons.RT);
	const btnLB = useButton(Buttons.LB);
	const btnLT = useButton(Buttons.LT);
	const btnLHAT = useButton(Buttons.LHAT);
	const btnRHAT = useButton(Buttons.RHAT);
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744.1 500.4">
		{/* BASE */}
		<path fill="#000" d="M190 128.3c-30-.2-72.6 17-89.4 23.6-4.8 2-17.4 18.9-25.2 35.3-3.5 7.4-29.3 82.2-29.3 82.2s-12.1 57.8-10 92c2.2 34.4 22.9 65.8 22.9 65.8s17.5 17.1 27 20.7c11.3 4.3 31.8 6.9 43 5 25.8-4.3 98.4-41.3 103.4-43.4a97 97 0 0 1 14.7-5.3c3.5 3.3 30.1 5.6 43.7 1.3a76 76 0 0 0 27.2-13.2c11.8-.7 33-.6 52.4-.5 19.4-.1 40.5-.2 52.3.5 6.3 5.3 13.6 9 27.1 13.2 13.6 4.3 40.2 2 43.7-1.3a96 96 0 0 1 14.6 5.3c5 2.1 77.4 39 103.2 43.4a103 103 0 0 0 43-5c9.4-3.6 26.9-20.7 26.9-20.7s20.7-31.4 22.8-65.7c2.1-34.3-10-92.1-10-92.1s-25.7-74.8-29.2-82.1c-7.8-16.5-21-35-25.8-36.8-12.3-5-36.2-16.7-63.1-20.8a119 119 0 0 0-50.8 1.7c-9.5 3.1-18 11.2-24.3 14.8-7.3 4.2-37.5 22.4-54.6 26.7a396 396 0 0 1-75.5 3.3s-58.9.7-76-3.6c-17.2-4.3-40-19.8-47.4-24-6.4-3.6-10.9-7.5-25-14.1-10.9-6.4-22.6-6.2-32.4-6.2z"></path>
		<path fill="#000" d="M190.3 73.4c-12.8.3-24.8 2.7-28.9 3.8a25.2 25.2 0 0 0-10.3 5.6l-32 30-5.6 5.8c-6.5 8.1-8 8.2-9 10.2s-4.3 5.5-6 7.9c-1 1.5-3.7 6.4-5.2 7.7a1150 1150 0 0 0-21.5 52s23-24.4 38-30.8a185.6 185.6 0 0 1 105.3-13c27.2 5.2 46.1 32.4 72.7 40 26 7.4 54 4.3 81.2 4.1 29.6-.2 60 2.4 88.6-5.6 26.5-7.4 46.1-33.4 73.2-38.6 36-6.8 76.6-4.9 109 11.9 12.8 6.6 28.6 32.1 28.6 32.1s-20-50.8-21.4-52c-1.2-2-4-5.7-4.6-7.5-.5-1.8-7-7.2-8-9.2-1-2-1-.3-7.6-8.2l-5.6-6.7-32-30s-3.7-3.9-10.3-5.6c-6.6-1.8-33.2-6.7-50.9-1.3-13.7 4.2-15.6 6.8-15.6 6.8s-7.6 9.4-13.1 11.2c-5.6 1.7-30.5 18.4-48.1 20.1-17.7 1.8-34.8 4.6-40.9 3-6-1.4-39.9-1-39.9-1s-34-.5-40 1-23.2-1.3-40.9-3c-17.7-1.8-42.7-18.5-48.3-20.2-5.5-1.8-13-11.1-13-11.1s-2-3.1-15.7-6.8a80.6 80.6 0 0 0-22.2-2.6z"></path>

		{/* DPAD BASE */}
		<path fill="#000" stroke="#FFF" d="M343.8 343.6c0 33.6-33.3 60.9-74.4 60.9-41 0-74.4-27.3-74.4-60.9 0-33.6 33.3-60.8 74.4-60.8 41 0 74.4 27.2 74.4 60.8z"></path>
		<path fill="#000" stroke="#FFF" d="M324 622c0 19.8-20.5 35.9-45.7 35.9-25.2 0-45.6-16-45.6-35.9 0-19.8 20.4-35.9 45.6-35.9 25.2 0 45.6 16 45.6 36z" transform="matrix(1.1728 0 0 1.16235 -59 -367.3)"></path>
		{/* DPAD */}
		<path fill="#000" stroke="#FFF" d="m267.4 317 10.2.5s3.1 1.2 3.7 4.2c.4 2.2 2.8 13.6 3.5 14.2.7.6 4 6.3 7 6.7 2.8.4 22.4 3.2 23.6 4.3 1.2 1 3 5.8 3 5.8l.3 11.8s-.7 3.6-1.8 4.2c-1.1.6-21.3 2.6-21.3 2.6s-6 1.4-7.1 5c-1.1 3.5-3.3 18-4.3 19s-2.3 3-5.1 3.5c-2.8.3-16.5.6-16.5.6s-5.1-1.1-6.4-2.8c-1.2-1.7-4.2-16.8-4.2-16.8s-2-5.4-8-7c-6.1-1.5-17.5-.2-21-1.8-3.3-1.5-5.6-4.5-5.9-7-.2-2.6-1.3-11.4-.8-12.2.5-.7 2.8-5 4.1-5.2a128 128 0 0 0 21.7-3.7c2.1-1.6 6.7-5.3 7-7.7.2-2.4 1.3-16.1 2.2-16.1.8-.7 1.4-1 2-1.2 1-.6 3.7-.7 7-.8l7-.1z" transform={`translate(${(btnDPAD_LEFT ? -1 : 0 + btnDPAD_RIGHT ? 1 : 0) * 10}, ${(btnDPAD_UP ? -1 : 0 + btnDPAD_DOWN ? 1 : 0) * 10})`}></path>

		{/* LT */}
		<path fill={btnLT ? "#FFF" : '#000'} stroke={btnLT ? "#000" : '#FFF'} d="M157.7 112.6s6.4-39.5 6.6-42.2A390 390 0 0 1 167 49c.5-2.3 6.8-7.7 9.1-7.7h19.5s12 2 12.3 10.4l.5 17.3-3.2 41z"></path>

		{/* LB */}
		<path fill={btnLB ? "#FFF" : '#000'} stroke={btnLB ? "#000" : '#FFF'} d="m99.9 144.5 1-10.5s-.7-9.6 13.6-15.7c14.3-6 26.4-13.8 43-17.2a154.5 154.5 0 0 1 56.8-2.5c1.4.6 3.6 7 5.4 7.4 1.8.3 6.2 1.6 6.2 1.6l.6 12.6-4.1 14.2s-12.9-9-46.7-4.3c-33.7 4.6-44.2 9.8-44.2 9.8s-30.2 11.8-31.3 10.9c-1-1-.3-6.3-.3-6.3z"></path>

		{/* RT */}
		<path fill={btnRT ? "#FFF" : '#000'} stroke={btnRT ? "#000" : '#FFF'} d="M586.2 112.1s-6.4-39.4-6.6-42.1a446 446 0 0 0-2.7-21.4c-.5-2.4-6.8-7.7-9-7.7h-19.5s-12 2-12.3 10.3c-.4 8.4-.5 17.4-.5 17.4l3.2 41z"></path>

		{/* RB */}
		<path fill={btnRB ? "#FFF" : '#000'} stroke={btnRB ? "#000" : '#FFF'} d="m640.4 144.6-1-10.5s.6-9.7-13.6-15.8c-14.3-6-26.4-13.7-43-17.1a154 154 0 0 0-56.7-2.5c-1.4.5-3.5 7-5.3 7.3l-6.2 1.6-.6 12.7 4.1 14.1s12.9-9 46.5-4.3c33.7 4.7 44.2 9.8 44.2 9.8s30.2 11.8 31.2 11c1.1-1 .4-6.3.4-6.3z"></path>

		{/* X */}
		<path fill={btnX ? "#FFF" : '#000'} stroke={btnX ? "#000" : '#FFF'} d="M555.7 521.6c0 9.7-8.5 17.5-19 17.5-10.4 0-18.8-7.8-18.8-17.5 0-9.6 8.4-17.5 18.9-17.5 10.4 0 19 7.9 19 17.5z" transform="matrix(1.26514 0 0 1.19516 -158 -376.4)"></path>

		{/* A */}
		<path fill={btnA ? "#FFF" : '#000'} stroke={btnA ? "#000" : '#FFF'} d="M608.4 565.5c0 8.3-8.3 15-18.5 15s-18.5-6.7-18.5-15 8.3-15.1 18.5-15.1 18.5 6.8 18.5 15z" transform="matrix(1.34918 -.20807 .2009 1.30268 -337 -324.6)"></path>

		{/* Y */}
		<path fill={btnY ? "#FFF" : '#000'} stroke={btnY ? "#000" : '#FFF'} d="M619.6 473.3c0 10.4-9.8 18.9-22 18.9s-22-8.5-22-18.9c0-10.4 9.8-18.8 22-18.8s22 8.4 22 18.8z" transform="matrix(1.14763 -.28802 .28769 1.1463 -243.5 -170.5)"></path>

		{/* B */}
		<path fill={btnB ? "#FFF" : '#000'} stroke={btnB ? "#000" : '#FFF'} d="M685 538.6c0 9.4-9 17-20 17s-20-7.6-20-17 9-17 20-17 20 7.6 20 17z" transform="matrix(1.17279 -.491 .4397 1.13485 -385.9 -41.8)"></path>

		{/* START/BACK */}
		<path fill={btnSTART ? "#FFF" : '#000'} stroke={btnSTART ? "#000" : '#FFF'} d="M296.7 236.7H291c-1.2.1-11.3 1.2-11.7 12-.4 10.8 12 13 12 13l5.5.1h5.7s12.7-1.7 12.8-12.6c.2-11-13-12.5-13-12.5zm148.8.5h-5.9c-1.1.1-11.3 1.3-11.7 12-.3 10.9 12 13 12 13l5.5.1h5.8s12.6-1.7 12.8-12.6c.2-11-13-12.4-13-12.4z"></path>
		<path fill={btnBACK ? "#FFF" : '#000'} stroke={btnBACK ? "#000" : '#FFF'} d="M296.7 236.7H291c-1.2.1-11.3 1.2-11.7 12-.4 10.8 12 13 12 13l5.5.1h5.7s12.7-1.7 12.8-12.6c.2-11-13-12.5-13-12.5z"></path>

		{/* CENTER */}
		{/* <path fill="#000" stroke="#FFF" d="M415 517.7c0 12.8-13.7 23.2-30.7 23.2s-30.8-10.4-30.8-23.2c0-12.9 13.8-23.3 30.8-23.3s30.8 10.4 30.8 23.3z" transform="matrix(1.336 0 0 1.43872 -142.3 -497.7)"></path> */}

		{/* RSTICK BASE */}
		<path fill="#000" stroke="#FFF" d="M516.2 646.3c0 18.3-17.6 33-39.3 33-21.7 0-39.3-14.7-39.3-33s17.6-33.1 39.3-33.1c21.7 0 39.3 14.8 39.3 33z" transform="matrix(1.09908 0 0 1.09064 -58.2 -352.3)"></path>
		{/* RSTICK */}
		<path fill={btnRHAT ? "#FFF" : '#000'} stroke={btnRHAT ? "#000" : '#FFF'} d="M519.3 638.3c0 18-18.5 32.6-41.3 32.6-22.7 0-41.2-14.6-41.2-32.6s18.5-32.5 41.2-32.5c22.8 0 41.3 14.5 41.3 32.5z" transform={`matrix(1.0685 0 0 1.13312 -44.1 -353.2) translate(${rStickH * 20}, ${rStickV * 20})`}></path>

		{/* LSTICK BASE */}
		<path fill="#000" stroke="#FFF" d="M516.2 646.3c0 18.3-17.6 33-39.3 33-21.7 0-39.3-14.7-39.3-33s17.6-33.1 39.3-33.1c21.7 0 39.3 14.8 39.3 33z" transform="matrix(1.09908 0 0 1.09064 -357.5 -449.4)"></path>
		{/* LSTICK */}
		<path fill={btnLHAT ? "#FFF" : '#000'} stroke={btnLHAT ? "#000" : '#FFF'} d="M207.1 553.6c0 15-16.7 27.2-37.5 27.2-20.7 0-37.5-12.2-37.5-27.2s16.8-27.1 37.5-27.1c20.8 0 37.5 12.1 37.5 27.1z" transform={`matrix(1.21465 0 0 1.44197 -43.2 -530) translate(${lStickH * 20}, ${lStickV * 20})`}></path>
	</svg>
}
