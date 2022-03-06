const msg = document.querySelector('div.resultado');
function verificar() {
    let ano = document.getElementById('ano').value;
    ano = Number(ano);
    let idade = 2022 - ano;
    if (idade > 18) {
        let pass = idade - 18;
        msg.innerHTML = `Você tem ${idade} anos.<br/> Já se  passaram ${pass} anos após o seu alistamento`;
    }else if (idade == 18) {
        msg.innerHTML = `Você tem ${idade} anos. Este é o ano do seu alistamento.`;
    }else{
        let falta = 18 - idade
        msg.innerHTML = `Você tem ${idade} anos. Faltam ${falta} anos para que você possa se alistar.`;
    }
}    