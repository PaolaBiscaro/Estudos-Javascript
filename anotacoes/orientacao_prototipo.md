# Orientação a Protótipo

No Javascript a forma de fazer herança é através dos protótipos, que por sua vez são a base dos objetos, alguem que o objeto se baseia.

Suponhamos que temos os seguintes objetos:


```javascript
    const pessoa = {
        genero: 'feminino'
    }

    //Paola é uma pessoa, falamos da seguinte forma que o objeto é uma pessoa
    const paola = {
        nome: 'Paola'
        idade: 21
        __proto__: pessoa //herda as caracteristicas de pessoa
    }

    console.log(paola.genero) //Imprime feminimo

    const sarah = Object.create(pessoa)//Outra maneira de criar objetos baseando se no prototipo
    sarah.name = 'Sarah'
```

Desta maneira o objeto Paola se baseia no objeto pessoa. Tambem, está é a forma literal de criar objetos, uma maneira mais simples.

Pensando no prototype, podemos criar classes novas para objetos já existentes do javascript:

```javascript
    String.prototype.toPLang = function(){
        return `P ${this}`
    }

    console.log('teste'.toPLang())//Imprime P teste

```

Todos os objetos do Javascript tem prototipos.
Não é uma boa pratica ficar enriquecendo protótipo, já que pode interferir diretamente no código.


# Funções Construturas

Geralmente, toda função que a primeira letra for maiuscula se trata de uma função construtora. Através dessa função podemos criar um escopo próprio, que permite o atributo this.

```javascript
    function Pessoa(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    //Essas funções tambem utilizam o new
    const paola = new Pessoa('paola', 21)
    console.log(paola)// Imprime Pessoa {nome: paola, idade: 21}

    Pessoa.prototype.falar = function (){
        console.log(`Olá, sou a ${this.nome}`)
    }

    paola.falar()

```
A diferença da função construtura é que podemos usar o new para criar objetos.
O uso de prototype é igual se quisermos fazer utilizando o class:

```javascript
    class Pessoa{
        constructor(nome, idade){
            this.nome = nome
            this.idade = idade
        }

        falar(){
            console.log(`Meu nome é: ${this.nome}`)
        }
    }

    console.log(new Pessoa('Paola', 21))
```

Podemos utilizar o call para funções construtoras:


```javascript
    function Pessoa(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    Pessoa.prototype.falar = function (){
        console.log(`Meu nome é: ${this.nome}`)
    }

    const paola = {
        genero: 'feminino'
    }

    const paola = Pessoa.call(paola, 'paola', 30)
```



# Sobrescrita

Quando temos um obejo declarado, podemos sobrescrever atributos, ou seja pegar um valor já existente e atribuir um novo a ele, atraves da sobrescrita;

```javascript
    //Objeto base
    const pessoa = {
        idade: 18
    }

    //Obejtos
    const paola = {
        nome: 'Paola'
        idade: 21 //Se eu colocar a idade
        __proto__: pessoa
    }

    console.log(paola.idade) //imprim e21

```

# Shadowing

Ocorre quando uma variável declarada em um escopo interno (como dentro de uma função ou bloco) tem o mesmo nome de uma variável em um escopo externo. A variável interna "sombra" a externa, impedindo o acesso à variável de fora naquele escopo.