function calcular() {
    let largura = document.getElementById('largura').value;
    let altura = document.getElementById('altura').value;
    largura = Number(largura);
    altura = Number(altura);
    let area = largura*altura;
    let tinta = area/2;
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `Área total: <br/>
    ${area} m²<br/>
    Serão necessários ${tinta} Litros de tinta para a cobertura.`;
} 