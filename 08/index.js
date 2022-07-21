//const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
const notas = [100, 100, 100, 50];
// 1. varrer todo o array
// 2. separar a maior nota
// 3. separar a menor nota
// 4. somar o restante
// 5. dividir pela media aritmetica

let maiorNota = notas[0];
let menorNota = notas[0];
let somaNota = 0;
let quantidadeNota = (notas.length - 2);

// FOR DE C pra varrer o array
for (let item = 0; item < notas.length; item++) {
    // variavel const que inclui o valor atual da array, no valor 0
    const valorAtual = notas[item];

    if (valorAtual > maiorNota) {
        maiorNota = valorAtual;
    } // valorAtual = a maior nota

    if (valorAtual < menorNota) {
        menorNota = valorAtual;
    } // valorAtual = a menor nota

    somaNota += valorAtual;
    //ssomaNota = somaNota + valorAtual
}

let nota = ( somaNota - (maiorNota + menorNota) );
let notaFinal = ( nota / quantidadeNota);

console.log(notaFinal);