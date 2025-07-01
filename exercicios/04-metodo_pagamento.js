/*
Elabore um programa que calcule o que deve ser pago por um produto, conforme abaixo:

    Condições de Pagamento:
        - (1) A vista Débito - Recebe 10% de desconto
        - (2) A vista no Dinheiro ou PIX - Recebe 15% de desconto
        - (3) Em duas vezes - Preço normal, sem juros
        - (4) Acima de duas vezes - Preço normal + juros 10%

*/

const valor_compra = 120.0
const forma_pagamento = 1
const parcelamento = 5

if(forma_pagamento === 1){
    console.log("Desconto - 10%\n VALOR TOTAL: R$", valor_compra - (valor_compra* 0.1))

}else if (forma_pagamento === 2){
    console.log("Desconto - 15%\n VALOR TOTAL: R$", valor_compra - (valor_compra* 0.15))

}else if(forma_pagamento === 3 && parcelamento === 2){
    console.log("VALOR TOTAL: R$", valor_compra)

}else if(forma_pagamento === 4 && parcelamento >= 3){
    console.log("Juros - 10%\n VALOR TOTAL: R$", valor_compra + (valor_compra * 0.1))
    
}else{
    console.log("VALOR TOTAL: R$", valor_compra)
}