function verificar() {
    const msg = document.querySelector('div.resultado');
    let a = document.querySelector('input[name="A"]').value;
    let b = document.querySelector('input[name="B"]').value;
    let c = document.querySelector('input[name="C"]').value;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if (a < b+c && b < c+a && c < a+b ){
        msg.innerHTML = "É possível formar um triângulo.";
    }else{
        msg.innerHTML = "Não é possível formar um triângulo.";
    } 
}    