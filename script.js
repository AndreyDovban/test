let but = document.querySelector('#but');
let int;

but.onclick = () => {
	if (!int) {
		console.log('start');
		int = setInterval(async () => {
			if (!f) {
				f = true;
				console.log('fetch');
				try {
					let v = await fetch(url);
					if (v.status == 200) {
						console.log(v);
						f = false;
					} else {
						clearInterval(int);
						int = null;
						console.log('error ', v.status);
					}
				} catch (error) {
					clearInterval(int);
					int = null;
					console.log(error.message);
				}
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
