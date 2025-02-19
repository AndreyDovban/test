'use strict';

const colors = ['gray', 'black'];
const paths = [
	'M55.5002 1.5V1H55.0002H1.50017H1.00017L1.00017 1.5L1 34.5L0.999997 35H1.5H45.0002H45.5002V34.5V26H55.0002H55.5002V25.5V1.5Z',
	'M24.5 57.5V0.5H1V57.5H24.5Z',
];

const wrap = document.querySelector('.wrap');

for (let i of new Array(3)) {
	const block = document.createElement('div');

	block.classList.add('elem');
	block.setAttribute('title', 'Example');
	block.innerHTML = `<svg fill=${randomItem(colors)} version="1.1" ><path d="${randomItem(paths)}" /></svg>`;
	block.style.top = randomInt(0, 420) + 'px';
	block.style.left = randomInt(0, 930) + 'px';

	wrap.append(block);
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(arr) {
	return arr[randomInt(0, arr.length - 1)];
}
