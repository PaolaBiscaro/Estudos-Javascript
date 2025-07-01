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