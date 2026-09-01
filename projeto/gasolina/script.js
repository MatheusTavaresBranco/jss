let distancia = Number(prompt("Digite a distância da viagem em km:"));
let consumo = Number(prompt("Digite o consumo do carro em km/L:"));
let preco = Number(prompt("Digite o preço da gasolina por litro:"));
let pessoas = Number(prompt("Digite o número de pessoas:"));

let litros = distancia / consumo;
let custo = litros * preco;
let valor = custo / pessoas;

alert("Custo total da gasolina: R$ " + custo + "\nValor por pessoa: R$ " + valor);