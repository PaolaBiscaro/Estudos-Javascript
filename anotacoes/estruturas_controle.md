# Estruturas Condicionais

Estruturas Condicionais são estruturas de decisão que retornam um valor Verdadeiro ou Falso, que são as variaveis booleanas.

**IF** é a estrutura que permite que o código seja executado quando a premissa for verdadeira, se não for entra na execução do **ELSE**.
Tambem podemos adicionar outra verificação caso seja necessária, utilizando o **ELSE IF**.

```javascript
const nota_1 = 10
const nota_2 = 0
const nota_3 = 0

const media = (nota_1+nota_2+nota_3)/3

if(media < 5){
    console.log('Reprovado')
}else if (media < 7  && media >= 5){
    console.log('Recuperação')
}else if (media > 7 && media <=10){
    console.log('Aprovado')
}else{
    console.log("Notas invalidas")
}
```

# Estruturas de Repetição

Estruturas de Repetição são blocos de código que se repetem enquanto uma condição for verdadeira. Elas são muito úteis quando você quer evitar escrever o mesmo código várias vezes ou percorrer listas/arrays.

**FOR** é usado quando sabemos o fim da minha execução, ou seja, o algoritmo deveria ter um fim.

```javascript
for(let i = 0; i<10; i++ ){
    console.log(i)
}
```

Tambem podemos usar o FOR para percorrer strings.

```javascript
const nome = 'Paola Biscaro Pereira'

for (let j=0; j<nome.length; j++){
    console.log(nome[j])
}
```



