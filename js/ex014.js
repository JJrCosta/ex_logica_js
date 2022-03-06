function calcular() {
    let dist = document.getElementById('dist').value;
    let dias = document.getElementById('dias').value;
    dist = Number(dist);
    dias = Number(dias);
    let val = (dist*0.2)+(dias*90);
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `ORÇAMENTO DE LOCAÇÂO DE VEÍCULO<br/> Valor do orçamento para ${dias} dias e ${dist} Km rodados:<br/> R$ ${val.toFixed(2)}`;
}    