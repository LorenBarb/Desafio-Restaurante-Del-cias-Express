## Desafio Restaurante Delícias Express

<img src="https://github.com/user-attachments/assets/7cfd5a5e-017a-4d99-a7c5-ec87989c879a" alt="Post Instagram Pagamento Pix Desconto Simples Azul" width="300">

O restaurante `Delícias Express` quer proporcionar aos seus garçons `uma maneira mais rápida` de calcular o valor total da conta e garantir uma maior agilidade no pagamento. Para isso precisam de um programa que receba:

~~~
1. Receber o número de pessoas na mesa.
2. Receber o valor total da conta.
3. Permitir a escolha do método de pagamento (PIX, dinheiro ou cartão).
4. Aplicar um desconto de 10% se o pagamento for via PIX ou dinheiro.
5. Calcular o valor que cada pessoa deve pagar e exiba o resultado.

~~~

⚠️ O restaurante oferece um desconto de 10% se o pagamento for feito via PIX ou em dinheiro, então o programa precisa ter a opção de inserir o meio de pagamento e calcular automaticamente esse desconto antes de exibir a conta final aos clientes.

## :bulb: Dica

Para esse projeto, você vai aprender um conteúdo novo que é **estruturas condicionais**, como o **`if`**. Essa estrutura permite ao seu programa tomar decisões com base nas condições que você definir. No caso desse desafio, vamos usar o **`if`** para aplicar o desconto de 10% quando o método de pagamento for "PIX" ou "dinheiro".

Além disso, embora esse projeto não exija diretamente, é interessante você entender o conceito de **loops** (ou laços de repetição) em JavaScript. Os **loops** permitem que um bloco de código seja executado várias vezes, e podem ser muito úteis em situações onde precisamos repetir ações (como calcular contas para várias mesas, por exemplo).

Você pode aprofundar mais nos conceitos de **condicionais** e **loops** nos links sugeridos abaixo para melhorar sua solução.

### O seu código precisa funcionar da seguinte maneira: 
<img width="1037" alt="Captura de Tela 2024-09-23 às 18 42 33" src="https://github.com/user-attachments/assets/abb601cb-7816-4b34-9fca-badeed788c74">



O objetivo deste projeto é praticar os seguintes conceitos:

- **Entrada e saída de dados** em JavaScript utilizando a biblioteca `readline-sync`.
- **Manipulação de variáveis e constantes** em JavaScript.
- **Operações matemáticas** para cálculos de valores e descontos.
- **Versionamento de código** usando Git e GitHub para colaborar e compartilhar o código do projeto.




## Instruções

### 1. Fork do Repositório
   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.

     
#### Como forkar?

Faça o fork desse repo: [https://github.com/campinho-digital/Como-fazer-um-Fork](https://github.com/campinho-digital/Como-fazer-um-Fork)  


### 2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


### 3. Instalar Dependências
Se o projeto utiliza npm, você deve instalar as dependências:

~~~javascript
npm install

~~~

#### ⚠️ Atenção 
Se o projeto utiliza o Node.js e tem um arquivo package.json, você precisa rodar npm install para instalar todas as bibliotecas e dependências que o projeto necessita para funcionar. Sem isso, o projeto pode não rodar corretamente.


### 4.  Instalando e Usando o `readline-sync`

### O que é `readline-sync`?

A biblioteca `readline-sync` é usada para capturar entrada de dados diretamente no terminal de forma síncrona, ou seja, ela pausa a execução do código até que o usuário insira os dados e pressione "Enter". Isso é muito útil para criar scripts interativos.

### Instalando a Biblioteca

Para utilizar a `readline-sync` no seu projeto, você precisa seguir os passos abaixo:


~~~javascript
npm install readline-sync
~~~

Depois de instalar a biblioteca, você pode usá-la para capturar entradas de dados no terminal, faça isso no arquivo `index.js`.


## :thinking: Cuidado com os dados...

No JavaScript, ao capturar entradas de dados do usuário, o `readline-sync` retorna os valores sempre como **strings** (texto). Isso significa que, mesmo que o usuário digite um número, ele será tratado como uma string pelo programa. 

No entanto, para realizar **operações matemáticas** (como somas, subtrações ou divisões), você precisa trabalhar com **números** (inteiros ou decimais). Tentar realizar operações matemáticas com strings pode gerar resultados inesperados ou erros.


Por exemplo:
~~~javascript
const readline = require('readline-sync');
let valor = readline.question('Digite um número: ');
console.log(valor + 10); // Isso irá concatenar o texto, não somar
~~~

O `readline-sync` oferece métodos específicos para lidar com números, como:
- **`questionInt()`**: Captura e converte automaticamente a entrada para um número inteiro.
- **`questionFloat()`**: Captura e converte automaticamente a entrada para um número decimal (float).

Por exemplo:

~~~javascript

const readline = require('readline-sync');

// Captura um número inteiro
let numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Captura um valor decimal (float)
let valorConta = readline.questionFloat('Digite o valor total da conta: ');

~~~

#### O JavaScript nativamente TAMBÉM oferece funções de conversão de dados como parseInt() e parseFloat() para converter strings em números:
~~~javascript

let valor = parseInt(readline.question('Digite um número: '));
console.log(valor + 10); // Agora o resultado será 30, se o usuário digitar 20

~~~

### 5. Abrir o Arquivo index.js
Abra seu editor de código preferido (por exemplo, Visual Studio Code).
No editor, abra o arquivo `index.js` que está no repositório.

~~~javascript
// Importando a biblioteca readline-sync
const readline = require('readline-sync');

// Capturando o número de pessoas na mesa
const numeroPessoas = readline.questionInt('Digite o número de pessoas na mesa: ');

// Capturando o valor total da conta
const valorTotal = readline.questionFloat('Digite o valor total da conta: ');

// Capturando o método de pagamento
const metodoPagamento = readline.question('Qual é o método de pagamento (PIX, dinheiro ou cartão)? ');


//Façã sua lógica para aplicar o desconto apenas para PIX OU DINHEIRO


// Exibindo os resultados

~~~



### 6. Testar o Projeto
Use o comando `npm start` no terminal para executar o projeto e testar as respostas que você implementou no arquivo index.js.

~~~javascript
npm start
~~~


### 7. Versionamento com Git
Depois de responder às questões e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

### 8. Enviar o Repositório para o Moodle

Você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.


# :trophy: Sorteio Especial

Ao final da entrega deste desafio, todos os participantes que apresentarem sua solução terão a oportunidade de participar de um **sorteio exclusivo** de um livro sobre **programação e desenvolvimento web**! 🎉

## Como Participar:

1. **Complete o desafio**: Resolva o problema de cálculo de conta utilizando JavaScript e a biblioteca `readline-sync`.
2. **Submeta sua solução**: Envie o link do seu repositório com o código completo através da plataforma da Campinho Digital.
3. **Apresentação da Solução**: Durante a revisão final, você terá a chance de **apresentar** sua solução, explicando como resolveu o desafio e quais foram os passos e decisões que tomou.
4. **Participação no Sorteio**: Todos que apresentarem suas soluções irão automaticamente participar do **sorteio de um livro** especialmente selecionado para ajudá-lo a continuar aprimorando suas habilidades em programação!


#### Links
[Constantes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)

[Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)

[Diferenças de var const e let](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)

[Convertendo String para Inteiro](https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript)

[If and Else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

### Dica Extra:
Quanto mais clara e bem documentada for sua solução, mais chances você tem de impressionar os revisores e aumentar suas chances de aprendizado (e, claro, de ganhar o sorteio!).

**Boa sorte e bom código!** 🚀📘

