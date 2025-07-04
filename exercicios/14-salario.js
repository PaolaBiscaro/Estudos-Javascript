/*Crie um programa que calcule e imprima o salario a ser transferido para um funcionario. 
Para fazer o calculo precisa receber o valor bruto do salario e o adicional dos beneficios.

Utilize as seguintes aliquotas para calcular o percentual de imposto:

    - De R$0.00 a R$1100.00 = 5%
    - De R$1100.01 a R$2500.00 = 10%
    - Maior que R$2500.00 = 15%
*/

const {prints} = require('./auxiliares.js')

function calcularImposto(salarioBruto){
    if (salarioBruto >= 1100 && salarioBruto <= 0){
        const salario = salarioBruto * 0.05 
        return salario

    }else if(salarioBruto > 1100.01 && salarioBruto < 2500.0){
        const salario = salarioBruto * 0.1
        return salario

    }else{
        const salario = salarioBruto * 0.15
        return salario
    } 
}

function definirSalario(salarioBruto, adicional){
    const salario_total = (salarioBruto - calcularImposto(salarioBruto)) + adicional

    return salario_total
}


prints(definirSalario(2000, 150))
prints(calcularImposto(2000))