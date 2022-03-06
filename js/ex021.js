const msg = document.querySelector('div.resultado');
function verificar() {
    let ano = document.getElementById('ano').value;
    ano = Number(ano);
    if ((ano%4==0) && (ano%100!=0) || (ano%400==0)) {
        msg.innerHTML = `Ano ${ano}: BISSEXTO.`;
    }else{
        msg.innerHTML = `Ano ${ano}: NÃO BISSEXTO.`;
    }            
}    