

function checkSeasons(dia, mes){
    let mesDate = mes-1
    let ano = new Date().getFullYear()
    let date = new Date(ano, mesDate, dia)
    console.log(date.toLocaleDateString())

    switch (expressao) {
    case valor1:
        // código a executar se expressao === valor1
        break;
    case valor2:
        // código a executar se expressao === valor2
        break;
    default:
        // código a executar se nenhum case combinar
    }

    /*
        verão - 21 dezembro a 20 de março
        outono - 21 de março a 20 junho
        inverno - 21 junho a 22 setembro
        primavera - 23 setembro a 20 dezembro
    */
}



checkSeasons(14, 1)
