function calcular() {
    const msg1 = document.getElementById('media')
    const msg2 = document.getElementById('result')
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    n1 = Number(n1);
    n2 = Number(n2);
    let media = (n1 + n2) / 2;

    if (media >= 7){    
        msg1.innerHTML = `<strong>${media}</strong>`;
        msg2.innerHTML = 'APROVADO';
    }else if (media < 5){
        msg1.innerHTML = `<strong>${media}</strong>`;
        msg2.innerHTML = 'REPROVADO';
    }else{
        msg1.innerHTML = `<strong>${media}</strong>`;
        msg2.innerHTML = 'RECUPERAÇÃO';
    }      
}    