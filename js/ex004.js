
        function somar() {
            let n1 = document.getElementById('n1').value;
            let n2 = document.getElementById('n2').value;
            n1 = Number(n1)
            n2 = Number(n2)
            let s = n1 + n2
            let msg = document.getElementById('ex004');
            msg.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
        }
    