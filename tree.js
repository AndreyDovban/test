let arr = [
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___zlobanov205'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___zlobanov205'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___zlobanov205_exxff7hzhu74irsh'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___lkudryavcev209'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___lkudryavcev209'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___lkudryavcev2_3cabm0o6yrkhh5a'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___vpopov266'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___vpopov266'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___vpopov266_2sendaaixue7ib5q48'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___lbelyaev986'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___lbelyaev986'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___lbelyaev986_qlz6zu0wlwjfxbd2'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___agorshkov203'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___agorshkov203'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___agorshkov203_5gh5pko0gcbb9ko'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___visaev948'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___visaev948'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___visaev948_5vdz1xy39lseo0hv45'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users', 'uid=___vdementev422'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=groups', 'cn=___vdementev422'],
	['dc=granulex,dc=test', 'cn=accounts', 'cn=users_history', 'cn=___vdementev422_3xzsryytfzs7dm8'],
];

let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');

let text = JSON.stringify(arr, 0, 15);
// text = text.replace(/[{}]/g, '');

out.innerHTML = text;

/** TREE */

function buildTree(objects) {
	const tree = {};

	objects.forEach(arr => {
		let currentNode = tree;

		for (let i = 0; i < arr.length; i++) {
			if (!currentNode[arr[i]]) {
				if (arr.length - 1) {
					currentNode[arr[i]] = {};
				} else {
					currentNode[arr[i]] = {};
				}
			}

			currentNode = currentNode[arr[i]];
		}
	});

	return tree;
}

/** HASH */
function buidHashList(objects) {
	const hash = {};

	objects.forEach(arr => {
		for (let i = 0; i < arr.length; i++) {
			if (hash[arr[i]]) {
				let children = hash[arr[i]];
				if (!children.includes(arr[i + 1])) {
					hash[arr[i]].push(arr[i + 1]);
				}
			} else {
				if (i != arr.length - 1) {
					hash[arr[i]] = [];
				}
			}
		}
	});

	return hash;
}

let tree = buildTree(arr);

let text2 = JSON.stringify(tree, 0, 15);

out2.innerHTML = text2;

let hash = buidHashList(arr);

let text3 = JSON.stringify(hash, 0, 15);

out3.innerHTML = text3;
