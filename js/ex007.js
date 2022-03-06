
function calcular() {
    let n = document.getElementById('n').value;
    n = Number(n);
    let dob = n * 2;
    let ter = n / 3;
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `O dobro de ${n} é ${dob} e um terço é ${ter}.`;
}