function calcular() {
    const msg = document.querySelector('div[class=resultado');
    const nome = document.querySelector('input[name=nome]').value;
    let tempo = document.querySelector('input[name=tempo]').value;
    let sal = document.querySelector('input[name=sal]').value;
    let reajuste = 0;
    sal = Number(sal);
    tempo = Number(tempo);
    if (tempo < 3){
        reajuste = sal * 1.03;
    }else if (tempo >= 10){
        reajuste = sal * 1.20;
    }else{
        reajuste = sal * 1.125;
    }
    msg.innerHTML = `<br/>REAJUSTE SALARIAL<br/> <br/>Funcionário: ${nome} <br/> Salário anterior: R$ ${sal.toFixed(2)}<br/> Tempo de Empresa: ${tempo} anos <br/> Novo Salário: R$ ${reajuste.toFixed(2)}`;
}    