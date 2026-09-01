let alunos = [];

function Aluno(nome, nota1, nota2, nota3, nota4, media, status) {

    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
    this.media = media;
    this.status = status;

}

function cadastrar() {

    let nome = prompt("Digite o nome do aluno:");
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));
    let nota4 = Number(prompt("Digite a quarta nota:"));
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let status = "";

    if (media >= 7) {
        status = "Aprovado";
    }
    else if (media >= 4) {

        status = "Em Recuperação";
    }
    else {
        status = "Reprovado";
    }

    let aluno = new Aluno(
        nome,
        nota1,
        nota2,
        nota3,
        nota4,
        media,
        status
    );

    alunos.push(aluno);
    alert("Aluno cadastrado!");
}
function relatorio() {

    if (alunos.length == 0) {
        alert("Não há alunos cadastrados!");
    }
    else {
        let mensagem = "RELATÓRIO:\n\n";

        for (let i = 0; i < alunos.length; i++) {
            mensagem += (i + 1) + " - ";
            mensagem += alunos[i].nome + " - ";
            mensagem += alunos[i].status + "\n";
        }
        alert(mensagem);
    }
}