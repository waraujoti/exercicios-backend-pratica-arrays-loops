//const dadoCorrompido = "*Canis %lupus )familiaris"
//const dadoCorrompido = "Felis) silvestris *catus&"
const dadoCorrompido = "$Ailuropoda@ melanoleuca!"

// 1. olhar cada um dos caracteres
// 2. ver se pode o caractere em questao
// 3. se for permitido, escreve
// 4. se nao for permitido, ignoro e olho o proximo
// 5. quando acabarem os caracteres, eh soh imrprimir o que escrevi

let dadoPurificado = "";
for (let caracter of dadoCorrompido) {
    // FOR OF eh mais indicado para ler e percorrer todo o ARRAY
    if (caracter === "!" || caracter === "@" || caracter === "#" || caracter === "$" || caracter === "%" || caracter === "&" || caracter === "*" || caracter === "(" || caracter === ")") {

    } else {
        dadoPurificado = dadoPurificado + caracter
        // dadoPurificado += caracter
    }
}
console.log(dadoPurificado)