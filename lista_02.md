# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina! (E não se envolva em plágio!)
- ao final, publique seu arquivo lista_02.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
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

```
Qual das seguintes alternativas melhor descreve o que o código faz?

**A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.**
R: O item A está correto.

B) O código avalia a expressão booleana, imprime `false`, calcula o produto dos números na lista e imprime o resultado no console.

C) O código avalia a expressão booleana, imprime `true` e, em seguida, verifica se o número 6 está na lista.

D) O código avalia a expressão booleana, imprime `false` e ordena os valores em ordem crescente.


______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
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
```

```javascript
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
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

**A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'**
R: O item A está correto. Podemos ter certeza dessa saída ao fazermos o chamamento das duas funções dessa forma (com as duas funções definidas no mesmo código):

```javascript
console.log("Função 01:");
analisarCredito1();
console.log("Função 02:");
analisarCredito2();
```

B) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -600.', enquanto analisarCredito2() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.'

C) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.', enquanto analisarCredito2() exibirá: 'Seu crédito foi aprovado. Saldo disponível: 100.'

D) Ambas as funções exibirão: 'Seu crédito foi aprovado Saldo disponível: 500.'
______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

A) O código verifica se a idade indica um adulto ou um idoso e exibe a mensagem correspondente.

**B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".**
R: Resposta correta. A condição no ultimo if não se faz necessária visto que as ultimas duas condições já satisfazem o código, por isso, caso não seja nem adulto nem menor de idade, logicamente é um idoso, assim printando "Você está na melhor idade!"

C) O código verifica se a idade está entre 18 e 60 anos e, se for, imprime "Você é um adulto!". Se não estiver nesse intervalo, imprime "Você está na melhor idade!".

D) O código verifica se a idade é menor de 18, entre 18 e 60 ou acima de 60, imprimindo uma mensagem específica para cada caso.
______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
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
```

Escolha a opção que responde corretamente:

A)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 ligado com bateria extra. Energia restante: 0

Dispositivo 5 ligado. Energia restante: -200

B)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

C)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado com bateria extra. Energia restante: 700

Dispositivo 3 ligado. Energia restante: 400

Dispositivo 4 não pode ser ligado. Energia insuficiente.

**D)**
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

R: O item D está correto, corresponde com o retorno da execução do código.


______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

A) O método update() é responsável por carregar os assets do jogo antes da cena ser exibida.//Falso, não é sua principal função. Essa ação é realizada pelo método "preload()"

**B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.**
R: A preposição do item B é correta, essa é a principal função do método "update()".

C) O método update() renderiza todos os sprites na tela e garante que a física do jogo seja processada corretamente. //Falso, não é sua principal função. Essa ação é realizada pelo método "create()"

D) O método update() é chamado apenas uma vez após a criação da cena, sendo utilizado para configurar variáveis iniciais do jogo. //Falso, não é sua principal função. Essa ação é realizada pelo método "create()"
______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Matter.js: É um mecanismo de física de corpo rígido 2D escrito em JavaScript. Esta biblioteca pode simular facilmente a física 2D no navegador. Ele oferece muitos recursos, como a capacidade de criar corpos rígidos e atribuir propriedades físicas como massa, área ou densidade a eles. Também pode simular diferentes tipos de colisões e forças como gravidade e atrito.

Escolha a opção que responde corretamente:

**A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.**
R: Resposta correta a partir da definição e uso da física Matter.js em phaser.

B) Gerenciar eventos de entrada do usuário, como cliques e toques na tela, permitindo movimentação de personagens.

C) Renderizar gráficos otimizados para jogos 2D e garantir uma taxa de quadros estável.

D) Criar animações automáticas para sprites e objetos interativos sem necessidade de programação de movimentação.

______

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```

Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.

```javascript
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
```
______

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.

```javascript

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
```
______

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade: velocidade = velocidadeInicial - desaceleracao * tempoAtual;

```JavaScript

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

```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.
______

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

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

```JavaScript
    // Definição das matrizes:
    // A matriz A representa os investimentos no setor de tecnologia (primeira linha) e industria (segunda linha) em milhões de reais
    // A matriz B representa os fatores que influenciam esse investimento como Juros compostos (coluna 1), expansão do mercado (coluna 2) e valorização de ações (coluna 3) no periodo de 1 ano.
    var matrizA = [[2, 3], [4, 6]];
    var matrizB = [[1, 3, 0], [2, 1, 1]]; //Matriz B com 2 linhas e 3 colunas, para testar a multiplicação correta de matrizes 
    //var matrizB = [[1, 3, 0], [2, 1, 1], [3, 0, 2]]; //Matriz B com 3 linhas e 3 colunas, para testar a multiplicação incorreta de matrizes
    var linhasA = matrizA.length;
    var colunasA = matrizA[0].length;
    var linhasB = matrizB.length;
    var colunasB = matrizB[0].length;
    var matrizResultado = [[0, 0, 0], [0, 0, 0]];

    // Verifica se as matrizes podem ser multiplicadas
    console.log("A matriz A é:", matrizA);//Informa as matrizes no console log
    console.log("A matriz B é:", matrizB);//Informa as matrizes no console log
    console.log("As dimensões das matrizes são:", linhasA, "x", colunasA, "e", linhasB, "x",colunasB);//Informa as dimensões das matrizes no console log
    if (colunasA != linhasB) {
        console.log("As matrizes não podem ser multiplicadas. O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.");
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
        
        console.log("\nA matriz resultado reflete os ganhos acumulados (em milhões de reais) de cada investimento da matriz A em relação aos fatores apresentados na matriz B, ao longo do tempo.");
    }
```
