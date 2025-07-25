/*Crie uma classe para representar pessoas.
Para cada pessoa, iremos ter os atributos nome, peso e altura.
As pessoas dever ter a capacidade de dizer o valor do seu IMC.
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    classificarImc(){    
        const imc = this.calcularImc()

        if (imc <= 18.5){
            return "Abaixo do peso"
        }else if (imc > 18.5 && imc <= 25){
            return "Peso Normal"
        }else if(imc > 25 && imc <= 30){
            return "Acima do peso"
        }else if(imc > 30 && imc <= 40){
            return "Obeso"
        }else{
            return "Obesidade Grave" 
        }
    }
}




const paola = new Pessoa('Paola', 50.0, 1.55)
console.log(paola.calcularImc())
console.log(paola.classificarImc())