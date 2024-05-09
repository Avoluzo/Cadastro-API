document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://663d54ba17145c4d8c394d85.mockapi.io/api/cadastro/users';
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('sem resposta.');
        })
        .then(data => {
            data.forEach(user => {
                const row = tableBody.insertRow();
                const idCell = row.insertCell(0);
                const nome = row.insertCell(1);
                const email = row.insertCell(2);
                const telefone = row.insertCell(3);


                idCell.textContent = user.id;
                nome.textContent = user.nome;
                email.textContent = user.email;
                telefone.textContent = user.telefone;
            });
        })
        .catch(error => console.error('Falha de data:', error));
});