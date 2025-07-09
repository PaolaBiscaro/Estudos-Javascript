# Classes

Para evitar a repetição de código na criação de objetos, podemos criar uma CLASSE, dessa maneira o objeto irá conter uma estrutura pré-determinada e poderá ser reutilizado e instanciar quantos objetos forem necessários.

## Declaração de uma classe

```javascript
    class Pessoa{
        //Define os atributos de pessoa
        nome;
        idade;
        anoNascimento;

        //Define o construtor
        constructor(nome, idade){
            this.nome = idade,
            this.idade = nome
            this.anoNascimento = 2025 - idade
        }

        //Define os métodos de pessoa
        descrever() {
        console.log( `Meu nome é ${this.nome}, e tenho ${this.idade} anos`)
        }
    }

```
**Construtores** definem o que ocorre com a classe quando ela for instanciada. 
É possivel colocar parametros no meu construtor para que sempre que a classe for instanciada, esse parametro ser um requisito.
Para fazer referencia a tributos dentro da própria classe utilizamos a palavra THIS, assim podemos utilizar os atributos da classe dentro de métodos.

## Criando objetos a partir da classe
```javascript
    const jose = new Pessoa();
    jose.nome = 'José Bezerra'
    jose.idade = 30
    console.log(jose);

    const maria = new Pessoa();
    maria.nome = 'Maria Eduarda'
    maria.idade = 24
    console.log(maria)
```

Podemos utilizar as classes como parâmetros de funções:
```javascript
    //Função que recebe um objeto
    function compararPessoa(p1, p2){
        if(p1.idade > p2.idade){
            console.log(`${p1.nome} é mais velha que ${p2.nome}`)
        }else if(p2.idade > p1.idade){
            console.log(`${p2.nome} é mais velha que ${p1.nome}`)
        }else{
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
        }
    }

    //Instancias de objetos
    const paola = new Pessoa('Paola', 21)
    const sarah = new Pessoa('Sarah', 19)
```
