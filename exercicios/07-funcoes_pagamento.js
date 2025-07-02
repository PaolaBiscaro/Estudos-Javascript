/*
Elabore um programa que calcule o que deve ser pago por um produto, conforme abaixo:

    Condições de Pagamento:
        - (1) A vista Débito - Recebe 10% de desconto
        - (2) A vista no Dinheiro ou PIX - Recebe 15% de desconto
        - (3) Em duas vezes - Preço normal, sem juros
        - (4) Acima de duas vezes - Preço normal + juros 10%

*/
function aplicarDesconto (valor_compra, desconto){
    return valor_compra - (valor_compra * (desconto/100))
}

function aplicarJuros(valor_compra, juros){
    return valor_compra + (valor_compra * (juros/100))
}


const valor_compra = 120.0
const forma_pagamento = 4
const parcelamento = 5

if(forma_pagamento === 1){
    console.log(aplicarDesconto(valor_compra, 10))

}else if (forma_pagamento === 2){
    console.log(aplicarDesconto(valor_compra, 15))

}else if(forma_pagamento === 3 && parcelamento <= 2){
    console.log("VALOR TOTAL: R$", valor_compra)

}else if(forma_pagamento === 4 && parcelamento >= 3){
    console.log(aplicarJuros(valor_compra, 10))
    
}else{
    console.log("VALOR TOTAL: R$", valor_compra)
}