# Desafio BEMOL - Super Canal

Início de um projeto de Comunicação em diversos canais.

O projeto é composto de duas pastas.

- A primeira é a pasta backend (bemol-digital-laravel), onde está o projeto API com Laravel
- A segunda é a pasta frontend (bemol-digital-angular), onde se encontra a aplicação frontend em angular.

# Back End Laravel

Este é um projeto laravel, que tem como desafio a implementação de uma API para o gerenciamento de Clientes/Usuários.

## Instalação

### Requisitos

- docker
- curl

É importante que a porta 80 esteja liberada, pois por padrão o sail utiliza o docker para rodar nesta porta. Para a instalação siga os comandos abaixo:

```sh
curl -s https://laravel.build/bemol-app | bash
cd bemol-app
./vendor/bin/sail up -d
./vendor/bin/sail composer require alemcar/bemoldigitallaravel-module
./vendor/bin/sail artisan module:enable
./vendor/bin/sail artisan migrate
```

- Descrição do que cada comando realiza

  - 1- Download da versão limpa do Laravel
  - 2- Entrar na pasta raiz do projeto
  - 3- Inicializar os containers pelo Laravel Sail
  - 4- Instalar o projeto do desafio via composer
  - 5- Ativar modulo do projeto
  - 6- Subir com a estrutura do banco de dados

- Pacotes Utilizados:
  - nwidart/laravel-modules
  - joshbrw/laravel-module-installer
  - guzzlehttp/guzzle
- Projeto para gerenciamento de cliente/usuário
- Projeto segue estrutura de uma arquitetura DDD, separado nas seguintes camadas
  - Application
  - Domain
  - Infrastructure
  - Presentation

# Front End Angular

Este é um projeto angular, que tem como desafio a implementação da interface que vai consumir a API com Laravel

## Instalação

### Requisitos

- docker
- git

É importante que a porta 4200 esteja liberada, de acordo com o script de comandos, foi configurado para utilizar esta porta. Para instalar siga os comandos abaixo:

```sh
git clone https://github.com/Alessandro1979-itac/bemol-digital/tree/main/bemol-digital-angular
cd bemol-digital-angular/
docker build -t bemol-digital-angular-image .
docker run --name bemol-digital-angular-image -d -p 4200:4200 bemol-digital-angular-image
```

Descrição do que cada comando realiza:

- 1- Download do projeto via git clone
- 2- Entrar na pasta raiz do projeto
- 3- Monta a imagem do container
- 4- Executa o container - Caso queira executar o projeto em outra porta, substitua 4200:4200 por {PORTA_DESEJADA}:4200

### Acessar

```sh
http://localhost:4200
```

Observações

- Projeto desenvolvido no ubuntu versão 22.04
