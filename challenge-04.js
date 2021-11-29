/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = (arg) => !!arg ? true : false; 

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy();
isTruthy("");
isTruthy(0);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy({});
isTruthy([]);
isTruthy([1,2,3]);
isTruthy({nome: 'Leonardo'});
isTruthy(2);
isTruthy(true);
isTruthy("Leo");
isTruthy(() => {});
isTruthy(2.22);
isTruthy((20 + 1)* 2);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro = {
    marca: 'Ford',
    modelo: 'Uno',
    placa: 'UUU-1234',
    ano: 1997,
    cor: 'branco',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
const mudaCor = (cor) => carro.cor = cor;

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
const obterCor = () => carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
const obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
const obterMarca = () => carro.marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
const obterMarcaModelo = () => `Esse carro é um ${carro.marca} ${carro.modelo}`;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
const addToCar = (nmb) => {
    const nVagas = carro.assentos - carro.quantidadePessoas;

    if (carro.quantidadePessoas === carro.assentos && nmb > 0) {
        return 'O carro já está lotado!';
    } else if (nmb > nVagas) {
        return `Só cabem mais ${nVagas} pessoas!`;
    } 

    if (nmb !== undefined) {
        carro.quantidadePessoas += nmb;
    }

    return `Já temos ${nmb} pessoas no carro!`;
} 

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor();

// Mude a cor do carro para vermelho.
mudaCor('vermelho');

// E agora, qual a cor do carro?
obterCor();

// Mude a cor do carro para verde musgo.
mudaCor('verde musgo');

// E agora, qual a cor do carro?
obterCor();

// Qual a marca e modelo do carro?
obterMarcaModelo();

// Adicione 2 pessoas no carro.
addToCar(2);

// Adicione mais 4 pessoas no carro.
addToCar(4);

// Faça o carro encher.
addToCar(3);

// Tire 4 pessoas do carro.
addToCar(-4);

// Adicione 10 pessoas no carro.
addToCar(10);

// Quantas pessoas temos no carro?
addToCar();
