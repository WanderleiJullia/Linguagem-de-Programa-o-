function gerarEmail(nome) {

const partesNome = nome.trim().slip("");

const primeiroNome = partesNome[0];

const ultimoNome = partesNome[partesNome.length - 1];

const email = primeiroNome.toLowerCase() + "." + ultimoNome.toLowerCase() + "facens.br";

return email;

const nomeVariavel = "Seu nome completo";
const emilGerado = gerarEmail(nomeVariavel);

console.log(emilGerado);

}