# Modularização

É uma prática de dividir o código em partes menores, que são chamados módulos, onde cada um tem uma responsabilidade especifica.
Ao inves de escrevermos todo o código em um unico arquivo, separamos ele por função, conceito ou componente.

```javascript
//Função no arquivo auxiliar.js
function prints(texto){
    console.log(texto);
}

module.exports = { gets, prints} //Prepara o objeto
```
```javascript
//Arquivo principal main.js
const funcoes = require('./funcoes-auxiliares') //Recebe o objeto

console.log(funcoes.gets())
funcoes.prints('Olá mundo!')
```