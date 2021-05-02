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
        * Navegar até a pasta do projeto através do comando cd.
        * Após acessar a pasta SERVER, instalar as dependências através do comando yarn ou npm -i.
        * Ao encerrar a instalação das dependências, é necessário transpilar o código typescript para javascript.
        * Execute o comando yarn build ou npm run build. Esses comandos irão buildar o projeto e será gerada a pasta DIST.
        * DIST irá conter tods os arquivos do projeto transpilado em JS.
        * Ao encerrar a etapa de build, será possível rodar o back-end (API) com comando node dist/server.js.
        * A mensagem de start irá aparecer no log "Server Started on Port 3333!".


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
    * A aplicação foi desenvolvida sem utilização de banco de dados, portanto, os registros gerados são armazenados temporariamente, assim, enquanto a aplicação estiver online os mesmos serão persistidos e ao finalizr aplicação os dados serão perdidos.
<!--te-->



