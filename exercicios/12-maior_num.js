/*Faça um algoritmo que receba 5 numeros e mostre o maior deles
 */

function maiorNumero(listaNum){
    let maiorNum = listaNum[0]

    for(let i = 0; i<listaNum.length; i++){

        if(listaNum[i] > maiorNum){
            maiorNum = listaNum[i]
        }
    }

    return maiorNum
}

console.log(maiorNumero([5, 50, 10, 98, 23]))

