// função para adicionar filme
function adicionarFilme() {

    // retornar o id:filme para dentro do JS
    var filmeFavorito = document.getElementById("filme").value;
    // condição para que so seja valido a leitura dos links terminados com ".jpg"
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmes(filmeFavorito);
    } else {
      console.error();
    }
    // limpando a caixa de texto após adicionar o link
    document.getElementById("filme").value = "";

}

function listarFilmes(filme) {

    // exibindo o link do campo em uma imagem
    var imagemFilmeFavorito = "<img src=" + filme + ">";
    // retornar o id:listaFilmes para dentro do JS
    var listaFilmes = document.getElementById("listaFilmes");
    // adicionando a imagem do filme dentro da tag listaFilmes para imprimir
    listaFilmes.innerHTML = listaFilmes.innerHTML + imagemFilmeFavorito;

}