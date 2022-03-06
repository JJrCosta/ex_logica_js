function calcular() {
    const msg = document.querySelector('div[class=resultado');
    let n1 = document.querySelector('input[name=n1]').value;
    let n2 = document.querySelector('input[name=n2]').value;
    n1 = Number(n1);
    n2 = Number(n2);
    const area = n1 * n2;
    if ( area < 100 ){
        msg.innerHTML = `<br/> Área Total: ${area} m²<br/> Classificação: TERRENO POPULAR`;
    }else if (area > 500){
        msg.innerHTML = `<br/> Área Total: ${area} m²<br/> Classificação: TERRENO VIP`;
    }else{
        msg.innerHTML = `<br/> Área Total: ${area} m²<br/> Classificação: TERRENO MASTER`;
    }
}    