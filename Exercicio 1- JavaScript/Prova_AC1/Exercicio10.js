function ehPalindromo(str){
    const strLimpa = str.toLowerCase().replace(/\s/g, '');


    return strLimpa == strLimpa.split('').reverse().join('');
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("Amor a Roma"));
console.log(ehPalindromo("javacript"));
