const valorTotal = document.querySelector('#valor');
const valorSomado = livros.reduce( (acc, atual)=> acc + atual.preco, 0);

valorTotal.innerText = valorSomado.toFixed(2);

