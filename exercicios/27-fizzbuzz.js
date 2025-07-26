//Para multiplos de 3 imprima 'Fizz'
//Para multiplos de 5 imprima 'Buzz'
//Para ambos imprima 'FizzBuzz'

let i = 1

while (i <= 100) {
    if ((i % 3 === 0) && !(i % 5 === 0)) {
        console.log('Fizz - ', i)

    } else if ((i % 5 === 0) && !(i % 3 === 0)) {
        console.log('Buzz - ', i)

    } else if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log('FizzBuzz - ', i)

    }

    i++
}


//Outra resolção

let num = 1;
while (num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
    num++;
}