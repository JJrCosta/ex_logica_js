const msg = document.querySelector('div.resultado');
function verificar() {
    let vel = document.getElementById('vel').value;
    vel = Number(vel);
    if (vel > 80) {
        let excesso = vel - 80;
        let multa = excesso*5;
        msg.innerHTML = `ALERTA!<br/>Você excedeu o Limite de Velocidade em ${excesso} Km/h.<br/> E foi multado no valor de:<br/>R$ ${multa.toFixed(2)}<br/>`;
    }
    msg.innerHTML += 'Dirija com cuidado e utilize sempre o cinto de segurança.';
}