# Frontend

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Docker instalado na sua máquina. Você pode baixar e instalar o Docker a partir do [site oficial do Docker](https://www.docker.com/get-started).

## Passos para Rodar o Projeto

1. **Clone o repositório do projeto:**

   ```bash
   git clone git@github.com:SwiftPix/Frontend.git
   cd Frontend
   ```
2. **Construa a imagem Docker:**
No diretório do projeto, execute o comando abaixo para construir a imagem Docker:

   ```bash
   docker build -t frontend .

3. **Rode o container Docker:**

Após construir a imagem, execute o comando abaixo para rodar o container:

   ```bash
   docker run -p 8081:8081 -d frontend
```


4. ** Acesse o projeto:**

 O projeto estará rodando no endereço http://localhost:8081. 
 Você pode acessar essa URL no seu navegador para verificar se a aplicação está funcionando corretamente.

## Para rodar sem o Docker

1. **Clone o repositório do projeto:**

   ```bash
   git clone git@github.com:SwiftPix/Frontend.git
   cd Frontend
   ```
2. **Instale as dependências:**
No diretório do projeto, execute o comando abaixo para installar as dependências do projeto:

   ```bash
   yarn / npm i

3. **Rode o frontend :**

Após fazer download das dependências, execute o comando abaixo para rodar o projeto :

   ```bash
   yarn start / npm start 
```

4. ** Acesse o projeto:**

 O projeto fica disponível para testar no aplicativo Expo via leitura de QRcode, na web clicando em w, ou testando na IDE Android ou IOS de sua preferência.



  

