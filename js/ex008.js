function calcular() {
    let dist = document.getElementById('dist').value;
    dist = Number(dist);
    let msg = document.querySelector('div.resultado');
    msg.innerHTML = `${dist}METROS correspondem a: <br/>
    ${dist/1000}Km <br/>
    ${dist/100}Hm <br/>
    ${dist/10}Dam <br/>
    ${dist*10}dm <br/>
    ${dist*100}cm <br/>
    ${dist*1000}mm <br/>
    `;
} 