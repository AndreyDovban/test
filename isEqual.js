import { isDeepStrictEqual } from 'util';

const object = { a: 1 };
const other = { a: 1 };

const result = isDeepStrictEqual(object, other);

console.log(result);
