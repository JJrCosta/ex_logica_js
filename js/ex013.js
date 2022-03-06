function calcular() {
    let sal = document.querySelector('input.barra_imput').value;
    sal = Number(sal);
    sal *= 1.15;
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `REAJUSTE SALARIAL<br/> Valor do novo salário:<br/> R$ ${sal.toFixed(2)}`;
}