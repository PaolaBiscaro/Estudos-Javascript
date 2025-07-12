
const fs = require('fs') //file system

const promessaLeituraArquivo = fs.promises.readFile('arquivos_auxiliares/lista_tarefas.csv')


promessaLeituraArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf-8'))
}).catch((error) =>{
    console.error('Está com erro', error)
})

promessaLeituraArquivo
.then((arquivo) => arquivo.toString('utf-8'))
.then((textoArquivo) => textoArquivo.split('\n').slice(1))
.then((linhaSemCabecalho) => {
    const listaTarefas = linhaSemCabecalho.map((linha)=> {
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito === 'true'
        }
    }) 
    return listaTarefas
})
.then((listaTarefas) => console.log(listaTarefas))
.catch((error) => console.error('Erro ao processar arquivo', error))



