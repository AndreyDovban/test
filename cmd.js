'use strict';

const colors = ['gray', 'red', 'blue', 'green'];

const edit = document.querySelector('.edit');
const cmdWr = document.querySelector('.cmdWr');
const cmd = document.querySelector('.cmd');
const cmdFalse = document.querySelector('.cmdFalse');

let temp = '';

edit.addEventListener('input', function (e) {
	let str = edit.innerHTML;
	// let matches = str.replace(/<div>(.*)?<\/div>/g, '<div class="key" >$1</div>');
	let matches = str.replace(/<div>(.*)?<\/div>/g, function name($1) {
		// let result = $1.replace(/<div>(.*)?<\/div>/g, "<div class='key'><span>$1</span></div>");
		let result = $1.replace(/<div>/g, '').replace(/<\/div>/g, '');
		let temp = '';
		let arr = result.split(':');

		for (let el of arr) {
			console.log(el);
			temp += `<span>${el}</span>`;
		}

		return `<div class="key">${temp}</div>`;
	});

	if (e.inputType == 'insertParagraph') {
		edit.innerHTML = matches;
		edit.focus();
		let d = document.createRange();
		d.selectNodeContents(edit);
		d.collapse(false);
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(d);
	}
});

// cmd.addEventListener('keypress', function (e) {
// 	temp += e.key;
// 	// temp = temp.trim();
// 	if (e.key == ' ') {
// 		console.log(temp);
// 		let text = document.createElement('span');
// 		text.innerText = temp;
// 		text.style.color = randomItem(colors);
// 		text.style.fontWeight = 'bold';

// 		temp = '';

// 		cmdFalse.append(text);
// 	}
// });

function parseDiv(str) {
	let s = str.split(':');
	console.log(s);
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomItem(arr) {
	return arr[randomInt(0, arr.length - 1)];
}
