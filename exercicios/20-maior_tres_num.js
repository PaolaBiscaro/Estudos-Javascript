function verificarMaiorNum(num1, num2, num3){
    maiorNum = num1

    if(num2 > maiorNum){
        maiorNum = num2
        console.log(maiorNum)
    }if(num3 > maiorNum){
        maiorNum = num3
        console.log(maiorNum)
    }

   console.log('O maior número é ' + maiorNum)
}

verificarMaiorNum(4, 5, 8)

//Outra possivel solução

function maiorNumero(n1, n2, n3){
    if(n1 >= n2 && n1 >= n3){
        console.log(n1 + ' é o maior número');
    } else if(n2 >= n1 && n2 >= n3){
        console.log(n2 + ' é o maior número');
    } else {
        console.log(n3 + ' é o maior número');
    }
}

maiorNumero(1, 2, 3)
maiorNumero(2, 2, 1)