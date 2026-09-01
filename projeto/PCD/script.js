let pessoasTotal;
let pcd;

function pesquisa() {
    pessoasTotal = parseInt(prompt("Quantas pessoas são no total?"));
    pcd = parseInt(prompt("Destas pessoas, quantas pessoas são PCD?"));

    let porcentagem = (pcd/pessoasTotal) * 100;

    alert("A porcentagem é: " + porcentagem);
}

pesquisa();