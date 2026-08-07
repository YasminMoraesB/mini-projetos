// const botao = document.querySelector('#botao');
// const peso = document.querySelector('#peso').value;
// const altura = document.querySelector('#altura').value;


const peso = 84;
const altura = 1.57;

let calculoImc = peso / (altura * altura);
//colocar o .toFixed
if (calculoImc < 18.5) {
    console.log(calculoImc);
    console.log("Abaixo de 18,5 → Abaixo do peso");
} else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
    console.log(calculoImc);
    console.log("18,5 até 24,9 → Peso normal");
} else if (calculoImc >= 25 && calculoImc <= 29.9) {
    console.log(calculoImc);
    console.log("25 até 29,9 → Sobrepeso");
} else if (calculoImc >= 30 && calculoImc <= 34.9) {
    console.log(calculoImc);
    console.log("30 até 34,9 → Obesidade Grau I");
} else if (calculoImc >= 35 && calculoImc <= 39.9) {
    console.log(calculoImc);
    console.log("35 até 39,9 → Obesidade Grau II");
} else {
    console.log(calculoImc);
    console.log("40 ou mais → Obesidade Grau III");
}