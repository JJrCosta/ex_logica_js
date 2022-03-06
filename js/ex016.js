function calcular() {
    let cigarros = document.getElementById('cigarros').value;
    let anos = document.getElementById('anos').value;
    cigarros = Number(cigarros);
    anos = Number(anos);
    cigarros *= 10;
    let dias = (anos*365); //transforma o total de anos em dias.
    let reduc = (dias*cigarros)/60/24 //Contabiliza os minutos e transforma de volta em dias.
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `Redução de tempo de vida:<br/>${reduc.toFixed(2)} dias`;
}