/*
Faça um algoritmo que calcula o IMC - Indice de Massa Corporal e mostre sua condição conforme a tabela

    IMC em adultos:
    - Abaixo de 18.5 - Abaixo do peso;
    - Entre 18.5 e 25 - Peso Normal
    - Entre 25 e 30 - Acima do peso
    - Entre 30 e 40 - Obeso;
    - Acima de 40 - Obesidade Grave;

*/

const peso = 50.0
const altura = 1.40
const imc = peso / Math.pow(altura,2)

if (imc <= 18.5){
    console.log("Abaixo do peso")
}else if (imc > 18.5 && imc <= 25){
    console.log("Peso Normal")
}else if(imc > 25 && imc <= 30){
    console.log("Acima do peso")
}else if(imc > 30 && imc <= 40){
    console.log("Obeso")
}else if(imc > 40){
    console.log("Obesidade Grave")
}else{
    console.log("Não é um número válido")
}

console.log(imc)