const msg = document.querySelector('div.resultado');
function calcular() {
    let dist = document.querySelector('input.barra_imput').value;
    dist = Number(dist);
    if (dist <= 200) {
        dist *= 0.5; 
    } else {
        dist *= 0.45; 
    }
    msg.innerHTML += `<br/>Valor da passagem: R$ ${dist.toFixed(2)}<br/>`; 
}    