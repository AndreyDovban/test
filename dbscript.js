const but = document.querySelector('.but');
const pre = document.querySelector('.pre');

if (!window.indexedDB) {
	console.log('Ваш браузер не поддерживает стабильную версию IndexedDB');
} else {
	console.log('Всё работает!');
}
const request = indexedDB.open('library');

request.onerror = e => console.log(e.type);

request.onupgradeneeded = e => {
	const db = e.target.result;

	const store = db.createObjectStore('books', { keyPath: 'isbn' });
	store.createIndex('by_author', 'author');
	store.createIndex('by_title', 'title', { unique: true });

	store.put({ title: 'Quarry Memories', author: 'Fred', isbn: 123456 });
	store.put({ title: 'Water Buffaloes', author: 'Fred', isbn: 234567 });
	store.put({ title: 'Bedrock Nights', author: 'Barney', isbn: 345678 });
};

request.onsuccess = e => {
	console.log(e.type);

	const db = e.target.result;
	const trans = db.transaction('books', 'readwrite');

	// const store = trans.objectStore('books');
	// const authorIndex = store.index('by_author');
	// const titleIndex = store.index('by_title');

	// let search = store.getAll();
	// search.onsuccess = e => {
	// 	console.log(e.target.result);
	// 	pre.innerHTML = JSON.stringify(e.target.result, null, 4);
	// };
	trans.oncomplete = () => {
		db.close();
		console.log('close');
	};
};

function func() {
	console.log('connect');
	const connect = indexedDB.open('library');

	connect.onerror = e => console.log(e.type);

	connect.onsuccess = e => {
		console.log(e.type);

		const db = e.target.result;
		const trans = db.transaction('books', 'readwrite');

		const store = trans.objectStore('books');
		// const authorIndex = store.index('by_author');
		// const titleIndex = store.index('by_title');

		let search = store.getAll();
		search.onsuccess = e => {
			console.log(e.target.result);
			pre.innerHTML = JSON.stringify(e.target.result, null, 4);
		};
		trans.oncomplete = () => {
			db.close();
			console.log('close');
		};
	};
}

but.onclick = func;
