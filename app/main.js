let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosAPI();

async function getLivrosAPI(){
    
    try{
        const api = await fetch(endPointApi);
        livros = await api.json();    
        livrosComDesconto = aplicarDesconto(livros)    
        exibirLivros(livrosComDesconto);
        
    }catch(error){
        livrosContainer.innerHTML = `<p>Parece que houve um erro ao carregar os livros: ${error}</p>`
    }
}