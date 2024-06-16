let down = document.querySelector('.down');
let up = document.querySelector('.up');
let diapazon = document.querySelector('.diapazon');

let min = document.querySelector('.min');
let minv = document.querySelector('.minv');
let maxv = document.querySelector('.maxv');
let max = document.querySelector('.max');

min.innerText = down.min;
minv.innerText = down.value;
maxv.innerText = up.value;
max.innerText = down.max;

let p = (up.max - down.min) / 100;

diapazon.style.marginLeft = (+down.value - +down.min) / p + 2 + '%';
diapazon.style.width = (maxv.innerText - minv.innerText) / p - 2 + '%';

down.oninput = () => {
	minv.innerText = +down.value;
	if (+down.value >= +up.value) {
		up.value = +down.value;
		maxv.innerText = +down.value;
		diapazon.style.width = 0;
	} else {
		diapazon.style.width = (+up.value - +down.value) / p - 2 + '%';
	}
	diapazon.style.marginLeft = (+down.value - +down.min) / p + 2 + '%';
};

up.oninput = () => {
	maxv.innerText = +up.value;
	if (+up.value <= +down.value) {
		down.value = +up.value;
		minv.innerText = +up.value;
		diapazon.style.width = 0;
	} else {
		diapazon.style.width = (+up.value - +down.value) / p - 2 + '%';
	}
	diapazon.style.marginLeft = (+down.value - +down.min) / p + 2 + '%';
};
