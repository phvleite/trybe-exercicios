const custoProduto = (Math.floor(Math.random()*10000) + 1);
const imposto = custoProduto * .20;
const valorVenda = (custoProduto + imposto) * 1.35;
let lucro = (valorVenda - custoProduto) * 1000;

console.log(`O custo do produto é R$ ${custoProduto.toFixed(2)} mais R$ ${imposto.toFixed(2)} de impostos totalizando ${(custoProduto + imposto).toFixed(2)}, sendo vendido por R$ ${valorVenda.toFixed(2)}, com a venda de 1000 unidades o lucro gerado é de R$ ${lucro.toFixed(2)}`);

