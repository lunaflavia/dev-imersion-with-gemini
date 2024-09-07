function search(event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();
 
    // Obtém a seção onde os resultados da busca serão exibidos
    let section = document.getElementById("search-results");

    let searchInput = document.getElementById("search-input").value.toLowerCase();

    // Se o searchInput for exatamente igual uma string vazia
    if (!searchInput) {
        section.innerHTML = "Not found. You didn't search for a pet-friendly place."
        return
    }

    // Inicia uma string vazia para armazenar o conteúdo HTML dos resultados
    let content = "";

    // Itera sobre cada resultado na lista de dados
    for (let result of data) {
        const title = result.title.toLowerCase();
        const type = result.type.toLowerCase();
        const description = result.description.toLowerCase();
        const tags = result.tags.toLocaleLowerCase();
        const imageUrl = result.ImageUrl;

        //Se o title includes searchInput
        if (title.includes(searchInput) || type.includes(searchInput) || description.includes(searchInput) || tags.includes(searchInput)) {
            // Cria um novo elemento
            content += `
                <div class="result-item shadow-transition">
                    <a href="${result.link}" target="_blank">
                        <div class="result-flex">
                            <img class="place-image" src="${imageUrl}" />

                            <div class="description">
                                <h2>${result.title}</h2> 
                                <p class="meta-description">${result.description}</p> 
                                <h4>${result.type}</h4>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }
        // Cria um novo elemento HTML para cada item do resultado, incluindo título, descrição, tipo e link

    }

    if (!content) {
        content = "<p>Not found</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = content;
}
