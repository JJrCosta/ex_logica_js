function calcular() {
    let val = document.getElementById('valor').value;
    val = Number(val);
    let dol = 5.16
    let res = val / dol 
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `Cotação atual do Dolar: <br/>
    US$ ${dol}<br/>
    R$ ${val} equivalem a Us$ ${res}`;
}  