function calcular() {
    const msg = document.querySelector('div[class="resultado"]');
    const peso = Number(document.querySelector('input[name="peso"]').value);
    let altura = Number(document.querySelector('input[name="altura"]').value);
    altura *= altura;
    const imc = peso/altura;
    msg.innerHTML = `Valor do IMC: ${imc.toFixed(2)}<br/>Classificação: `;
    if (imc <= 18.5) {
        msg.innerHTML += 'Abaixo do peso';
    } else if (imc > 18.5 && imc <= 25) {
        msg.innerHTML += 'Peso ideal';
    } else if (imc > 25 && imc <= 30) {
        msg.innerHTML += 'Sobrepeso';
    } else if (imc > 30 && imc <= 40) {
        msg.innerHTML += 'Obesidade 1';
    } else {
        msg.innerHTML += 'Obseidade 2';
    }
}