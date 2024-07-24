import { json2csv } from 'json-2-csv';
const but = document.querySelector('.but');
import f from './data.json';

but.onclick = () => console.log('work');

let t = json2csv([f]);

console.log(t);
