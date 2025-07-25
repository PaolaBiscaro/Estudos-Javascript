//Imprimir os primeiros 10 números da sequencia Fibonacci

let num_anterior = 1
let fibonacci = 1
let soma_anterior = 0


for(let i = 0; i < 10; i++){

    console.log(fibonacci)

    num_anterior = fibonacci
    fibonacci = num_anterior + soma_anterior
    soma_anterior = num_anterior
   
}

//Pegar o valor
//somar com o anterior
