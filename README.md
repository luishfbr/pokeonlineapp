# PokeDex - Teste Técnico FullStack

Este é um projeto desenvolvido como parte de um teste técnico FullStack. O objetivo é criar uma aplicação que utilize dados climáticos para sugerir um Pokémon de acordo com o clima de uma cidade informada pelo usuário.

## Tecnologias Utilizadas

- **Next.js v14**: Framework para React, utilizado para criar a interface e gerenciar o lado do servidor.
- **React v18**: Biblioteca JavaScript para construir interfaces de usuário dinâmicas e interativas.
- **Axios**: Biblioteca para realizar requisições HTTP para a API de clima (OpenWeatherMap) e a PokéAPI.
- **OpenWeatherMap API**: API usada para obter dados climáticos em tempo real.
- **PokéAPI**: API utilizada para acessar informações sobre Pokémon.
- **Docker**: Ferramenta para criar, implantar e executar aplicativos em contêineres, facilitando a configuração do ambiente de desenvolvimento.
- **Shadcn/UI**: Biblioteca de componentes de interface de usuário para a construção de uma UI bonita e responsiva.

## Descrição do Projeto

O **PokeDex** é uma aplicação onde o usuário pode inserir o nome de uma cidade e obter informações sobre o clima atual. Com base nessas informações, a aplicação sugere um Pokémon de acordo com o tipo de clima. A sugestão de Pokémon é baseada em condições climáticas.

### Funcionalidades:

- **Inserção do nome da cidade**: O usuário insere o nome de uma cidade e o sistema retorna o clima atual da cidade.
- **Sugestão de Pokémon**: A aplicação retorna um Pokémon de acordo com o tipo de clima da cidade informada.
- **Condições de clima**: A aplicação distingue se está chovendo, se o clima está quente, frio, etc., e faz a escolha do Pokémon com base nisso.

## Como Rodar o Projeto

Para rodar a aplicação localmente, siga os passos abaixo:

### 1. Clonar o repositório

Clone o repositório do projeto para a sua máquina local:

```bash
git clone <URL-do-repositório>
```

### 2. Criar o arquivo .env

Crie um arquivo .env no diretório raiz do projeto e adicione a chave OPEN_WEATHER_API_KEY com o valor da sua API de clima OpenWeatherMap:

```bash
OPEN_WEATHER_API_KEY=<chave-da-api>
```

### 3. Configurar e iniciar o Docker

Abra o terminal do projeto e digite docker-compose up -d para iniciar o Docker. É necessário ter o Docker instalado no seu computador para executar o comando, e o mesmo deve estar aberto e executando antes de executar o comando.

### 4. Acessar a aplicação

Acesse a aplicação em http://localhost:80 para ver o resultado da aplicação.
