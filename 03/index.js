const precos = [100, 500, 100, 200, 50];
// 1. ver se tem direito a promocao (ter 5 ou + itens)
// 2. se nao tiver promocao
// 2.1 varrer o array somando o item atual ao total
// 3. se tiver promocao
// 3.2 identificar o item mais barato
// 3.3 totalAPagar = soma - desconto

// percorrer o ARRAY para encontrar o menor valor
// verificar se o item atual é menor que o menor de todos ate agora
// se for, substitui
// se não for, continua procurando ate terminar o array

let soma = 0;
let menor = precos[0];

// FOR OF eh mais indicado para varrer ARRAY
for (let itemAtual of precos) {
    // calcula a soma total dos itens
    soma += itemAtual;

    // se o item atual for  menor que o menor ate agora
    if (itemAtual < menor) {

        // o item atual eh o novo menor
        menor = itemAtual;
    }
}

if (precos.length >= 5) {
    // tem promocao
    console.log(soma - menor);        

} else {
    // nao tem promocao
    console.log(soma);
} 