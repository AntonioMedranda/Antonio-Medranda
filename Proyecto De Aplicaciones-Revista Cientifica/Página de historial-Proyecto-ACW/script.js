function filterArticles() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('article-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                found = true;
                break;
            }
        }
        rows[i].style.display = found ? '' : 'none';
    }
}

function submitFeedback() {
    const feedback = document.getElementById('user-feedback').value;
    if (feedback) {
        alert('Comentario enviado: ' + feedback);
        document.getElementById('user-feedback').value = ''; // Limpiar el campo
    } else {
        alert('Por favor, escribe un comentario antes de enviar.');
    }
}
