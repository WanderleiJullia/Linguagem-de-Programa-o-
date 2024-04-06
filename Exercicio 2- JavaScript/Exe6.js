
class Livro {
    constructor(titulo, paginas) {
      this.titulo = titulo;
      this.paginas = paginas;
    }
  }
  
 
  const livrosDosMagosBlackClover = [
    new Livro('O Despertar de Tanjiro', 6262),
    new Livro('Caminho da Espada', 262),
    new Livro('Herança de Sangue', 5151),
    new Livro('Laços de Amizade', 262)
  
  ];
  
 
  const livrosComMaisDe300Paginas = livrosDosMagosBlackClover.filter(livro => livro.paginas > 300);
  
  console.log("Livros dos Magos de Kimetsu no Yaiba com mais de 300 páginas:", livrosComMaisDe300Paginas);
  