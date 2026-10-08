// condicionais

let nome = "Thamilis"
let idade = 19;
let maiorDeMaior = true;
let saldo = 10000;


if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

//condicional composta
if (saldo < 1000) {
    console.log("Ficar em casa")
} else if (saldo >= 1000 && saldo < 5000) {
    console.log("Sair")
} else {
    console.log("Guardar dinheiro")
}

//Atividade
let age = Number(prompt("Digite sua idade:"));

if (age <= 0) {
    console.log("Número invalído");
} 
else if (age > 0 && age < 12) {
    console.log("Criança");
} 
else if (age >= 12 && age < 18) {
    console.log("Adolescente");
}
 else if (age >= 60) {
    console.log("Idoso");
 }

//  let peso = Number(prompt("Digite seu peso:"));
//  let altura = Number(prompt("Digite sua altura:"));
//  let imc = (altura * altura) /peso
//  imc = imc.toFixed(1)
 
//  if(imc > 18.5){
//   alert("Abaixo do peso")
//  }
//  else if(imc >= 18.5 && imc <= 24.9){
//     alert("Peso normal")
//  }
//  else if(imc >= 25 && imc <= 29.9){
//     alert("Excesso de peso")
//  }
//  else if(imc >= 30 && imc <= 34.9){
//     alert("Obesidade classe 1")
//  }
//  else if(imc >= 35 && imc <= 39.9){
//     alert("Obesidade classe 2")
//  }
//  else if  ( imc >= 40) {
//     alert("Obesidade 3")
//  }

let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));
let imc = (altura * altura) /peso
imc = imc.toFixed(1)

switch(true) {
    case (imc < 18.5):
    console.log("Abaixo do peso normal");
    break;
    case (imc >= 18.5 && imc <= 24.9):
    console.log("Peso normal")
    break;
    case(imc >= 25 && imc <= 29.9):
    console.log("Excesso de peso")
    break;
    case(imc >= 30 && imc <= 34.9):
    console.log("Obesidade classe 1")
    break;
    case(imc >= 35 && imc <= 39.9):
    console.log("Obesidade classe 2")
    break;
    case( imc >= 40):
    console.log("Obesidade 3")
    break;
    default:

}
