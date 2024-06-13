let but = document.querySelector('#but');
let int;

but.onclick = () => {
	if (!int) {
		console.log('start');
		int = setInterval(() => {
			if (!f) {
				f = true;
				console.log('fetch');
				fetch(url).then(v => {
					console.log(v);
					f = false;
				});
			} else {
				console.log('skip');
			}
		}, 1000);
	} else {
		console.log('stop');
		clearInterval(int);
		int = null;
	}
};

let url = 'https://jsonplaceholder.typicode.com/posts';
let f = false;
