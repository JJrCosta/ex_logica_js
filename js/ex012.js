function calcular() {
    let val = document.querySelector('input.barra_imput').value;
    val = Number(val);
    let desc = val * 0.05;
    let val2 = val - desc;
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `PRODUTO EM PROMOÇÂO!<br/> Valor cheio: R$ ${val.toFixed(2)}<br/> Você recebeu R$ ${desc.toFixed(2)} de desconto e seu produto sairá por: <br/>R$ ${val2.toFixed(2)}`;
}