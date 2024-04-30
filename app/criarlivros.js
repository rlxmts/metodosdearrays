const livrosContainer = document.querySelector('.livros');

function exibirLivros(listaDeLivros){

        livrosContainer.innerHTML = '';
    listaDeLivros.forEach( livro => {

        let disponibilidade = verificaDisponibilidade(livro);

        livrosContainer.innerHTML += `
        <div class="livro">
            <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            <p hidden>${livro.quantidade}</p>
            </div>
        </div>        `
})
}

function verificaDisponibilidade(livro){
    if( livro.quantidade > 0){
       return 'livro__imagens';
    }else{
        return 'indisponivel';
    }
}