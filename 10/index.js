const resultados = ["V", "E", "V", "E"];

// 1. imprimir na tela a qtde de pontos ganhos no array

let vitoria = 0; const v = 3;
let empate = 0;  const e = 1;
let derrota = 0; const d = 0;

for (let item = 0; item < resultados.length; item++) {
    //console.log(resultados[item]);

    if (resultados[item] === "V") {
        vitoria++

    } else if (resultados[item] === "E") {
        empate++

    } else if (resultados[item] === "D") {
        derrota++
    }
}

let soma = (vitoria * v) + (empate * e);

console.log(soma);