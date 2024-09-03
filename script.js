const example = document.querySelector('#example');

const ctx = example.getContext('2d');

example.width = 720;
example.height = 400;

ctx.strokeRect(0, 0, example.width, example.height);

setInterval(() => {
	// draw(ctx);
}, 1000);

function draw(ctx) {
	ctx.clearRect(1, 1, example.width - 2, example.height - 2);
	ctx.beginPath();
	ctx.strokeStyle = '#00ff00';
	ctx.lineWidth = 8;
	let d;
	for (let i = 0; i < 72; i++) {
		d = rand(50, 380);
		if (i == 0) {
			ctx.moveTo(720 - i * 10, 400);
			ctx.lineTo(720 - i * 10, d);
		} else {
			ctx.moveTo(720 - i * 10, 400);
			ctx.lineTo(720 - i * 10, d);
		}
		// if (i == 71) {
		// 	ctx.lineTo(720 - i * 10, 400);
		// }
	}
	ctx.stroke();
	// ctx.fill();

	// ctx.strokeRect(15, 15, 266, 266);

	// ctx.strokeRect(18, 18, 260, 260);

	// ctx.fillRect(20, 20, 256, 256);

	// for (let i = 0; i < 8; i += 2)

	// for (let j = 0; j < 8; j += 2) {

	// ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);

	// ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);

	// }

	// ctx.beginPath();

	// ctx.arc(80, 100, 56, (3 / 4) * Math.PI, (1 / 4) * Math.PI, true);

	// ctx.fill(); // *14

	// ctx.moveTo(40, 140);

	// ctx.lineTo(20, 40);

	// ctx.lineTo(60, 100);

	// ctx.lineTo(80, 20);

	// ctx.lineTo(100, 100);

	// ctx.lineTo(140, 40);

	// ctx.lineTo(120, 140);

	// ctx.stroke();
}

////////////////////////////////////

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
