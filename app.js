// console.log(dados);

let section = document.getElementById("search-results");
console.log(section);

for (let data of data) {
    section.innerHTML =
        <div class="result-item">
            <h2>=${data.title}</h2>
            <p class="descricao-meta">${data.description}</p>
        </div>
}