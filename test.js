import data from './data.json';

let out = document.querySelector('.pre');

function buildTree(objects) {
	const tree = {};

	objects.forEach(obj => {
		let arr = obj.obj_name.split(',');

		let dc = '';

		arr = arr.filter(el => {
			if (/dc=/.test(el)) {
				dc += `${el} `;
				return false;
			} else {
				return true;
			}
		});
		arr.push(dc);

		let currentNode = tree;

		for (let i = arr.length - 1; i >= 0; i--) {
			if (!currentNode[arr[i]]) {
				if (i === 0) {
					currentNode[arr[i]] = { obj_name: obj.obj_name, change: obj.change_type };
				} else {
					currentNode[arr[i]] = {};
				}
			}

			currentNode = currentNode[arr[i]];
		}
	});

	return tree;
}

let text = JSON.stringify(buildTree(data), 0, 15);
// text = text.replace(/[{}]/g, '');

out.innerHTML = text;
