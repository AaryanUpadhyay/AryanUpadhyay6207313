function createCalculatorDOM() {
	const body = document.body;
	const calculator = document.createElement('div');
	calculator.className = 'calculator';

	const display = document.createElement('input');
	display.id = 'display';
	display.type = 'text';
	display.value = '';
	display.placeholder = '0';
	display.readOnly = true;
	calculator.appendChild(display);

	const buttonsDiv = document.createElement('div');
	buttonsDiv.className = 'buttons';

	const buttons = [
		{ text: 'C', action: 'clear' },
		{ text: 'DEL', action: 'delete' },
		{ text: '/', value: '/' },
		{ text: '*', value: '*' },
		{ text: '7', value: '7' },
		{ text: '8', value: '8' },
		{ text: '9', value: '9' },
		{ text: '-', value: '-' },
		{ text: '4', value: '4' },
		{ text: '5', value: '5' },
		{ text: '6', value: '6' },
		{ text: '+', value: '+' },
		{ text: '1', value: '1' },
		{ text: '2', value: '2' },
		{ text: '3', value: '3' },
		{ text: '.', value: '.' },
		{ text: '0', value: '0' },
		{ text: '=', action: 'equals', className: 'equal' }
	];

	buttons.forEach(btn => {
		const button = document.createElement('button');
		button.textContent = btn.text;
		if (btn.value) button.setAttribute('data-value', btn.value);
		if (btn.action) button.setAttribute('data-action', btn.action);
		if (btn.className) button.className = btn.className;
		if (['/', '*', '-', '+'].includes(btn.text)) button.classList.add('operator');
		buttonsDiv.appendChild(button);
	});

	calculator.appendChild(buttonsDiv);
	body.appendChild(calculator);
}

createCalculatorDOM();



// Keyboard support for calculator
document.addEventListener('DOMContentLoaded', function () {
	const display = document.getElementById('display');
	const buttons = document.querySelectorAll('.buttons button');
	let currentInput = '';
	let resetNext = false;

	document.addEventListener('keydown', function (event) {
		const key = event.key;
		const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];
		if (allowedKeys.includes(key)) {
			if (resetNext) {
				currentInput = '';
				resetNext = false;
			}
			currentInput += key;
			display.value = currentInput;
		} else if (key === 'Enter' || key === '=') {
			try {
				const sanitized = sanitizeInput(currentInput);
				const result = eval(sanitized);
				display.value = result;
				currentInput = result.toString();
				resetNext = true;
			} catch {
				display.value = 'Error';
				currentInput = '';
				resetNext = true;
			}
		} else if (key === 'Backspace') {
			currentInput = currentInput.slice(0, -1);
			display.value = currentInput;
		} else if (key.toLowerCase() === 'c') {
			currentInput = '';
			display.value = '';
			resetNext = false;
		}
	});
});



function sanitizeInput(expr) {	
	return expr.replace(/\b0+(\d+)/g, '$1');
}
document.addEventListener('DOMContentLoaded', function () {
	const display = document.getElementById('display');
	const buttons = document.querySelectorAll('.buttons button');
	let currentInput = '';
	let resetNext = false;

	buttons.forEach(function (button) {
		button.addEventListener('click', function () {
			const value = button.getAttribute('data-value');
			const action = button.getAttribute('data-action');

			if (action === 'clear') {
				currentInput = '';
				display.value = '';
				resetNext = false;
			} else if (action === 'delete') {
				currentInput = currentInput.slice(0, -1);
				display.value = currentInput;
			} else if (action === 'equals') {
				try {
					const sanitized = sanitizeInput(currentInput);
					const result = eval(sanitized);
					display.value = result;
					currentInput = result.toString();
					resetNext = true;
				} catch {
					display.value = 'Error';
					currentInput = '';
					resetNext = true;
				}
			} else if (value) {
				if (resetNext) {
					currentInput = '';
					resetNext = false;
				}
				currentInput += value;
				display.value = currentInput;
			}
		});
	});
});
