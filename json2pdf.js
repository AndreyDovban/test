import data from './data.json';

function json2pdf(arr) {
	let result = '\uFEFF';
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

let t = new File([json2pdf(data)], `exmple.csv`, {
	// type: 'text/csv; charset=utf-8',
	type: 'text/csv; windows-1251',
});

let link = document.createElement('a');
link.download = t.name;

link.href = URL.createObjectURL(t);
// var universalBOM = '\uFEFF';
// link.setAttribute('href', 'data:text/csv; charset=utf-8,' + URL.createObjectURL(t));
link.click();
URL.revokeObjectURL(link.href);
