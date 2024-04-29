const btn = document.querySelectorAll('.btn');

btn.forEach( botao => botao.addEventListener( 'click', ()=> {
    if(botao.textContent == 'LIVROS DISPONÍVEIS'){
        let livrosDisponiveis = livros.filter( livro => 
            livro.quantidade >= 1
        )
        exibirLivros(livrosDisponiveis);
    }else{
        filtrarLivros(botao.value);
    }
}))

function filtrarLivros(textoDoBotao){
    let livrosFiltrados = livros.filter( livro => 
        livro.categoria == textoDoBotao
    )
    exibirLivros(livrosFiltrados);
}
