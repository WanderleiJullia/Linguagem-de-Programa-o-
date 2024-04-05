function contarVogais(string) {
    const vogais ='aeiou';
    let contador = 0;

    for (let letra of string){
        if (vogais,includes(letra)) {
            contador++;
        }
    }

    return contador;
}

const texto = "Esta é uma frase de exemplo";
console.log("Número de vogais:", contarVogais(texto));