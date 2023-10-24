let operator = prompt("Operator (+, -, *, /)");
let num1 = parseFloat(prompt("Number1"));
let num2 = parseFloat(prompt("Number2"));

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2; 
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") { 
    if (num2 === 0) {
        alert("Tidak dapat membagi dengan nol.");
    } else {
        result = num1 / num2;
    }
} else {
    alert("Operator tidak valid");
}

if (result !== undefined) {
    document.write("Hasil: " + result); 
}
