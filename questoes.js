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

// Versão 1 da função de análise de crédito
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

// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}

console.log("Função 01:");
analisarCredito1();
console.log("Função 02:");
analisarCredito2();

//Questão 03:

const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}

//Questão 04:

var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}

//Questão 07

let pedidos = 200;
if(pedidos < 50){//Condiciona o frete não disponível somente para pedidos abaixo e R$50
    console.log("Frete não disponível!");
}
else if( 50 <= pedidos && pedidos <= 199.99){//Condiciona o frete com custo adicional somente para pedidos entre R$50 e R$199,99.
    console.log("Frete com custo adicional!");
}
else if(pedidos >= 200){//Condiciona o frete grátis somente para pedidos acima de R$200
     console.log("Frete grátis!");
}

//Obs: O código não tem saida para valores maiores que 199,99 e menores que 200. 


//Questão 08

class veiculo{
    modelo;//Definição de atributos
    ano;
    quilometragem;
    eficiencia;

    constructor(modelo, ano, quilometragem, eficiencia){//Definição do constructor pai 
        this.modelo = modelo;//Definição dos atributos dentro da classe
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.eficiencia = eficiencia;
    }

    calcularConsumoCombustível(){//Criação do método calcularConsumoCombustível pai
        let consumo = this.quilometragem/this.eficiencia;
        console.log("Consumo do veículo, em litros, é:", consumo);

    }
}

class moto extends veiculo{//Definição da classe e sua herança
    constructor(modelo, ano, quilometragem, eficiencia){//Definição do constructor
        super(modelo, ano, quilometragem, eficiencia);//Chamamento do constructor pai
    }

    calcularConsumoCombustível(){//Sobreescrita do método calcularConsumoCombustível
        let consumo = this.quilometragem/this.eficiencia;
        console.log("Consumo da moto, em litros, é:", consumo);
    }
}

const suzuki = new moto("Suzuki", "2004", 100, 5);//Criação do objeto da subclasse moto
suzuki.calcularConsumoCombustível();//Chamamento do método

class carro extends veiculo{//Definição da classe e sua herança
    constructor(modelo, ano, quilometragem, eficiencia){//Definição do constructor
        super(modelo, ano, quilometragem, eficiencia);//Chamamento do constructor pai
    }

    calcularConsumoCombustível(){//Sobreescrita do método calcularConsumoCombustível
        let consumo = this.quilometragem/this.eficiencia;
        console.log("Consumo do carro, em litros, é:", consumo);
    }
}

const honda = new carro("honda", "2010", 100, 10);//Criação do objeto da subclasse carro
honda.calcularConsumoCombustível();//Chamamento do método


//Questão 09

var tempoMaximo = 20;//Definição do tempo máximo
var tempoMinimo = 5;//Definição do tempo mínimo
var tempoDescida = Math.round(Math.random() * (tempoMaximo - tempoMinimo)) + tempoMinimo;//Definição do tempo de descida aleatório entre minimo e máximo segundos
Math.floor(tempoDescida);//Arredonda o número para baixo, transformando em inteiro
var tempoAtual = 0;//Definição do tempo atual

var velocidadeInicial = 100;//Definição da velocidade inicial
var velocidadeSegura = 20;

var desaceleracao = velocidadeInicial/tempoDescida;//Definição da desaceleração

var velocidade = velocidadeInicial - desaceleracao * tempoAtual;

console.log("A velocidade inicial é:", velocidadeInicial, "metros por segundo.");//Imprime a velocidade inicial
console.log("A velocidade segura de pouso é:", velocidadeSegura, "metros por segundo.");//Imprime a velocidade inicial
console.log("A desaceleração é:", desaceleracao.toPrecision(3), "metros por segundo.");//Imprime a velocidade inicial

console.log(`O tempo para atingir a velocidade segura é: ${tempoDescida} segundos.`);//Imprime a velocidade inicial



//questão 10

/*
Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se as matrizes têm o mesmo número de linhas e colunas  
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."  
    Senão:  
        linhas <- tamanho(matrizA)  
        colunas <- tamanho(matrizA[0])  
        matrizResultado <- novaMatriz(linhas, colunas)  

        # Loop para percorrer cada elemento das matrizes e calcular a soma  
        Para i de 0 até linhas-1 faça:  
            Para j de 0 até colunas-1 faça:  
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]  

        Retornar matrizResultado  

# Exemplo de uso da função  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
investimentosAno2 <- [[1200, 1800], [1300, 2700]]  

totalInvestimentos <- SomarMatrizesInvestimento(investimentosAno1, investimentosAno2)  
Escrever("Total de investimentos acumulados:")  
ImprimirMatriz(totalInvestimentos)  
```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.
*/

function MultiplicarMatrizesInvestimento(matrizA, matrizB){

    // Definição das matrizes de investimento
    var matrizA = [[2, 3], [4, 6]];
    var matrizB = [[1, 3], [2, 1]];
    var linhasA = matrizA.length;
    var colunasA = matrizA[0].length;
    var linhasB = matrizB.length;
    var colunasB = matrizB[0].length;
    var matrizResultado = [[0, 0, 0], [0, 0, 0]];

    // Verifica se as matrizes podem ser multiplicadas
    if (colunasA !== linhasB) {
        return "As matrizes não podem ser multiplicadas. O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.";
    }
    else{
        // Loop para percorrer cada elemento das matrizes e calcular o produto
        for (var i = 0; i < linhasA; i++) {//Passa por cada linha A
            for (var j = 0; j < colunasB; j++) {//Passa por cada coluna de B
                for (var k = 0; k < colunasA; k++) {//Passa por cada coluna de A
                    // Multiplica os elementos correspondentes e soma na matriz resultado
                    matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
                }
            }
        }
        console.log("O resultado da multiplicação das matrizes é:", matrizResultado);//Informa a multiplicação das matrizes no console log
    }
}
