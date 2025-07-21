let min = 1
let max = 100
let chute = Math.floor((max + min) / 2)
let numeroPensado = 102

if (numeroPensado > max || numeroPensado < min) {
    console.log('Este número ' + numeroPensado + ' não está dentro do permitido! Escolha outro número')
} else {
    while (chute !== numeroPensado) {
        console.log('Chute: ' + chute)

        if (chute > numeroPensado) {
            max = chute - 1
        } else {
            min = chute + 1
        }
        chute = Math.floor((max + min) / 2)
    }

    console.log('O número pensado é: ' + chute)
}

