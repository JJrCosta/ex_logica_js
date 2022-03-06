function calcular() {
    let dias = document.getElementById('dias').value;
    dias = Number(dias);
    let sal = (dias*(25*8));
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `Dias trabalhados: ${dias} dias<br/>Salário: R$ ${sal.toFixed(2)}`;
}