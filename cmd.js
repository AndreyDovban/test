'use strict';

const modeButtons = document.querySelectorAll('.mode');
const cmd = document.querySelector('.cmd');

let modeClass = '';
let selRange = null;

[...modeButtons].forEach(b => {
	b.addEventListener('click', e => {
		e.target.classList.toggle('active');
		modeClass = [...modeButtons]
			.map(b => (b.classList.contains('active') ? b.getAttribute('data-font') : ''))
			.join(' ');
		if (selRange) {
			if (selRange.commonAncestorContainer == cmd) {
				let spans = [...cmd.getElementsByTagName('span')];
				let start = spans.indexOf(selRange.startContainer.parentElement);
				let end = spans.indexOf(selRange.endContainer.parentElement);
				for (let i = start; i <= end; i++) {
					if (b.classList.contains('active')) {
						spans[i].classList.add(b.getAttribute('data-font'));
					} else {
						spans[i].classList.remove(b.getAttribute('data-font'));
					}
				}
			}
		}

		// console.log(modeClass);
		// console.log(selRange);
	});
});

cmd.onkeypress = e => {
	if (e.key != 'Enter') {
		e.preventDefault();
		let span = document.createElement('span');
		span.textContent = e.key;
		span.className = modeClass;
		e.target.append(span);

		let sel = window.getSelection();
		sel.collapse(span, 1);
	} else {
		// e.preventDefault();
		let span = document.createElement('span');
		let br = document.createElement('br');
		span.append(br);
		span.className = modeClass;
		e.target.append(span);

		let sel = window.getSelection();
		sel.collapse(span, 1);
		sel.collapseToEnd();
		sel.toString();
	}
};

cmd.onmouseup = () => {
	let sel = window.getSelection();
	if (sel.type == 'Range') {
		selRange = sel.getRangeAt(0);
		[...modeButtons].forEach(b => {
			b.classList.remove('active');
		});
		modeClass = '';
	} else {
		selRange = null;
	}
};
