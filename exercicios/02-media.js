/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Classificação:
    - Média menor que 5, reprovação
    - Média entre 5 e 7, recuperação
    - Média acima, ou igual a 7, passou de semestre
*/

const nota_1 = 5
const nota_2 = 5
const nota_3 = 5

const media = (nota_1+nota_2+nota_3)/3

if(media < 5){
    console.log('Reprovado - NOTA: ', media.toFixed(2))
}else if (media < 7  && media >= 5){
    console.log('Recuperação - NOTA: ', media.toFixed(2))
}else if (media >= 7 && media <=10){
    console.log('Aprovado - NOTA:', media.toFixed(2))
}else{
    console.log("Notas invalidas")
}

