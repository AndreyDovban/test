// import { json2csv } from 'json-2-csv';
const but = document.querySelector('.but');
// import f from './names.json';

but.onclick = () => console.log('work');

// let t = json2csv([f]);

// console.log(t);

if (!window.indexedDB) {
	console.log('Ваш браузер не поддерживает стабильную версию IndexedDB. Такие-то функции будут недоступны');
} else {
	console.log('Всё работает!');
}
const request = indexedDB.open('library');
let db;

request.onsuccess = e => console.log(e.type);
request.onerror = e => console.log(e.type);

request.onupgradeneeded = e => {
	db = e.target.result;
	const store = db.createObjectStore('books', { keyPath: 'isbn' });
	store.createIndex('by_title', 'title', { unique: true });
	store.createIndex('by_author', 'author');

	store.put({ title: 'Quarry Memories', author: 'Fred', isbn: 123456 });
	store.put({ title: 'Water Buffaloes', author: 'Fred', isbn: 234567 });
	store.put({ title: 'Bedrock Nights', author: 'Barney', isbn: 345678 });
};
