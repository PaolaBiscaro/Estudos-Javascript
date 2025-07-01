/*Crie uma função para escrever seu nome. */

function escreverNome(name){
    return console.log('Meu nome é ' + name);
}

(function (){
    const nome = "Paola Bíscaro"
    escreverNome(nome)
})();