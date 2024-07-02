const but = document.querySelector('.but');

function func() {
	console.log('click');
	worker.postMessage({ cmd: 'average', data: [1, 2, 3, 4] });
}

var worker = new Worker('doWork.js');

worker.addEventListener(
	'message',
	function (e) {
		console.log('!!', e.data);
	},
	false,
);

but.onclick = func;
