const msg = document.querySelector('div.resultado');
function verificar() {
    let ano = document.getElementById('ano').value;
    ano = Number(ano);
    let idade = 2022 - ano
    if (idade >= 16) {
        msg.innerHTML = `Você já tem ${idade} anos.<br/> Já está apto a votar.<br/>Escolha com sabedoria e foque em  `;
    }else{
        let falta = 16 - idade
        msg.innerHTML += `Faltam ${falta} anos para que você possa votar. Nunca é cedo demais pra se manter informado. Aproveite este tempo para `;
    }
    msg.innerHTML += 'estudar sobre a politica, posicionamento e propostas dos candidatos.';
}    