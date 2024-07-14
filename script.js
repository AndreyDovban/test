const but = document.querySelector('.but');

but.onclick = () => console.log('work');

let str = 'exampl23e@test34.c2om.tu.tu';

let reg = /^[a-zA-Z0-9А-ЯЁё]+@[a-zA-Z0-9А-ЯЁё]+[\\.a-zA-Z0-9А-ЯЁё]+$/;

console.log(reg.test(str));
