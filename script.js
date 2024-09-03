const example = document.querySelector('#example');

const ctx = example.getContext('2d');

example.width = 720;
example.height = 400;

ctx.strokeRect(0, 0, example.width, example.height);

setInterval(() => {
	draw(ctx);
}, 3000);

function draw(ctx) {
	ctx.clearRect(1, 1, example.width - 2, example.height - 2);
	ctx.beginPath();
	ctx.strokeStyle = '#00ff00';
	ctx.lineWidth = 8;
	for (let i = 0; i < 71; i++) {
		let r = rand(50, 380);
		ctx.moveTo(710 - i * 10, 400);
		ctx.lineTo(710 - i * 10, r);
	}
	ctx.stroke();
}

// Функция получения случайного целого числа в диапазоне
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
i = idle + iowait
b = user + nice + system + irq + softirq + steal
t = i + b
pcpu = 100% * b / t
 */
