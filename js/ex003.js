
        function exibir() {
            let nome = document.getElementById('txtName3');
            let sal = document.getElementById('sal3');
            let msg = document.getElementById('ex003');
            msg.innerText = `Funcionário ${nome.value} tem o salário atual de R$ ${sal.value}.`;
        }
    