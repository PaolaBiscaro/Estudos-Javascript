function verificarOrdem(inicio, fim){
    if(inicio < fim){
        return true
    }else if(inicio > fim){
       return false
    }else{
        return true
    }
}


function verificarNumIntervalo(inicio, fim, num) {
    if(verificarOrdem(inicio, fim)){
        for(let i = inicio; i <= fim; i++){
            if(i === num){
                console.log(`CRESCENTE - O número ${num} está dentro do intervalo ${inicio} a ${fim}`)
            }
        }
    }else if(verificarOrdem(inicio, fim)){
        for(let j = inicio; j >= fim; j--){
            if(j === num){
                console.log(`DECRESCENTE - O número ${num} está dentro do intervalo ${inicio} a ${fim}`)
            }
        }
    }
}

verificarNumIntervalo(10, 1, 5)
verificarNumIntervalo(1, 11, 3)
verificarNumIntervalo(-10, -1, -5)
