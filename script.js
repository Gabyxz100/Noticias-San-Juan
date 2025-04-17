document.getElementById('add-news-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (author && title && content) {
        const newsSection = document.querySelector('#noticias');
        const newArticle = document.createElement('article');
        newArticle.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Autor:</strong> ${author}</p>
            <p>${content}</p>
        `;
        newsSection.appendChild(newArticle);
        
        alert('Noticia agregada correctamente');
        document.getElementById('add-news-form').reset();
    } else {
        alert('Por favor, completa todos los campos');
    }
});
