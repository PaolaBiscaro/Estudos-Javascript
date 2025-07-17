# Variaveis

**VAR** - Palavra reservada para criação de variaveis,podemos usar o var em um IF por exemplo, a variavel é acessivel de qualquer parte do código, essa atribuição só não funciona em funções.

**LET** - A variavel pode ser alterada em qualquer parte do código, mas ela se torna inacessivel em qualquer tipo de bloco (IF, FOR, Função,)

**CONST** - A variavel não pode ser alterada, permanece apenas com o primeiro valor que é atribuido.

O javascript ajusta automaticamente os tipos das variaveis conforme o valor atribuido. O operador + funciona tanto para concatenação quanto para operador aritmetico de adição, então podemos ter operações da seguinte maneira:

```javascript
var var1 = 10 //numero
var var2 = '20' //string

console.log(var1 + var2); //Retorna 1020, concatena
console.log(var1 - var2); //Retorna -10, subtrai

var var3 = 'texto'

console.log(var1 - var3); //retorna NaN
```

O Javascript é fracamente tipado e ele é case sensitive.


# Hoisting
Hoisting em JavaScript é o comportamento padrão da linguagem onde declarações de variáveis e funções são "elevadas" para o topo do seu escopo, seja ele global ou de função, antes da execução do código. Isso significa que, embora você declare uma variável ou função após usá-la, o JavaScript a "move" para o topo do escopo, permitindo que você a utilize antes de sua declaração no código.

Podemos fazer declarações da seguinte maneira:

```javascript
    teste() //chamada da função antes da sua declaração

    function teste(){
        console.log('Teste');
    }
```

O exemplo acima funciona com funções, mas o próximo exemplo não:

```javascript
    console.log(var1);//retorna undefined

    var var1 = 'teste'
```
Ele tem o comportamento parecido com o anterior da função, mas é como se o interpretador jogasse a declaração da variavel antes da sua atribuição:

```javascript
var var1;

console.log(var1);

var1 = 'teste';

```

# Nomenclatura

As varivaveis normalmente começam com letras, $, _. Não se usa números ou simbolos especiais para decaração de variaveis. Para funções a convenção é que a primeira letra fica em Maiuscula, e para variaveis CONST, é comum colocar todos os caracteres em maiusculo.

# Tipo de Dados

Na linguagem, por ser fracamente tipada, ou seja o seu tipo é resolvido no decorrer do código, podemos ter as seguintes situações, que não são comuns em outras linguagens:

```javascript
    var var1 = 10
    console.log(var1) //imprime 10

    var1 = 'Teste'
    console.log(var1) //imprime 'teste'

```

## Tipos Primitivos

**Boolean** - Representa um valor lógico (verdadeiro ou falso)

Um caso interessante é de que strings vazias são convertidas para false, e uma string com qualquer valor preenchido se torna verdadeiro, inclusive com 'espaços'
```javascript
    const nome = ''
    if(nome){
        console.log('Preenchido')
    }else{
        console.log('Não preenchido')//retorna essa resposta
    }
```

**Null** - É a ausencia intencional de valor, ou seja você pode declarar a variavel e dizer que ela não tem valor a partir do uso do NULL

```javascript
    const x = null
    console.log(x); //Imprime null
```

**Undefined** - Indica que a variavel foi declarada mas que não possui um valor atribuido, ou seja ela não existe.

```javascript
    var x;
    console.log(x) //aparece como undefined

    const objeto = {nome: 'Paola'}
    console.log(objeto.nome) //Imprime Paola
    console.log(objeto.idade) //aparece como undefined

    //Posso definir uma variavel como undefined
    const objeto2 = {nome: undefined}
    console.log(objeto2.nome) //aparece undefined
```

**Number** - Representa números inteiros e de ponto flutuante. Temos alguns casos em que outros dados são number, e que algumas contas não geram o valor exato, principalmente com o uso de decimais.

```javascript
    typeof 10; //number
    typeof 10.01; //number
    typeof Nan; //number
    typeof +Infinity; //number
    typeof -Infinity; //number
    console.log(0.1 - 0.3) //-0.19999999999999998
```
Para calculos precisos precisamos usar um outro tipo de dado.

**String** - Representa textos, delimitados por aspas simples, duplas ou crases. Por convenção normalmente strings usamos aspas simplespor causa das tag html que utilizam-se aspas duplas.

```javascript
    //Ambos os jeitos servem para strings
    console.log('texto')
    console.log("texto")
    console.log(`texto`)

    //Motivo de colocar aspas simples:
    console.log('<div id="teste">10</div>')
    console.log("<div id="teste">10</div>")//interpretador entende como fim da frase a proxima aspas.
    console.log("<div id=\"teste\">10</div>")//para se utilizar aspas duplas seria necessário colocar as barras invertidas '\' para escapar as aspas

    //Uso das crases
    const id = 3
    console.log('<div id="' + id +'">teste</div>')//muito complexo
    console.log(`<div id=${id}>teste</div>`)//mais simples utilizar a crase
```

**Symbol** - Representa um valor único e imutável, geralmente usado como identificador de propriedades em objetos. 

```javascript
    const x = Symbol('10');
    console.log(x) //Imprime Symbol(10)

    const y = Symbol('3');
    const z = Symbol('3');
    console.log(y === z); //Imprime false, já que o Symbol faz o valor ser unico
```


**Sites:** 

https://0.30000000000000004.com/ 

https://mikemcl.github.io/decimal.js/



# Operadores

**=** - Operador de Atribuição

**==** - Operador de Comparação sem considerar o tipo

**===** - Operador de Comparação, que leva em consideração o tipo de dado, ou seja "0" é diferente de 0.

**!=** - Operador Diferente, não leva em consideração o tipo.

**!==** - Operador Diferente que leva em consideração o tipo.

```javascript
    console.log(10 == '10')//true
    console.log(10 === '10')//false
    console.log(10 != '10')//false
    console.log(10 !== '10')//true
```

# Outros

**.toFixed(2)** -  Limita a qnt de casas decimais após a virgula


# Biblioteca Math

**Math.pow(num, 2)** - Essa função faz o calculo de potência, tem como parametros o valor que você quer calcular e o valor da potência.

**Math.floor()** - Arredonda o número para baixo até o inteiro mais próximo.

**Math.random()** - Sorteia um número pseudoaleatório entre 0 e 1. O número nunca será 1, mas pode ser 0. Para adicionar outros números podemos multiplicar ou somar valores.