# soudft time sheet automation

## Motivação

É uma ~merda~ ter que lançar as horas no soudft. Mas todo mês temos que lançar. ¯\_(ツ)_/¯

## Modo de usar

Preencha seu usuário, senha e as horas que serão lançadas no arquivo `tests/hours-feed.js`.

Instale as dependências com `yarn` ou `npm install`.

Inicie o programa com `yarn start` ou `npm start`.

Espere ele fazer todos os lançamentos, após acabar a janela fica aberta por mais 20min para que você revise e corrija algum campo.

ESTE SCRIPT NÃO CLICA EM SALVAR! Você precisa fazer isso após o script completar todos os lançamentos.

## Problemas frequentes

As vezes um ou outro elemento acabam demorando um pouco mais do que o normal e a execução do script é interrompida. Acontece com pouca frequência e caso aconteça é só executar o programa novamente.

## TODO

- [ ] Lançamento de sobreaviso
