let lista = [];

function cadastrar() {

    if (lista.length == 10) {
        alert("A lista está cheia!");
    }
    else {
        let nome = prompt("Digite o nome do convidado:");
        lista.push(nome);
        alert("Convidado cadastrado!");
    }
}
function remover() {

    let nome = prompt("Digite o nome que deseja remover:");

    let encontrado = false;

    for (let i = 0; i < lista.length; i++) {

        if (lista[i] == nome) {
            lista.splice(i, 1);
            encontrado = true;
            alert("Convidado removido!");
            break;
        }
    }

    if (encontrado == false) {
        alert("Nome não encontrado!");
    }
}

function convidados() {

    if (lista.length == 0) {
        alert("Não há convidados cadastrados!");
    }
    else {
        let mensagem = "LISTA DE CONVIDADOS:\n\n";
        for (let i = 0; i < lista.length; i++) {

            mensagem += (i + 1) + " - " + lista[i] + "\n";

        }
        alert(mensagem);
    }
}