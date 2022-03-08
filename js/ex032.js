function jogar () {
    const msg = document.querySelector('div[class="resultado"]');
    const player = document.querySelector('input[name="pitaco"]').value;
    const pc = Math.round((Math.random() * (4 - 0 + 0) + 1));
    if (player < 6 && player > 0) {
        if (player == pc) {
            msg.innerHTML = "ACERTOU!";
        } else {
            msg.innerHTML = "ERROU!";
        }
        msg.innerHTML += `Eu escolhi ${pc}.`;  
    }else{
        msg.innerHTML = `O número ${player} não está entre 1 e 5, escolha novamente.`;
    }
}
