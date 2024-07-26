import { json2csv } from 'json-2-csv';
import f from './data.json';
import fields from './data_26-07-2024-09-38-52.json';

const but = document.querySelector('.but');
const pre = document.querySelector('.pre');

but.onclick = func;

function func() {
	let t = json2csv([f]);

	pre.innerText = t;

	let date = new Date().toLocaleDateString('ru-Ru').replace(/\./g, '-');
	let time = new Date().toLocaleTimeString('ru-Ru').replace(/:/g, '-');
	let file = new File([t], `pdf_diff_report_${date}-${time}.csv`);

	let link = document.createElement('a');
	link.download = file.name;

	link.href = URL.createObjectURL(file);
	link.click();
	URL.revokeObjectURL(link.href);
}

function func2() {
	console.log(JSON.stringify(Object.keys(fields)));
}
