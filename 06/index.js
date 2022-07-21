const palavras = ["aveia", "manha", "amora", "aviao", "vespa"];
const primeiraLetra = "d";
const segundaLetra = "v";
// 1. dado um par de letras quaisquer
// 2. imprima as palavras que comecam com essas duas primeiras letras
// 3. varrer o array comparando a primeira e a segunda letra
// 4. se encontrar, grava a palavra e imprime a combinacao

let temALetra = false;
// FOR DE C - Tradicional - para ler o ARRAY
for ( let i = 0; i < palavras.length; i++) {
    // verifica se tem as 2 primeiras letras
    if (palavras[i][0] === primeiraLetra && palavras[i][1] === segundaLetra) {
        // se tiver, muda a variavel pra true
        temALetra = true;
        break;
    }
}
// se a variavel temALetra for TRUE
if (temALetra) {
    // FOR OF // variavel que verifica as palavras do ARRAY
    for (let item of palavras) {
        // variavel que verifica a primeira letra da palavra do ARRAY
        let inicialUm = item[0];
        // variavel que verifica a segunda letra da palavra do ARRAY
        let inicialDois = item[1];
        // se a primeira e a segunda letra forem iguais
        if (inicialUm === primeiraLetra && inicialDois === segundaLetra) {
            // imprime na tela, linha por linha (palavra)
            console.log(item);
        }
    }
    // se a variavel temALetra for FALSE
}   else {
    console.log("NENHUMA");
}



/*
let combinacao = [];

        combinacao.push(item)
        combinacao += item
        combinacao = combinacao + item

console.log(combinacao);
*/