# Front End Angular

Este é um projeto angular, que tem como desafio a implementação da interface que vai consumir o projeto, [bemol-digital-angular-challenge](https://github.com/LeonardoBAV/bemol-digital-angular-challenge).

## Instalação

### Requisitos
- docker
- git

É importante que a porta 4200 esteja liberada, de acordo com o script de comandos, foi configurado para utilizar esta porta. Para instalar siga os comandos abaixo:
```sh
git clone https://github.com/LeonardoBAV/bemol-digital-angular-challenge.git
cd bemol-digital-angular-challenge/
docker build -t bemol-digital-angular-image .
docker run --name bemol-digital-angular-image -d -p 4200:4200 bemol-digital-angular-image
```

Descrição do que cada comando realiza:
- 1- Download do projeto via git clone
- 2- Entrar na pasta raiz do projeto
- 3- Monta a imagem do container
- 4- Executa o container
        - Caso queira executar o projeto em outra porta, substitua 4200:4200 por {PORTA_DESEJADA}:4200

### Acessar
```sh
http://localhost:4200
```
Observações
- Projeto desenvolvido no lubuntu versão 21.10
