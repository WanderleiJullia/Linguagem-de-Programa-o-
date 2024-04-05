function inverterString(str) {

return str.split('').reverse().join('');
}

const stringOriginal = "Exemplo de strink";

const stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);

