# Bnex Challenge

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--pkUM67f6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qxvlesvnv9ahxx2kcx47.png" width="500" alt="Desafio Bnex usando Django Rest Framework, React e PostgreSql">

> Esté é um projeto criado para o desafio da empresa Bnex usando Django Rest Framework, React e PostgreSql.

## Módulos e suas funcionalidades

### Frontend - React + Vite

No projeto de frontend utilizei a ferramenta [Vite](https://vitejs.dev/) para facilitar a configuração do projeto em [ReactJs](https://react.dev/), como convesão de pastas, components e subida do servidor para disponibilizar o aplicativo.

Para a estilização utilizei o [Tailwindui](https://tailwindui.com/) permitindo a utilização de componentes mais modernos e estilizados.

Inicialmente o usuário verá uma tela de cadastro/login onde se autenticará para poder utilizar os recursos do app. Autenticação é um modelo simples usando Sessão, mesmo sabendo das suas vulnerabilidades por se tratar de um projeto pontual e mais simples.

Uma vez autenticado o usuário poderá ver a lista de produtos já cadastradas no app, editar suas informações ou cadastrar novos produtos.

### Backend - Django Rest Framework

Para o backend utilizei o [Django Rest Framework](https://www.django-rest-framework.org/), uma toolkit muito prática para a criação de API's que facilita muito a configuração de rotas, definição de modelos, serialização, sugurança (authorization e autentication) entre outros benefícios.

A autorização foi levemente customizada visando facilitar a integração com o frontend através da disponibilização de pontos de integração para gestão dos usuários.

Para visualização dos recursos, criei templates baseados em classes (CBV) para simplificar e dar uma cara mais personalizada para a experiência dos desenvolvedores.

### Data Base - PostgreSql

O banco de dados foi criado em [PostgreSql](https://www.postgresql.org/), um dos bancos mais utilizado no mercado e também muito fácil/prática de manter.

## Pré-requisitos

Para poder utilizar o projeto você precisará de algumas ferramentas instaladas em sua máquina:

- Conhecimentos mínimos e familiaridade com as ferramentas abaixo. Caso não tenha, recomendo o estudo dos mesmos para poder utiliza-los com confiança e segurança
- [Git](https://git-scm.com/) - para poder clonar/copiar o projeto diretamente em sua máquina
- [Docker](https://www.docker.com/) - de preferência a engine, onde cocê poderá subir os containers da aplicação


## Instalando o Bnex Challenge

Para instalar o projeto Bnex Challenge, siga as seguintes etapas:

- Em sua máquina de preferência, crie uma pasta onde o mesmo será copiado
- Clone o projeto [localizado no meu repositório do Github](https://github.com/dlcurado/bnex-challenge.git)
- Acesse a raiz do projeto e suba com o composer do docker, com o seguinte comando:
```
~ docker compose up
```
- Aguarde todos as etapas de instalação dos pré-requisitos. Caso encontre algum problema, por favor, entre em contato comigo.


## Usando o Bnex Challenge

Após a instalação seguindo os passos acima, algumas URLs estarão disponíveis para você utilizar, confore descrito abaixo:

### Aplicação, via Frontend, acesse:
```
http://localhost:5173
http://217.0.0.1:5173
```

#### Cadastro / Login

- Faça o cadatro do seu usuário para poder ter acesso aos recursos disponíbilizados.
- Caso já possua um cadastro, basta alterar a tela clicando no botão superior direto para realizar o login.
- Após o login, você estará na tela de listagem de produtos.

#### Listagem de produtos

- Após o login, você estará na tela de listagem de produtos.
-- OBS: caso não apareça nenhum produto, provavelmente você ainda não possui nenhum produto cadastrado.
- Os produtos serão disponibilizados lado a lado em formato de cartões.

#### Criar um novo produto

- Após o login, também deverá ser exibido um botão no cabeçalho com o texto "Cadastrar". Clique nele.
- Você será redirecionado para um formulário simples onde deverá preencher os campos `nome, descrição e valor` do produto
- Assim que preechidos, basta clicar em Salvar
- Caso deseje cancelar, basta clicar no botão Cancelar e você será redirecionado para a listagem de produtos

#### Editar um produto

- Na listagem de produtos, os cards dos produtos são objetos clicáveis, ou seja, ao clicar em um deles, será redirecionado para a tela de edição
- Você será redirecionado para um formulário onde os campos `nome, descrição e valor` preencherão o formuário com os valores atuais do produto
- Agora basta editar as informações que deseja e clicar em Salar ou Cancelar

#### Excluir um produto

- Na listagem de produtos, os cards dos produtos são objetos clicáveis, ou seja, ao clicar em um deles, será redirecionado para a tela de edição
- Repare que nesta tela também existe um botão para excluir o mesmo
- Agora basta clicar em Excluir ou Cancelar

### API, via Backend, acesse:
```
http://localhost:8000
http://217.0.0.1:8000
```

#### Funcionalidades

As mesmas funcionalidades mencionadas anteriormente podem ser realizadas diretamente via API, acessando os links acima.
Aqui você estará vendo os templates customizados, criados especialmente para permitir as operações de listagem, edição, inclusão e exclusão de produtos.
A tela de listagem trás o nome de todos os produtos cadastrados. Á sua frente você encontrará links para `visualização completa das infos, edição e exclusão` dos mesmos.
Para incluir um novo produto, basta acessar o botão acima da listagem com o texto "Inserir".


## 📫 Contribuindo para Bnex Challenge

Para contribuir com Bnex Challenge, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#" title="Daniel Lourenço Curado">
        <img src="https://avatars.githubusercontent.com/u/649317?s=400&v=4" width="100px;" alt="Foto do Daniel Lourenço Curado no GitHub"/><br>
        <sub>
          <b>Daniel Lourenço Curado</b>
        </sub>
      </a>
    </td>
  </tr>
</table>