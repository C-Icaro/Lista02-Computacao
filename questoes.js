//Questão 01:

//Definição de variáveis locais
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
//(p % q === 1) Usa o operador de módulo e verifica se o retorno da divisão é igual a 1 (true nesse caso);
//(r * 2 > p) Verifica se o dobro de r é maior que p (true nesse caso);
//(q + r < p) Verifica se q + r é menor que p (true nesse caso);
//No geral, a espressão que irá definir o booleano resultado depende se o resto da divisão entre p e q é 1 e se o dobro de r é maior que p ou q+r é menor que p.
console.log(resultado);
//Será printado true no console log por conta de suas condicionais serem verdadeiras.

const valores = [3, 6, 9, 12, 15];//Definição de array
let produto = 1;//Declarando produto como não nulo

for (let j = 0; j < valores.length; j++) {//For que "varre" toda a extensão do array valores
  produto *= valores[j];//Define produto como como o produto dos valores do array 
}

console.log("O produto dos valores é:", produto);//Imprime produto


//Questão 02:

function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
