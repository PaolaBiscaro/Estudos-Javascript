# Promises

As Promises são uma forma de lidar com assincronismo em JavaScript.
Assincronismo acontece quando queremos executar uma tarefa que leva tempo para ser concluída, mas não queremos travar o resto do código enquanto ela acontece. É como dizer:
“Vai fazendo aí no fundo, e quando terminar, me avisa.”
Isso permite que outras partes do código continuem rodando normalmente.

Uma Promise pode ter três estados:

**Pending (pendente):** ainda está em andamento.
**Fulfilled (resolvida):** deu certo e retornou o resultado.
**Rejected (rejeitada):** algo deu errado.

```javascript
    const promessaDeUmNumero = new Promise((resolve, reject) => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    })

    promessaDeUmNumero.then((value) =>{
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Processo encerrado')
    })

    //Vai imprimir um numero aleatorio e o que tiver escrito no finally
    //ex: 57 Processo encerrado
```
Podemos colocar varios .then() nessa função


**setTimeout** é uma função que executa o código após um determinado tempo de espera, criando um atraso na execução sem bloquear o código

```javascript
    console.log("Início")

    setTimeout(() => {
        console.log("Executado depois de 2 segundos")
    }, 2000)

    console.log("Fim")
```



