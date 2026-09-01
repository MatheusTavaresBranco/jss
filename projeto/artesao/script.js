let valor = Number(prompt("Digite o valor da venda:"));
let pagamento = prompt("Digite a forma de pagamento (dinheiro, cartão ou pix):");

let desconto = 0;

if (pagamento == "dinheiro") {
    desconto = valor * 0.05;
}

let valorFinal = valor - desconto;

let confirma = prompt("Valor final da venda: R$ " + valorFinal +  "\nConfirma a operação? (sim ou não)");

if (confirma == "sim") {
    alert("Venda realizada com sucesso!");
} else {
    alert("Venda cancelada.");
}