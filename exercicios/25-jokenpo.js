//Crie um algoritmo que jogue jokenpo contra o computador.
//Use o método aleatorio do math
const prompt = require('prompt-sync')()
let round = true

function nameChoice(choice) {
    if (choice === 1) {
        return 'Pedra'

    } else if (choice === 2) {
        return 'Papel'

    } else if (choice === 3) {
        return 'Tesoura'

    } else {
        return 'Opção inválida!'
    }
}


function mensageEndGame(player) {
    if (player === 1) {
        console.log('Jogador 1 venceu!')

    } else {
        console.log('Jogador 2 venceu!')
    }
}

function playJokenpoComputer() {
    let choiceRandom = Math.random()
    let result

    switch (true) {
        case choiceRandom < 0.33:
            result = 1 //Pedra
            break;

        case choiceRandom < 0.66:
            result = 2 //Papel
            break;

        default:
            result = 3 //Tesoura
    }
    return result
}

function playJokenpo(choice) {
    let choiceComputer = playJokenpoComputer()

    console.log('Computador escolheu: ' + nameChoice(choiceComputer))

    if (choice === choiceComputer) {
        console.log('Empate')

    } else if ((choice === 1 && choiceComputer === 3) ||
        (choice === 2 && choiceComputer === 1) ||
        (choice === 3 && choiceComputer === 2)) {
            mensageEndGame(1) //Jogador 1 vence!

    } else {
       mensageEndGame(2) //Computador vence!
    }
}


do {
    console.log("(1) Pedra\n(2) Papel\n(3) Tesoura\n(0) Sair")

    let choicePlayer1 = parseInt(prompt('Digite sua escolha: '))

    if (choicePlayer1 === 0) {
        round = false
        console.log("Saindo do jogo...");

    } else if ([1, 2, 3].includes(choicePlayer1)) {
        console.log('Você escolheu: ' + nameChoice(choicePlayer1));

        playJokenpo(choicePlayer1);

    } else {
        console.log("Opção inválida, tente novamente.");
    }

} while (round)

//(1) Pedra - Ganha de Tesoura, perde pro papel
//(2) Papel - Ganha de Pedra, perde pra tesoura
//(3) Tesoura - Ganha de Papel, perde pra Pedra