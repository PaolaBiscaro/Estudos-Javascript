/*Crie uma classe para representar carros
Os carros irão possuir uma marca, cor e um gasto médio de combustivel por km rodado. Nessa classe irá ter um método que dado a quantidade de quilometros e o preço do combustivel irá gerar o valor gasto em reais para concluir o percurso.
*/
class Carro{
    //Atributos
    marca;
    cor;
    gastoMedioKm;

    //Usando constructor para obrigatoriedade
    constructor(marca, cor, gastoMedioKm){
        this.marca = marca
        this.cor = cor
        this.gastoMedioKm = (1/gastoMedioKm).toFixed(2)
    }

    //Métodos
    calcularViagem(qntKm, precoCombustivel ){
        return (qntKm * this.gastoMedioKm * precoCombustivel).toFixed(2)
        //Eu uso o meu this para fazer referencia ao proprio atributo da classe.
    }
}

const qntKm = 70
const precoCombustivel = 5

const corolla = new Carro('Toyota', 'branco', 12)
console.log(corolla)
console.log(corolla.calcularViagem(qntKm, precoCombustivel))