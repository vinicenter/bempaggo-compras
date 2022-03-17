# bempaggo-compras

### Veja o projeto ao vivo por meio deste link:
https://vini.center/bempaggo-compras

## Sobre o projeto

### Qual a origem deste projeto?

Este projeto foi desenvolvido para o Desafio de Desenvolvimento FrontEnd da BemPaggo! https://www.bempaggo.com.br/

### Tecnologias utilizadas no projeto

* Utilizei o framework Vue.js para desenvolver boa parte do projeto.
* Utilizei a biblioteca Bootstrap para acelerar o desenvolvimento.
* Para gerenciar o projeto foi usado o NPM.
* Para gerenciamento de versão foi usado o GIT.
* Utilizei o Jest para desenvolver os testes unitários.

### Mudanças visuais feitas em relação ao projeto inicial

* Adição de imagem em cada produto.
* Adição de descrição em cada produto.
* Adição de preço em cada produto.
* Também foi adicionado uma tabela para visualização dos itens adicionados em sua compra.
* Quantidade de volumes da compra.
* Valor total a pagar.

### Implementações técnicas do projeto

A listagem dos produtos foi pensada para ser feita usando JSON. o que irá facilitar para popular a listagem de produtos por meio de uma API por exemplo.
Segue abaixo um exemplo de JSON contendo dois produtos:

```
[
  {
    "id": "1",
    "name": "React",
    "description": "Os mais famosos adesivos React estão aqui!",
    "imgUrl": "https://i.imgur.com/k9Jbo8J.png",
    "imgAlt": "Logo do React.",
    "price": 5.99
  },
  {
    "id": "2",
    "name": "Vue",
    "description": "Os melhores adesivos de Vue estão te esperando!",
    "imgUrl": "https://i.imgur.com/Sw9ZSur.png",
    "imgAlt": "Logo do Vue.",
    "price": 6.99
  }
]
```

O projeto ja conta com as informações de checkout separadas para serem enviadas para a API que irá processar a compra quando o usuário clica em "Ir para checkout".

Os textos estão separados em um arquivo para facilitar a edição e adaptação para outras linguagens.

Além dessas, também foi criado testes unitários para componentes utilizando o Jest, para que seja garantido a qualidade do código e experiência do usuário.

## Configuração para rodar o projeto localmente:

### Setup inicial
```
npm install
```

### Compila e ativa o live server para desenvolvimento
```
npm run serve
```

### Compila e minifica para produção
```
npm run build
```