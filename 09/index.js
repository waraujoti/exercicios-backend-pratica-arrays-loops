const palpite = "a";
const palavra = "abelha";

// contar a quantidade de palpites dentro da palavra

let acerto = 0;

for ( let item = 0; item < palavra.length; item++) {
    // SE a variavel palavra[item] for identico
    if (palavra[item] === palpite) {
        // Contar a quantidade de palpites
        acerto++;
    }
}
console.log(acerto);