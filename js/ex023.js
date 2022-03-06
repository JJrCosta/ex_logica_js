const msg = document.querySelector('div.resultado');
function calcular() {
    let val = document.querySelector('input.barra_imput').value;
    let gen = document.querySelector('input[name="gen"]:checked').value;
    let desconto = 0;
    val = Number(val);
    msg.innerHTML = "EM COMEMORAÇÂO AO DIA DAS MULHERES VOCÊ ACABA DE RECEBER UM DESCONTO EM SUA COMPRA.<br/>";
    if (gen === 'F') {
        desconto = val * 0.13;
        val -= desconto
        msg.innerHTML += `<br/>Valor do desconto: R$ ${desconto.toFixed(2)}<br/>Valor a ser pago: R$ ${val.toFixed(2)}<br/> <br/>PARABÉNS PELO SEU DIA!<br/>FELIZ DIA DA MULHER.`; 
    } else {
        desconto = val * 0.05;
        val -= desconto
        msg.innerHTML += `<br/>Valor do desconto: R$ ${desconto.toFixed(2)}<br/>Valor a ser pago: R$ ${val.toFixed(2)}<br/> <br/>Não se esqueca de homenagear as bravas guerreiras que fazem parte da sua vida.`; 
    }
    
}    