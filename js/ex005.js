
        function calcular() {
            let n1 = document.getElementById('n1').value;
            let n2 = document.getElementById('n2').value;
            n1 = Number(n1);
            n2 = Number(n2);
            let media = (n1 + n2) / 2
            let msg = document.getElementById('ex005');
            msg.innerHTML = `<strong>${media}</strong>`;
        }
    