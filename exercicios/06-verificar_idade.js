/*Crie uma função para verificar a idade de uma pessoa e informar se ela é menor de idade ou não. */
/*Como bonus, no retorno coloque a função que mostra seu nome dentro da função de Verificar idade */

function escreverNome(nome){
    return nome;
}

function verificarIdade(idade){
    if(idade < 18){
        console.log(escreverNome('Paola') + ' é Menor de Idade') 
    }else if(idade >= 18){
        console.log(escreverNome('Paola') + ' é Maior de Idade') 

    }else{
        console.log('Idade Invalida')
    }
}

 const idade = 17
 verificarIdade(idade);


 