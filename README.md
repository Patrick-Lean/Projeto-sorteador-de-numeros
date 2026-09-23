# Projeto sorteador de números

Esse projeto tem como finalidade reforçar conceitos de lógica de programação.

## Conceitos abordados:

* Uso de variáveis
* Condicionais
* Estruturas de repetição

## Funcionalidades:

- O sorteio não repete números. Se um número que já esta contido na lista resposta for sorteado novamente, o número repetido é ignorado e o algoritmo sorteia um número novo.
- Não é permitido sortear uma certa quandidade de números se o limite inferior for maior do que o superior. Se o limite inferior do número sorteado for maior do que o limite superior, é informado para o usuário conferir os dados.
- O botão sortear so irá funcionar se houver dados em todos os campos. Caso não haja, é exibido uma mensagem para corrigir os dados informados.
- Ambos os botões alternam o status. Caso nenhum dos dados seja nulo, e o limite inferior for menor do que o limite superior, o sorteio irá acontecer e o estado do botão mudará.
- O botão de reiniciar limpa os campos e muda de estado. Se o botão de reiniciar for habilitado, ao clica-lo, o botão deve limpar os inputs e exbir o texto inicial no local dos números sorteados.
- Se a quantidade de números sortados for menor do que (limiteSuperior - limiteInferior) + 1 , não é possivel realizar o sorteio, e uma mensagem é exibida informando.

## Acesse o deploy do projeto clicando [aqui](https://projeto-sorteador-de-numeros-lemon.vercel.app/)
