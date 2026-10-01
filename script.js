

const campoBusca =
    document.getElementById("campoBusca");

const filtroCategoria =
    document.getElementById("filtroCategoria");

const cards =
    document.querySelectorAll(".card-comercio");

const mensagemVazia =
    document.getElementById("mensagemVazia");


// Função responsável por filtrar os estabelecimentos

function filtrarComercios() {

    // Pega o texto digitado
    const textoBusca =
        campoBusca.value.toLowerCase().trim();

    // Pega a categoria selecionada
    const categoriaSelecionada =
        filtroCategoria.value;

    // Guarda quantos resultados apareceram
    let quantidadeResultados = 0;


    // Percorre todos os cards
    cards.forEach(function(card) {

        const nome =
            card.dataset.nome.toLowerCase();

        const categoria =
            card.dataset.categoria;


        // Verifica se o nome corresponde à busca
        const correspondeBusca =
            nome.includes(textoBusca);


        // Verifica a categoria
        const correspondeCategoria =
            categoriaSelecionada === "todos" ||
            categoria === categoriaSelecionada;


        // Se atender aos dois critérios
        if (
            correspondeBusca &&
            correspondeCategoria
        ) {

            card.style.display = "block";

            quantidadeResultados++;

        } else {

            card.style.display = "none";

        }

    });


    // Mostra a quantidade de resultados encontrados
let contadorResultados = document.getElementById("contador-resultados");

if (!contadorResultados) {
    contadorResultados = document.createElement("p");
    contadorResultados.id = "contador-resultados";
    mensagemVazia.parentNode.insertBefore(contadorResultados, mensagemVazia);
}

contadorResultados.textContent =
    quantidadeResultados === 1
        ? "1 estabelecimento encontrado"
        : `${quantidadeResultados} estabelecimentos encontrados`;
    // Se nenhum estabelecimento for encontrado

    if (quantidadeResultados === 0) {

        mensagemVazia.style.display = "block";

    } else {

        mensagemVazia.style.display = "none";

    }

}


// Executa a função quando o usuário digita

campoBusca.addEventListener(
    "input",
    filtrarComercios
);


// Executa a função quando muda a categoria

filtroCategoria.addEventListener(
    "change",
    filtrarComercios
);
