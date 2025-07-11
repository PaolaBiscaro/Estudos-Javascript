# Array

Arrays são variaveis que permitem armazenar listas, podemos ter mais de um valor armazenado dentro dele, tambem podem ser de qualquer tipo, inclusive podemos misturar tipos.

```javascript
    const alunos = ['Ana', 'Lucas', 'João']

    console.log(alunos)//Mostra a lista inteira
    console.log(alunos[0]) //Pega a primeira posição
```


No javascript, temos alguns metodos para inserir ou remover itens:


```javascript
    console.log(notas.length) //Mostra o tamanho do array, a qnt de elementos

    alunos.pop()//Remove o ultimo item da lista
    alunos.shift()//Remove o primeiro item da lista
```

# Foreach

É um método de arrays que serve para percorrer cada item do array e executar uma função callback para cada elemento.

```javascript
    const lista = [10, 20, 30, 40, 50]

    lista.forEach((value, i, listaReferencia) => {
        console.log(value, i, listaReferencia) //Vai retornar até o fim da lista os valores que estamos, o indice respectivo ao valor e a lista que ele está usando.
        //ex: value = 10, i = 0, listaReferencia = [10, 20, 30, 40, 50]
        //ex: value = 20, i = 1, listaReferencia = [10, 20, 30, 40, 50].... 
    })
```

Ele é um pouco mais lento que o for tradicional.


# Filter

O filter é um método de array que serve para filtrar elementos com base em uma condição, retornando um novo array apenas com os elementos que passaram nesse teste.
É parecido com o foreach, ele retorna uma função

```javascript
    const lista = [2, 7, 32, 45, 1, 8]

    const listaPares = lista.filter(element) => {
        return (element % 2 === 0) //Cria uma nova lista
    }

    console.log(listaPares) //imprime 2, 32, 8
    console.log(lista) //Imprime [2, 7, 32, 45, 1, 8], não foi alterada

```

# Map

O map é um método de array que serve para transformar os elementos de um array. Ele cria um novo array, aplicando uma função de transformação a cada item do array original.

```javascript
    class Pessoa {
        constructor(nome){
            this.nome = nome
        }
    }

    //Lista de Obejtos Pessoa
    const lista = [new Pessoa('Paola', new Pessoa('Sarah'), new Pessoa('Eloah'))]

    const listaNomes = []

    //Forma tradicional de criar uma lista apenas com os nomes
    for(let i = 0; i < lista.length; i++){
        const element = lista[i]
        listaNomes.push(element.nome)
    }

    console.log(listaNomes) //Imprime ['Paola', 'Sarah', 'Eloah']


    //Usando o Map
    const listaNomes2 = lista.map((element) => {
        return element.nome
    })

    console.log(listaNomes2) //Imprime ['Paola', 'Sarah', 'Eloah']


    //Fazendo o retorno de um html
    const listaHtml = lista.map((element) => {
        return `
            <li>${element.nome}</li>
         `
    })

    console.log(listaHtml)
```

# Reduce

Reduz minha lista a um unico valor, o reduce é um método de array usado para reduzir (ou acumular) todos os elementos de um array em um único valor (como soma, produto, objeto, etc).
Previous é o valor acumulado que vai sendo atualizado a cada passo.
Current é o valor atual do array que está sendo processado naquele momento.

```javascript
    const lista = [1, 2, 3, 4, 5]

    const somaNum = lista.reduce((previous, current) => {
        console.log(previous, current)
        return previous + current
    }, 0)// o zero é o valor inicial

    console.log(somaNum)//15

```

# Join

Ele é usado para juntar todos os elementos de um array em uma única string, com um separador opcional entre os elementos.

```javascript
    const lista = [
        {nome: 'Paola'},
        {nome: 'Juliana'}, 
        {nome: 'Rodrigo'}
    ];

    console.log(lista.join('/'))//Imprime [object Object]/[object Object]/[object Object]

    lista.map((e) => e.nome).join('| ')//Imprime Paola| Juliana| Rodrigo

```

Podemos usar o join em combinação com diversas outras funções, por exemplo:

```javascript
    const lista = [
        {nome: 'Antonio'},
        {nome: 'Pedro'},
        {nome: 'Gustavo'},
        {nome: 'Ana'}
    ]

   console.log(lista.map(e=>e.nome)
                    .filter((e) => e.startsWith('A'))
                    .join('; ')) //Imprime Antonio; Ana
```