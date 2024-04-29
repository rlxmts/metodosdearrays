const livrosContainer = document.querySelector('.livros');

function exibirLivros(listaDeLivros){

        livrosContainer.innerHTML = '';
    listaDeLivros.forEach( livro => {
        livrosContainer.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            <p hidden>${livro.quantidade}</p>
            </div>
        </div>        `
        if(livro.quantidade <= 0){
            let img = document.querySelector('.livro__imagens');
            img.classList.add('indisponivel');
        }
    });

}