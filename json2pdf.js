import data from './data.json';

console.log(data);

function json2pdf(arr) {
	let result = '';
	for (let el of Object.keys(arr[0])) {
		result += '"' + el + '";';
	}
	result += '\n';
	for (let obj of arr) {
		for (let key in obj) {
			result += '"' + obj[key] + '";';
		}
		result += '\n';
	}
	return result;
}
console.log(json2pdf(data));

let t = new File([json2pdf(data)], `exmple.csv`);

let link = document.createElement('a');
link.download = t.name;

link.href = URL.createObjectURL(t);
link.click();
URL.revokeObjectURL(link.href);
