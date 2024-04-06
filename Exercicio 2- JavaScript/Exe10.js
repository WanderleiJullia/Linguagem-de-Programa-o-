
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numquepodedivipor3 = numeros.filter(numero => numero % 3 === 0);


const quadradoDosnumquepodedivipor3 = numquepodedivipor3.map(numero => numero ** 2);

console.log("Números divisíveis por 3 e seus quadrados:", quadradoDosNumerosDivisiveisPor3);
