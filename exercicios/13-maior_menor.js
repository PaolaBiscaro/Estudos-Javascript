/*Faça um progrma que receba varios números e imprima qual desses números é o maior número par e o menor número impar*/

const {prints} = require('./auxiliares')

function verificaMaiorPar(numeros){
    let maiorPar = numeros[0]

    for(let i = 0; i<numeros.length; i++){
        if(numeros[i] % 2 === 0){
            if(numeros[i] > maiorPar){
                maiorPar = numeros[i]
            }
        }
    }

    return maiorPar;
}

function verificaMenorImpar(numeros){
    let menorImpar = numeros[0]

    for(let j = 0; j<numeros.length; j++){
        if (numeros[j] % 2 != 0){
            if (numeros[j] < menorImpar){
                menorImpar = numeros[j]
            }
        }
    }

    return menorImpar;
}

prints(verificaMaiorPar([8,9,100,71,84,96]))
prints(verificaMenorImpar([1,5,8,7,6,0,90, -3]))

