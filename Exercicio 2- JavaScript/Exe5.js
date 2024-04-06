// 5.	Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro e Gato que herdam de Animal e implementam o método emitirSom de forma diferente para cada classe.
class Animal {
    emitirSom() {
      console.log("Som genérico de um animal do Black Clover.");
    }
  
    correr() {
      console.log("O animal está correndo.");
    }
  }
  

  class Onça extends Animal {
    emitirSom() {
      console.log("Fala do Onça do Kimetsu no Yaiba: URARRRRRRRRRR");
    }
  }
  

  class jaguatirica extends Animal {
    emitirSom() {
      console.log("Bafo de Fogo do Kimetsu no Yaiba: MIAUUUUUUUUUUUUUUUUU");
    }
  }

  const burro = new Burro();
  const dragão = new Dragão();
  
  burro.emitirSom(); 
  burro.correr();    
  
  dragão.emitirSom();    
  dragão.correr();        
  