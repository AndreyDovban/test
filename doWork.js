self.addEventListener(
	'message',
	function (e) {
		console.log('???', e.data);
		switch (e.data.cmd) {
			case 'average':
				var result = average(e.data.data); // Функция, вычисляющая среднее значение числового массива
				self.postMessage(result);
				break;
			default:
				self.postMessage('Unknown command');
		}
	},
	false,
);

function average(numbers) {
	var len = numbers.length,
		sum = 0,
		i;

	if (len === 0) {
		return 0;
	}

	for (i = 0; i < len; i++) {
		sum += numbers[i];
	}

	return sum / len;
}
