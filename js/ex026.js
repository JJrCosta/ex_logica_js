function verificar() {
    const msg = document.querySelector('div[class=resultado');
    let n1 = document.querySelector('input[name=n1]').value;
    let n2 = document.querySelector('input[name=n2]').value;
    n1 = Number(n1);
    n2 = Number(n2);
    if (n1 > n2){
        msg.innerHTML = `<br/> ${n1} > ${n2}<br/>O primeiro valor é maior.`;
    }else if (n2 > n1){
        msg.innerHTML = `<br/> ${n1} < ${n2}<br/>O segundo valor é maior.`;
    }else{
        msg.innerHTML = `<br/> ${n1} = ${n2}<br/>Os valores são iguais.`;
    }
}    