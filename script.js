const example = document.querySelector('#example');

const ctx = example.getContext('2d');

example.width = 640;

example.height = 480;

ctx.strokeRect(0, 0, example.width, example.height);

// setInterval(() => {

// console.log(rand(100, 430));

// }, 1000);

draw(ctx, rand(100, 430));

function draw(ctx, val) {
	ctx.beginPath();

	ctx.moveTo(638, 472);

	ctx.moveTo(680, 480);

	ctx.stroke();

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
