/*Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado */

const listaNum = [1, 2, 4, 8, 20, 21, 24, 25]

for(let i = 0; i<listaNum.length; i++){
    if (listaNum[i] % 2 === 0){
        console.log(listaNum[i])
    }
}


