const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
const letra = "m";

// 1. olhar para o array
// 2. comparar a primeira letra da string no array
// 3. encontrar quantas string estao erradas
// 4. calcular qtas criancas perderam falando a fruta com a letra errada

let diferente = 0;

// FOR OF // variavel que verifica as palavras do ARRAY
for (let fruta of palavras) {
    // variavel que verifica a primeira letra da palavra do ARRAY
    let inicial = fruta[0];
    // se a primeira letra for diferente
    if (inicial !== letra) {
        // soma + 1 na variavel diferente
        diferente++
        //diferente += 1;
    }
}
console.log(diferente);