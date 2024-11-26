# SGT - Sistema de Gerenciamento de Tarefas

# Descrição
Aplicaão full stack simples de gerenciamento de tarefas, onde o usuário é capaz de adicionar, visualizar, atualizar e remover as tarefas de uma lista em um banco de dados MySQL. O back-end é um aplicativo Spring Boot que expõe uma API REST. O frontend é um aplicativo React que usa a API backend para salvar e recuperar dados do banco de dados.

## Tecnologias

Backend:

- Linguagens de programação: [Java](https://docs.oracle.com/en/java/javase/21/), [TypeScript](https://developer.mozilla.org/en-US/docs/Glossary/TypeScript)

- Frameworks: 
  - [Spring Boot](https://spring.io/projects/spring-boot), [Maven](https://maven.apache.org/)
    - [Spring Data JPA](https://spring.io/projects/spring-data-jpa) 
    - [Lombok](https://projectlombok.org/)
    - [Flyway Core](https://flywaydb.org/)
  - [Vite](https://vite.dev/guide/), [React](https://react.dev/)
    - [React.TS](https://react.dev/learn/typescript)
    - [Axios](https://axios-http.com/docs/intro)
  - Banco de Dados: [MySQL](https://www.mysql.com/)
  - Conteinerização: [Docker](https://www.docker.com/)
  - IDE: [Intellij Community](https://www.jetbrains.com/idea/download/?section=windows), [Visual Studio Code](https://code.visualstudio.com/download), [DBeaver Community](https://dbeaver.io/download/)


# Setup da aplicação (local)

## Pré-requisito

Precisa ter instalado [Docker](https://www.docker.com/)!
-
1. No seu terminal clone o repositório e entre na pasta do projeto
```
git clone https://github.com/jgarciarosa/sgt.git
```
2. Entre na pasta do projeto
```
cd .\sgt\
```
3. Execute o comando para construir e subir os containers
```
docker-compose up --build
```

Pronto. A aplicação backend está disponível para uso, basta abrir no seu navegador: http://localhost:3000/


# API

O projeto disponibiliza uma API: Task, onde utiliza o padrão REST de comunicação, produzindo e consumindo arquivos no formato JSON.

Segue abaixo a API disponível no projeto:

#### Task

 - /api/task/ (GET)
 - /api/task/{id} (GET)
 - /api/task/ (POST)
     - Espera atributos no formato JSON para serem critérios de criação no body da requisição.
     - exemplo json:
    ```
    {
        "title": "Tarefa 1",
        "description": "Tarefa 1",
        "status": false
    }
 - /api/task/{id} (PUT)
     -  Espera atributos no formato JSON para serem critérios de atualização no body da requisição.
     - exemplo json:
    ```
    {
        "title": "Tarefa",
        "description": "Tarefa",
        "status": false
    }
    ```
 - /api/task/{id} (DELETE)

 <hr>

 # FRONTEND

O projeto disponibiliza um frontend, onde é possível a realização das ações abaixo, salvando as alterações no banco de dados, de forma com que ao reiniciar a aplicação, os dados se mantenham salvos:

    1) Adicionar Tarefa: O usuário deve ser capaz de criar uma nova tarefa informando um título e uma descrição.
    2) Listar Tarefas: O sistema deve exibir todas as tarefas adicionadas, com título e descrição.
    3) Atualizar Tarefa: O usuário deve ser capaz de modificar o título e/ou descrição de uma tarefa existente.
    4) Remover Tarefa: O usuário deve poder remover uma tarefa da lista.
    5) Filtro de Tarefas: O usuário deve poder filtrar as tarefas para visualizar apenas as tarefas concluídas ou não concluídas.
    6) Marcar Tarefa como Concluída: O usuário pode marcar uma tarefa como concluída ou não concluída.