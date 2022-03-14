## OBS: Aqui consta somente as questões por extenso ##


## 1 ##

## A ##
- Sim, pois o modo string pode incluir números e isso faz com que aumente a probabilidade de diferença na geração de id.
## B ##
- import { v4 } from 'uuid 


## 2 ##

## A ##

- O código usa a Lib Knex pra criar a conexão, e também usa a Lib Dotenv pra deixar os dados do banco de dados.
- a constante de create user faz uma conexão com o banco e insere os paramentros passados na table userTableName

## B ##
- CREATE TABLE Users (
- id VARCHAR(100) PRIMARY KEY,
- email VARCHAR(100)  UNIQUE NOT NULL
- password VARCHAR(100) NOT NULL
- )


## 3 ##

## A ##

-  A as string seta o parametro como string. O uso dela faz com que na hora da transpilação o js entenda aquilo como uma string


## 7 ##

## A ##
- A linha as any não limita o tipo do parametro.
