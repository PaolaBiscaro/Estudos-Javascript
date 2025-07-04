# Objetos

São coleções dinâmicas de valores que podemos criar. Ele usa chave e valor.

**Declaração de um Objeto**
```javascript
const paola = {
    nome: "Paola",
    idade: 21
};

paola.altura = 1.55 //Incrementa um valor ao objeto
delete paola.idade //Deletar um valor do objeto
```
Dentro desses objetos podemos atribuir métodos

```javascript
const pessoa = {
    nome: "Sarah",
    idade: 19,

    descrever: function (){
        console.log(`Meu nome é ${this.nome}, e tenho ${this.idade} anos`)
    }
}
```
Podemos fazer atribuições e a chamada do objeto da seguinte maneira tambem:

```javascript
//Atribuições
pessoa.nome = "Eloah"
pessoa.idade = 9
const atributo = 'nome'; 
console.log(pessoa[atributo])
pessoa['nome'] = 'teste'

//chamada do objeto
console.log(pessoa.nome)//Mostra apenas o atributo
pessoa.descrever();//Chama o método

```

Podemos declarar objetos apenas com **{ }** que chamamos de objetos com literal.

