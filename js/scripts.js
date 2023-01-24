const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const opSum = document.getElementById("suma");
const opRes = document.getElementById("resta");
const opMul = document.getElementById("multiplicacion");
const opDiv = document.getElementById("division");
const calcularBoton = document.getElementById("calcular");
const resultBoton = document.getElementById("result");

opSum.addEventListener("click", sumar);
opRes.addEventListener("click", restar);
opMul.addEventListener("click", multiplicar);
opDiv.addEventListener("click", dividir);



function sumar() {
    let resultado =  parseInt(num1.value, 10) + parseInt(num2.value, 10);
    resultBoton.innerText = resultado;
}

function restar() {
    let resultado =  parseInt(num1.value, 10) - parseInt(num2.value, 10);
    resultBoton.innerText = resultado;
}

function multiplicar() {
    let resultado =  parseInt(num1.value, 10) * parseInt(num2.value, 10);
    resultBoton.innerText = resultado;
}

function dividir() {
    let resultado =  parseInt(num1.value, 10) / parseInt(num2.value, 10);
    resultBoton.innerText = resultado;
}
