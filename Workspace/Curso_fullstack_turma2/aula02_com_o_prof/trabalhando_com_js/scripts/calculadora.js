
const add = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2
    document.getElementById("result").innerText = `O Resultado é: ${result}`;



}

const subtract = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2
    document.getElementById("result").innerText = `O Resultado é: ${result}`;

}

const multiply = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2
    document.getElementById("result").innerText = `O Resultado é: ${result}`;

}

const divide = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 / num2
    document.getElementById("result").innerText = `O Resultado é: ${result}`;

}