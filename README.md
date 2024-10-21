# SGT - Sistema de Gerenciamento de Tarefas

---

## Tecnologias

Backend:

- [Java 23](https://docs.oracle.com/en/java/javase/23/)

- [Spring Boot](https://spring.io/projects/spring-boot)
 
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)

- [Lombok](https://projectlombok.org/)

- [Flyway Core](https://flywaydb.org/)

BD:

- [MySQL](https://www.mysql.com/)

Frontend:

- [React.TS](https://react.dev/learn/typescript)

- [Axios](https://axios-http.com/docs/intro)

IDE:

- [Intellij Community](https://www.jetbrains.com/idea/download/?section=windows)

- [Visual Studio Code](https://code.visualstudio.com/download)

- [DBeaver Community](https://dbeaver.io/download/)


# Setup da aplicação (local)

## Pré-requisito

Antes de rodar a aplicação é preciso garantir que as seguintes dependências estejam corretamente instaladas:
```
Java JDK 23
MySQL 8
Maven 3.9.6 
Node 20.13.1

*Configurar variáveis de ambiente
```

## Preparando ambiente

É necessário a criação da base de dados relacional no MySQL

```
CREATE DATABASE 'sgt';
```

## Instalação da aplicação

Primeiramente, faça o clone do repositório:
```
https://github.com/jgarciarosa/sgt.git
```
Feito isso, acesse o projeto backend, e abra o mesmo com o IntelliJ e aguarde o download das dependências. Após:
```
* Go to File > Settings > Plugins
 * Click on 'Type / to see options'
 * Search for Lombok Plugin
 * Click on Install plugin
 * Restart IntelliJ IDEA 
```
Abra o arquivo SgtApplication.java, no diretório src/main/java:
```
*Se necessário defina a versão correta do JDK
```
Antes de iniciar o projeto, acesse o arquivo application.yml no diretório src/main/resources, e altere o campo password, com a senha configurada para o usuário root do seu banco:
```
password: Dev@1234
```
Finalizado esse passo, basta iniciar a aplicação.

Pronto. A aplicação backend está disponível em http://localhost:8080/api/task

<HR>

Agora vamos para a execução do frontend:

Abra no Visual Studio Code a pasta sgt-frontend, e no terminal digite o comando abaixo para instalar as dependências: 
```
npm install
```

Finalizado esse passo, basta iniciar a aplicação digitando o comando abaixo no terminal:.
```
npm run dev
```

Pronto. A aplicação backend está disponível em http://localhost:5173/

<hr>

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
