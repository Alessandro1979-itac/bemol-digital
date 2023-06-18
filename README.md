# Desafio BemolDigital

Desafio do processo seletivo da Bemol Digital, que trata da criação de uma feature para contas de usuários.

Os campos usados no formulário são:

- Nome completo
- CPF
- E-mail
- Endereço

## Requerimentos

- Docker

## Instruções de execução

1. Back-End:
   1.1 Na raiz do projeto, digitar o seguinte comando no terminal:

```
      docker-compose build && docker-compose up
```

2. Acessar localhost:3000 ( Porta da aplicação Front-end)

## Escolhas

- Laravel:
  Ultilizei Laravel porque é um obrigatório do projeto.

- MySQL :
  Como SGBD usei MySQL por uma questão de opção mesmo.

- Docker :
  Mais fácil para outras pessoas utilizarem e testarem essa aplicação.

## Api

### Descrição

Esta api foi desenvolvida com o simples propósito de cadastrar um novo usuário

### Funcionamento

Seu funcionamento se da através de primeiramente uma conexão com banco de dados, e em seguida, a disponibilidade do endpoint "users/register/" que recebe um post

Envia como retorno para o front:
Sucesso : OK
Warning: Caso haja um cadastro de um usuário igual
Erro : Caso contrário será fornecido um json com a mensagem de erro.

#### Tecnologias ultilizadas

- Backend
  - Laravel
- SGBD
  - MySQL

## Aplicação frontend

### Descrição

A aplicação frontend envia via post os dados para serem cadastrados no banco de dados.

#### Tecnologias ultilizadas

- Angular.
