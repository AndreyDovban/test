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

let pers = (up.max - down.min) / 100;

diapazon.style.marginLeft = +down.value + 1 + '%';
diapazon.style.width = maxv.innerText - minv.innerText + '%';

down.oninput = e => {
	let t = e.target;
	minv.innerText = +t.value;
	if (+t.value >= +up.value) {
		up.value = +t.value;
		maxv.innerText = +t.value;
	}
	diapazon.style.marginLeft = +t.value + 1 + '%';
	diapazon.style.width = maxv.innerText - minv.innerText + '%';
};

up.oninput = e => {
	let t = e.target;
	maxv.innerText = +t.value;
	if (+t.value <= +down.value) {
		down.value = +t.value;
		minv.innerText = +t.value;
	}
	diapazon.style.marginLeft = +down.value + 1 + '%';
	diapazon.style.width = maxv.innerText - minv.innerText + '%';
};
