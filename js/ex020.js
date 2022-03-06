const msg = document.querySelector('div.resultado');
function verificar() {
    let n = document.getElementById('n').value;
    n = Number(n);
    if (n % 1 === 0) {
        if (n % 2 === 0) {
            msg.innerHTML = `O número ${n} é PAR.`;
        } else {
            msg.innerHTML = `O número ${n} é IMPAR.`;
        }
    }else{
        msg.innerHTML = `BRINCA DIREITO...<br/>O número ${n} não é um número inteiro.`;
    }            
}    