//2.	Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.

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

 const usuariosMaioresDeIdade = usuario.filter(usuario => usuario.idade > 18);

console.log(usuariosMaioresDeIdade);