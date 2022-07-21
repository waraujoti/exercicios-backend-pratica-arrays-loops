const sequencia = [">", ">", ">", "<", ">"];
const img = [0, 1, 2, 3, 4, 5, 6];

// 1. varrer a sequencia de imagens
// 2. se for >, soma um
// 3. se for <, subtrai um
// 4. se indice for > 6, indice = 0
// 5. se indice for < 0, indice = 6

let indice = 0;
// FOR OF // sequencia de cliques
for (let item of sequencia) {

    // se for >, soma um
    if (item === ">") {
        indice++;

    // senao, se for <, subtrair um
    } else {
        indice--;
    }

    // se indice for < 0, indice = 6
    if (indice < 0) {
        indice = 6;

    // se indice for > 6, indice = 0
    } else if (indice > 6) {
        indice = 0;
    }
}
console.log(indice);