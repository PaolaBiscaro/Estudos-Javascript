/*Faça um programa para calcular o valor de uma viagem. Para isso precisará do preço do combustivel, o valor total do consumo de gasolina do veiculo e a distancia da viagem. Imprima no console o valor que será gasto de combustível para realizar esta viagem.

*/

let preco_combustivel = 5.79
let consumo_carro = 12
let distancia_viagem = 1580


let valor_total = (distancia_viagem/consumo_carro)*preco_combustivel

console.log("O valor da viagem é: ", valor_total.toFixed(2))
