const readline = require('readline-sync');

//Configurando a codificação UTF-8 para o console
process.stdin.setEncoding('utf8');
process.stdout.setEncoding('utf8');

//Criando um formatador de moeda em real brasileiro (R$)
const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

//Captura do número de pessoas na mesa, com validação para garantir valor maior que 0.
let numeroPessoas;
do {
    numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');
    if (numeroPessoas <= 0) {
        console.log('❌ O número de pessoas deve ser maior que 0.');
    }
} while (numeroPessoas <= 0);

//Captura do valor total da conta, com validação para garantir valor positivo.
let valorTotal;
do {
    valorTotal = readline.questionFloat('Digite o valor total da conta: ');
    if (valorTotal <= 0) {
        console.log('❌ O valor da conta deve ser maior que 0.');
    }
} while (valorTotal <= 0);

//Captura do método de pagamento, com validação.
let metodoPagamento;
do {
    metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ').toLowerCase();
    if (!['pix', 'dinheiro', 'cartão'].includes(metodoPagamento)) {
        console.log('❌ Método de pagamento inválido. Escolha entre PIX, dinheiro ou cartão.');
    }
} while (!['pix', 'dinheiro', 'cartão'].includes(metodoPagamento));

//Inicializa a variável que armazenará o valor com ou sem desconto.
let valorComDesconto;

//Verifica se o método de pagamento permite desconto (PIX ou dinheiro).
if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
    valorComDesconto = valorTotal * 0.9; // Aplica 10% de desconto
    console.log('\n✅ Desconto de 10% aplicado.');
} else {
    valorComDesconto = valorTotal; // Nenhum desconto aplicado
    console.log('\n❌ Nenhum desconto aplicado.');
}

//Captura da porcentagem de gorjeta, com validação para garantir valor positivo.
let gorjetaPorcentagem;
do {
    gorjetaPorcentagem = readline.questionFloat('Digite a porcentagem de gorjeta (0 a 100): ');
    if (gorjetaPorcentagem < 0 || gorjetaPorcentagem > 100) {
        console.log('❌ A porcentagem de gorjeta deve ser entre 0 e 100.');
    }
} while (gorjetaPorcentagem < 0 || gorjetaPorcentagem > 100);

//Calcula o valor da gorjeta.
let valorGorjeta = (gorjetaPorcentagem / 100) * valorComDesconto;
let valorTotalComGorjeta = valorComDesconto + valorGorjeta;

//Exibe o valor final da conta com gorjeta formatado como moeda.
console.log(`\n💰 Valor final da conta (com desconto e gorjeta): ${formatador.format(valorTotalComGorjeta)}`);

//Exibe o valor que cada pessoa deve pagar, incluindo a gorjeta.
console.log(`👥 Cada pessoa deve pagar (com gorjeta): ${formatador.format(valorTotalComGorjeta / numeroPessoas)}`);