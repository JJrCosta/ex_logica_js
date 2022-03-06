function jogar() {
    const msg = document.querySelector('div[class="resultado"]');
    const player = document.querySelector('input[name="game"]').value;
    let pc = Math.round((Math.random() * (2 - 0 + 0) + 0));
    if (player == 0 && pc == 2 || player == 1 && pc == 0 || player == 2 && pc == 1) {
        msg.innerHTML = "<br/><p style='font-size: 2rem'>Você venceu!</p><br/>";
    } else if (player == pc ) {
        msg.innerHTML = "<br/><p style='font-size: 1.5rem'>Deu empate. Bora mais uma?<p><br/>";
    } else {
        msg.innerHTML = "<br/><p style='font-size: 2rem'>Você perdeu.</p><br/>";
    }
    if (pc == 0) {
        pc = 'Pedra';
    } else if (pc == 1) {
        pc = 'Papel';
    } else {
        pc = 'Tesoura';
    }
    msg.innerHTML += `<br/> Eu escolhi ${pc}.`;
}