

function checkSeasons(mes){
    let date = mes
    switch (true) {
    case date <= 3 && date > 0:
        console.log('Verão')
        break;

    case date <= 6 && date > 3:
        console.log('Outono')
        break;

    case date <= 9 && date > 6:
        console.log('Inverno')
        break;
    
    case date <= 12 && date > 9:
        console.log('Primavera')
        break;
        
    default:
        console.log('Mês invalido! Digite um valor de 1 á 12')
    }
    /*
        verão - 21 dezembro a 20 de março
        outono - 21 de março a 20 junho
        inverno - 21 junho a 22 setembro
        primavera - 23 setembro a 20 dezembro
    */
}

checkSeasons(4)
