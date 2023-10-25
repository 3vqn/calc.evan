let operator = prompt('Operator (+, -, *, /)');
let num1 = parseFloat(prompt('Number 1'));
let num2 = parseFloat(prompt('Number 2'));

if (operator === '+') {
    document.write(`<h1>Result: ${num1 + num2}</h1>`);
} else if (operator === '-') {
    document.write(`<h1>Result: ${num1 - num2}</h1>`);
} else if (operator === '*') {
    document.write(`<h1>Result: ${num1 * num2}</h1>`);
} else if (operator === '/') {
    if (num2 === 0) {
        alert("Tidak dapat membagi dengan nol.");
    } else {
        document.write(`<h1>Result: ${num1 / num2}</h1>`);
    }
} else {
    document.write(`<h1>Error!!!</h1>`);
}
