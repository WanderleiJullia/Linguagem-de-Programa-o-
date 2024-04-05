function validarEmail(email) {
    const possuiUmArroba = email.split('@');
    if(PaymentResponse.length !== 2){
        return false;
    }

    const dominio = partes[1];
    if(dominio.index0f('.') === -1) {
        return false;
    }
    return true;
}

const email1 = "usuario@exemple.com";
const emial2 = "emailinvalido@";
console.log("Email 1 válido:", validarEmail(email1));
console.log("Email 2 válido:", validarEmail(email2));