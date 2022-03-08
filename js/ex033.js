function calcular() {
    const msg = document.querySelector('div[class="resultado"]');
    const valorImovel = document.querySelector('input[name="valorImovel"]').value;
    let parcelas = document.querySelector('input[name="parcela"]').value;
    const sal = document.querySelector('input[name="sal"]').value;
    parcelas *= 12;
    let parcelaImovel = valorImovel / parcelas;
    let requisitoMin = sal * 0.3;
    if (parcelaImovel > requisitoMin) {
        msg.innerHTML = 'Não aprovado';
    } else {
        msg.innerHTML = 'Aprovado';
    }
}