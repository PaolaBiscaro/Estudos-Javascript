//Palindromo é uma palavra que tem a propriedade de poder ser lida tanto da direita para esquerda como da esquerda para direita.

let palavra = 'reviver'
let qntLetrasPalavra = palavra.split('')
let palavraInvertida = []
let cont = 0

for (let i = (qntLetrasPalavra.length)-1; i >=0; i--){
    console.log(qntLetrasPalavra[i])
    palavraInvertida[cont] = qntLetrasPalavra[i] //Para atribuir no array, precisa estar adicionando indice[]

    cont++
}

palavraInvertida = palavraInvertida.join('')

if(palavraInvertida === palavra){
    console.log(`A palavra ${palavra} é um palindromo! O inverso continua ${palavraInvertida}`)
}else{
    console.log(`A palvra ${palavra} não é um palindromo, o inverso é ${palavraInvertida}`)
}


//Outra maneira de fazer, com funções

function verificarPalindromo(palavra){
    var palavraInvertida = palavra.split('').reverse().join('')

    if (palavra === palavraInvertida){
        console.log(palavra + " é um palindromo")
    }else{
        console.log(palavra + " não é um palindromo")
    }
}

verificarPalindromo('mirim')