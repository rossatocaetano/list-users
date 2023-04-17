# Listar Usuários

## Descrição do projeto

A aplicação foi criada com o objetivo de listar usuários e seus detalhes em uma interface web. Ela foi desenvolvida utilizando as tecnologias Next.js e Styled Components.

Para que os dados sejam dinâmicos, alterando a cada novo acesso, a aplicação consome a API https://randomuser.me/ em tempo de execução. A API foi configurada para retornar 10 resultados.

O conceito do layout adotado é minimalista, responsivo e foi desenvolvido seguindo o conceito Mobile First.


### Processo de desenvolvimento

Este foi meu primeiro projeto "mão-na-massa" utilizando o framework Next.js. Foi interessante explorar as diferenças e as semelhanças na estrutura de diretórios se comparado com um projeto realizado com ReactJS. No entanto, esse processo não apresentou maiores dificuldades pelos conceitos dos frameworks serem semelhantes.

Também realizei o deploy na plataforma Vercel, testando a função "getServerSideProps" para que as requests sejam enviadas pelo servidor no tempo de execução. O intuito dessa escolha foi emular o recebimento de novos dados a cada acesso, se aproximando de uma aplicação front end que necessite realizar consultas constantes ao back end, mostrando-se ainda assim vantajoso, mesmo havendo perda de performace nessa escolha se comparada à uma página estática, por servir de exemplo para casos em que os dados atualizem constantemente.


## Deploy da aplicação

O Deploy da Aplicação foi realizado na plataforma Vercel e pode ser acessado no link https://list-users-flame.vercel.app/.


## Pré-requisitos
Para rodar a aplicação em um ambiente de desenvolvimento local, você precisa ter instalado em sua máquina:

:books: [Node](https://nodejs.org/en/download/)

:books: [Yarn](https://yarnpkg.com/lang/pt-BR/docs/install/)


## Tecnologias utilizadas
Esta aplicação foi desenvolvida utilizando as seguintes tecnologias:

:hammer_and_wrench: Next.js

:hammer_and_wrench: Styled Components


## Como rodar a aplicação

1. No terminal, clone o projeto:

```
$ git clone https://github.com/rossatocaetano/list-users.git
```

2. Acesse a pasta do projeto:

```
$ cd list-users
```

3. Instale as dependências do projeto utilizando o gerenciador de pacotes Yarn:

```
$ yarn install
```


4. Inicie o servidor de desenvolvimento:

```
$ yarn dev
```


5. Acesse a aplicação em seu navegador em http://localhost:3000
