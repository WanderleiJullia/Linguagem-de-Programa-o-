
class Usuario {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }

   const usuario =[
    new Usuario ('Tanjiro Kamado', 15),
    new Usuario ('Nezuko Kamado',16),
    new Usuario ('Zenitsu Agatsuma',15),
    new Usuario ('Inosuke Hashibira',19)
 ];

 const UsuarioEncontrado = usuario.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);

 if (UsuarioEncontrado) {
     console.log(`O primeiro  velho  com idade entre 25 e 30 anos é: ${UsuarioEncontrado.nome}`);
 } else {
     console.log("Não foi encontrado nenhum velho com idade entre 25 e 30 anos.");
 }