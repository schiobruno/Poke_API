# Pokédex - Aplicação Web com Node.js e EJS

Esta é uma aplicação de Pokédex que permite buscar e visualizar informações detalhadas sobre Pokémons, incluindo habilidades, estatísticas e imagens. O projeto utiliza Node.js, Express, EJS e a API pública da PokéAPI.

## Funcionalidades

- Listagem de Pokémons com paginação.
- Barra de busca para encontrar Pokémons por nome.
- Visualização de detalhes de cada Pokémon, incluindo:
  - Habilidades.
  - Imagem oficial.
- Link para retornar à página inicial.

## Requisitos

- Node.js
- NPM 

## Instalação

1. Clone este repositório

2. Instale as dependências:

npm install
npm install express ejs axios
npm install ejs
npm install axios

## Uso

    Inicie o servidor:

node server.js
ou
npm start

Acesse a aplicação no navegador:

    http://localhost:3000

    Use a barra de busca para encontrar Pokémons ou clique nos cartões para visualizar mais detalhes.

## Endpoints

    GET /: Página inicial com listagem e busca de Pokémons.
    GET /pokemon/:name: Detalhes de um Pokémon específico.

## Tecnologias Utilizadas

    Node.js: Ambiente de execução JavaScript.
    Express: Framework web para Node.js.
    EJS: Template engine para renderizar páginas HTML dinâmicas.
    PokéAPI: API pública para informações de Pokémons.