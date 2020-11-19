# API Rede Social

## Desenvolvimento de aplicação Rede Social
<!--ts-->
    * Aplicação permiti criar postagem e receber comentários.
<!--te-->
# Dependências
  ## NodeJS
  <!--ts-->
    * Baixar do site https://nodejs.org/en/download/
    * Instalar nodeJS
  <!--te-->
  ## Sistema Apache
  <!--ts-->
    * Baixar pacote Uniserver
    * Instalar Uniserver
    * Anotar onde a pasta UniServer foi criada
  <!--te-->


## Como rodar a aplicação
<!--ts-->
  * Extrair o arquivo projeto.rar dentro da raiz da particição principal (Por padrão é a C:)

  * Dentro de Projeto haverá duas pasta - Web e Server

  * A pasta SERVER contém a API
    * Rodando a api
      * Abrir o terminal - Apertar a tecla windows+R
        * Digitar cmd e executar
        * Abrirá o prompt de Comando
        * digitar "cd .." sem as aspas, e dar enter, repetir o processo até chegar na raiz principal, que no caso será a partição principal (C:).
        * digitar "cd Projeto" depois "cd server".
        * Após chegar a pasta server, digitar "node server.js" sem as aspas.
        * A API iniciará


  * Abrir o Windows Explorer novamente e ir até a pasta Projeto
  * Copiar todos os arquivos de dentro da pasta WEB
  * Rodando a parte Web
    * Com a anotação de onde está a pasta Uniserver, percorrer este caminho até encontra-lá
    * Acessar a Pasta Uniserver
    * Acessar a Pasta www
    * Deletar todos de dentro
    * Copiar todos os arquivos de dentro de web para dentro de www
    * Feito isto retornar para pasta Uniserver e executar Unicontroller
<!--te-->

## Acessando a web
  * Após todas as etapas, o serviço estará online
  * Abrir o browser e digitar http://localhost/


## Observações
<!--ts-->
    * A aplicação foi desenvolvida sem utilização de banco de dados, portanto os registros gerados são temporário, enquanto a aplicação estiver rodando os mesmos estarão armazenados, quando finalizada a aplicação, todas os dados serão perdidos.
<!--te-->



