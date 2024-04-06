class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  

  const itensKimetsunoYaiba = [
    new Produto('Espadas Nichirin', 50),
    new Produto('VarinBrincos de Hanafudaha', 30),
    new Produto('Máscara de Javali', 20),
    new Produto('Pingentes de Glicínia', 100),
    new Produto('Uniforme de Caçador de Demônios', 15)
  ];


  const produtoCaro = itensKimetsunoYaiba.find(produto => produto.preco > 100);
  
  
  if (produtoCaro) {
    produtoCaro.nome = 'Produto Caro';
  } else {
    console.log("Não foi encontrado nenhum produto caro acima a R$ 100,00.");
  }
  
  console.log("Lista de produtos atualizada:", itensKimetsunoYaiba);
  