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

const nomeMAIUSCULO = usuario.map(usuario => usuario.nome.toUpperCase());

console.log(nomeMAIUSCULO);

