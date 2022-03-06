function calcular() {
    let a = document.querySelector('input.barra_imput').value;
    let b = document.querySelector('input.barra_imput').value;
    let c = document.querySelector('input.barra_imput').value;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let delta = (b**2)-(4*a*c);
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `&Delta; = ${delta}`;
}