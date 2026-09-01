let sanduiche = "";
let preco = 0;

let lista = [];
let quantidade = 0;


function burger() {
    sanduiche = "X-Burger";
    preco = 15;
}

function salada() {
    sanduiche = "X-Salada";
    preco = 18;
}

function xbacon() {
    sanduiche = "X-Bacon";
    preco = 20;
}


function mostrarAcompanhamentos() {

    let escolha = prompt(
        "Escolha os acompanhamentos:\n" +
        "1 - Maionese - R$ 2\n" +
        "2 - Carne - R$ 2\n" +
        "3 - Queijo - R$ 2\n" +
        "4 - Bacon - R$ 2\n" +
        "5 - Salada - R$ 2\n" +
        "6 - Finalizar"
    );

    while (escolha != 6 && quantidade < 5) {

        if (escolha == 1) {
            maionese();
        }

        else if (escolha == 2) {
            carne();
        }

        else if (escolha == 3) {
            queijo();
        }

        else if (escolha == 4) {
            bacon();
        }

        else if (escolha == 5) {
            saladaAcomp();
        }

        else {
            alert("Opção inválida!");
        }

        if (quantidade < 5) {

            escolha = prompt(
                "Escolha os acompanhamentos:\n" +
                "1 - Maionese - R$ 2\n" +
                "2 - Carne - R$ 2\n" +
                "3 - Queijo - R$ 2\n" +
                "4 - Bacon - R$ 2\n" +
                "5 - Salada - R$ 2\n" +
                "6 - Finalizar"
            );

        }
    }
}


function maionese() {
    lista.push("Maionese");
    quantidade++;
}

function carne() {
    lista.push("Carne");
    quantidade++;
}

function queijo() {
    lista.push("Queijo");
    quantidade++;
}

function bacon() {
    lista.push("Bacon");
    quantidade++;
}

function saladaAcomp() {
    lista.push("Salada");
    quantidade++;
}


function finalizar() {

    if (sanduiche == "") {
        alert("Escolha um sanduíche!");
        return;
    }

    let total = preco + quantidade * 2;

    let resultado = "Sanduíche: " + sanduiche + "\n";
    resultado += "Acompanhamentos: ";

    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i] + " ";
    }

    resultado += "\nTotal: R$ " + total;

    alert(resultado);

}