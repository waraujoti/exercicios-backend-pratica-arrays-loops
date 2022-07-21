const precos = [20, 15, 8, 2, 12];
// 1. varrer todas as possibilidades de compra e venda - no futuro
// 2. ver, para cada uma se eh prejuizo
// 3. se for, anotar o valor
// 4. depois, ver qual o menor prejuizo

let perdaMinima = 999999999999999;

// FOR DE C - Tradicional
// variavel compra vai ser o valor de compra
for (let compra = 0; compra < precos.length; compra++) {

    // FOR DE C - Dentro de outro FOR DE C
    // variavel venda vai ser o valor de venda
    for (let venda = (compra+1); venda < precos.length; venda++) {

        const valorDeCompra = precos[compra];
        const valorDeVenda = precos[venda];
        const prejuizo = valorDeCompra - valorDeVenda;

        // SE o prejuizo for maior que 0, entao eh prejuizo
        if (prejuizo > 0) {

            // SE o valor de prejuizo for menor que a perdaMinima
            if (prejuizo < perdaMinima) {

                // Atualiza o campo com o valor atual
                perdaMinima = prejuizo;
            }
        }
    }
}
console.log(perdaMinima);