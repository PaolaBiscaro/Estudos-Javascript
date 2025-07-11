# Funções

São blocos de código do qual é possível chamar a qualquer momento no seu código.

```javascript
    function escreverNome(name){
        return console.log('Meu nome é ' + name);
    }

    const nome = "Paola Bíscaro"
    escreverNome(nome)
```

Nas funções podemos passar parâmetros, ou seja, uma informação necessária para a função funcionar, sem ela não é possível seguir.

Lembre-se! O javascript funciona em cascata, ou seja, se uma parte do código estiver solicitando uma função antes da declaração dela, dará um erro.

Os nomes das funções são um detalhe, não é necessário o nome para invocar uma função, mas sim a sua referencia.


# Função Imediatamente Invocada

No Javascript, podemos criar uma função que é imediatamente invocada, sem a necessidade de colocar: main(); para chamada da função.

```javascript
    function escreverNome(name){
        return console.log('Meu nome é ' + name);
    }

    (function (){
        const nome = "Paola Bíscaro"
        escreverNome(nome)
    })();
```

Podemos fazer atribuições as funções, ou seja uma variavel pode possuir uma função. Da mesma maneira uma função pode receber outra função.

```javascript
    function falarMeuNome(){
        console.log('Meu nome é Paola')
    }
    
    function  falarMeuNomeCompleto(falarMeuNome){
        falarMeuNome()
        console.log('Bíscaro Pereira')
    }

    const referenciaNova = falarMeuNome
    referenciaNova(); // pode ser invocada a função falarMeuNome
    falarMeuNomeCompleto(falarMeuNome)

```

# Function Declaration e Function Expression

São as caracteristicas principais na hora de declarar uma função.

```javascript
    //Function Declaration
    function nomeDaFuncao(){}
    //Temos a declaração da função com a palavra-chave function, seguido de um nome

    //Function Expression
    const nomeDeOutraFuncao = function (){}
    //Temos a função sem nomenclatura sendo atribuida a uma variavel

```
**Function Declaration** é carregada no inicio por causa do hoisting, e pode ser chamada antes ou depois de sua definição.

**Function Expression** é quando atribuimos uma função a uma variavel, ela não é elevada para o topo do código devido ao hoisting (não pode chamar antes da definição), pode ser anonima ou nomeada.


# Arrow Function

É uma função anônima escrita com a sintaxe => (seta). Ela é uma forma alternativa as Function Expressions.

```javascript
    const funcao = (parametro) => {}
    const funcao2 = parametro => console.log('teste') 
```
Quando temos apenas um item no parenteses, podemos remover ele.
Quando temos apenas uma linha de código, podemos retirar o {} e o return.



# Formas de Invocar um Função

Além da maneira tradicional de invocação da função **funcao_teste()**, temos outras maneiras de invocar a função já que ela é um objeto, e todo objeto possui métodos, sendo assim podemos chamar funções usando o apply e o call

```javascript
    const pessoa = {
        nome: 'Sarah'
        idade: 19
    }
    //Essa função não está inserida no contexto do objeto pessoa
    function gritar(prefixo){
        console.log(prefixo, this.nome)
    }

    gritar('Olaaaa')//Invocação direta, retorna Olaaaa undefined

    //Com o apply, podemos colocar a função no contexto do objeto
    gritar.apply(pessoa, ['Olaaaa']) //Retorna Olaaaa Sarah
    gritar.call(pessoa, 'Olaaaa' ) //Retorna Olaaaa Sarah
```

O new tambem é uma forma de invocação de função.


# Callbacks
 
São funções passadas como argumento para outra função, que será executada após algum tipo de processamento. Usamos para controlar a ordem de execução, especialmente em operações assíncronas (como requisições de API, timers, leitura de arquivos).

```javascript
    function adicao(x, y){
        return x + y
    }

    function multiplicacao(x, y){
        return x * y
    }

    function calcular(x, operacao, y){
        console.log(operacao(x, y))
    }

    calcular(10, adicao, 20) //retorna 30
    calcular(10, multiplicacao, 20) //retorna 200

```

Com isso é possivel inverter controle e criar estrategias de execução.


# Closures

Um closure (ou clausura) acontece quando uma função interna "lembra" do ambiente onde foi criada, mesmo depois que a função externa já terminou de executar.

```javascript
    function soma(x){
        return function(y){
            return x + y;
        }
    }

    const somaParcial = soma(10);
    
    console.log(somaParcial(20)); //Imprime 30
    console.log(somaParcial(30));//Imprime 40
```

Nessa função é como se o algoritmo lembrasse de que o valor de x era inicialmente 10.
Funciona tanto para funções como para arrow functions.