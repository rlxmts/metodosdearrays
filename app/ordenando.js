const btOrdenar = document.querySelector('#btnOrdenarPorPreco');
btOrdenar.addEventListener('click', ()=> {
    let livrosOrdenados = livros.sort( (a,b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
})