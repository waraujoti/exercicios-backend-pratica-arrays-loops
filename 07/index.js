//const disparos = [0, 10, 50, 70, 80, 30]             // ELIMINADO
const disparos = [0, 50, 90, 80, 100, 80, 40]        // APROVADO = 4
// 1. varrer todo o ARRAY
// 2. contar quantos disparos foram acima de 70 pontos
// 3. Se >= 3, trazer a quantidade de acerto
// 4. Se < 3, trazer ELIMINADO

let soma = 0;
let minimo = 70;

if (disparos.length >= 3) {
    for (let pontos of disparos) {
        if (pontos >= minimo) {
            soma++;
        }
    }
}

if (soma >= 3) {
    console.log(soma);
} else {
    console.log("ELIMINADO");
}

// /* OPCAO 2 - COM VARIAVEL BOLLEANO */
// let aprovado = false;
// for (let item = 0; item < disparos.length; item++) {
//     const valorAtual = disparos[item];
//     if (valorAtual >= minimo) {
//         aprovado = true;
//         break;
//     }
// }

// if (aprovado) {
//     for (let pontos of disparos) {
//         if (pontos >= minimo) {
//             soma++;
//         } 
//     }
// }

// if (soma < 3) {
//     console.log("ELIMINADO")
// }
// console.log(soma);