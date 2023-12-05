# Projeto-A3-Planner-Semanal

## Passso-a-passo para rodar nosso projeto

Será necessário a instalação de algumas ferramentas para suporte:

 <b> Postman </b> (caso queira testar a funcionalidade do Back-end);<br>
https://www.postman.com/downloads/

<b>Xampp</b> - Recomendamos o uso do xamp como ferramenta para criação e suporte para o banco de dados:<br>
https://www.apachefriends.org/pt_br/download.html<br><br>
Para funcionar o Xamp siga estes passos:<br>
1-Instalação padrão;<br>
2-Start no apache;<br>
3-Start no MySQL;<br>
4-Clicar na opção admin do MySQL;<br>
5-Ao entrar na tela do navegador abrir a opção SQL no topo;<br>
6-Colar na tela aberta o Script que disponibilizamos no caminho (back-end, sql, pirg.sql) e executar;<br>
7-Pronto, banco de dados está trodando.<br><br>

<b>Vesões Utilizadas</b><br>
Node- 10.24.1<br>
Angular - 10.2.1<br>
Nodemon - 3.0.2<br>
concurrently - 4.1.2 <br>

## Como Funcionar Back-End

Para funcionar o Back-End deve se seguir alguns passos.<br>
Com o projeto ja aberto no vscode será necessário fazer algumas instalações.<br>
1- Abra um terminal;<br>
2- Com o comando "cd" acesse o caminho do back-end (Projeto-A3-Planner-Semanal/back-end)<br>
3- Instale os comandos nvm com (source ~/.nvm/nvm.sh) OBS: O node deve estar instalado em sua maquina e você deve utilizar o terminal bash;<br>
4- Instale o node com a versão certa usando (nvm install 10.24.1)<br>
5-Instale o nodemon com (npm install -g nodemon)<br>
6-Instale o Angular com (npm install -g @angular/cli@10.2.1)<br>
7-Instale o Concurrently com (npm install -g concurrently@4.1.2)<br>
8-Instale o Dotenv com (npm install dotenv)<br>
9-Pode rodar o back com o comando (npm run start) para testar se funcionou. OBS: Lembrando que o passo de criação do banco com o XAMPP deve ter sido seguido;<br>
10-Pode dar CTRL C para matar a aplicação.<br>

## Como funcionar o Front

Após realizar os passos do back end, execute o comando (cd ..) para voltar a raiz do projeto, e utilizando o comando (cd) acesse o caminho Projeto-A3-Planner-Semanal/front-end/pirg. <br>
1-Instale o node com a versão certa usando (nvm install 10.24.1)<br>
2-Instale o Concurrently com (npm install -g concurrently@4.1.2)<br>
3-Instale o Angular com (npm install -g @angular/cli@10.2.1)<br>

## Como rodar o projeto

Retorne a raiz utilizando (cd ..) e roda o comando (npm run start). Copia o localhost que aparecer, cole em um navegador e já está funcionando.

# Lembre de seguir todos os passos corretamente para nao encontar falhas
