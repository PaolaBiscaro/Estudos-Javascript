//Para multiplos de 3 imprima 'Fizz'
//Para multiplos de 5 imprima 'Buzz'
//Para ambos imprima 'FizzBuzz'

let i = 1

while (i <= 100) {
    if ((i % 3 === 0) && !(i % 5 === 0)) {
        console.log('Fizz - ', i)

    } else if ((i % 5 === 0) && !(i % 3 === 0)) {
        console.log('Buzz - ', i)

    } else if ((i % 5 === 0) && (i % 3 === 0)){
        console.log('FizzBuzz - ', i)

    }

    i++
}