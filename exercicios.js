function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {
    let total = 0;

    produtos.forEach(function(produto) {
        total += caixa[produto];
    });

    total += fretes[cidade];

    return total;
}

const caixa = {
    Arroz: 7.10,
    Feijão: 2.30,
    Macarrão: 4.70,
    Refrigerante: 3.00
};

const fretes = {
    "São Paulo": 10.10,
    "Rio de Janeiro": 12.30,
    Brasília: 14.70,
    Outros: 13.00
};

console.log(
    calculaValorTotalDaCompra(["Arroz"], "São Paulo", caixa, fretes)
);
function removeDuplicatas(numeros) {
    return [...new Set(numeros)];
}

console.log(removeDuplicatas([1, 1, 2, 2, 3, 3]));

const arrayFuncoes = [];

for (let i = 0; i < 10; i++) {
    arrayFuncoes.push(function() {
        console.log(i);
    });
}

arrayFuncoes.forEach(function(funcao) {
    funcao();
});

const jogador = {};

jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome + '_' + jogador.idade);
const status = [
    { codigo: 'OK', resposta: 'Sucesso' },
    { codigo: 'FAILED', resposta: 'Erro' },
    { codigo: 'PENDING', resposta: 'Pendente' }
];

let mensagem = '';
const codigoAtual = 'OK';

for (let i = 0; i < status.length; i++) {
    if (status[i].codigo === codigoAtual) {
        mensagem = status[i].resposta;
    }
}

console.log(mensagem);