
        function exibir() {
            let n = document.getElementById('n').value;
            n = Number(n);
            let ant = n-1;
            let sus = n+1;
            let msg = document.getElementById('ex006');
            msg.innerHTML = `O antecessor de ${n} é ${ant} e seu sucessor é ${sus}.`;
        }
    