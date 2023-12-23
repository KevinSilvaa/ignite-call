<div align="center">
  <h1>Ignite Call 📆</h1>

  ![Ignite Call Home](https://github.com/KevinSilvaa/ignite-call/assets/143517496/810404ad-c90d-4f5e-b2cb-7b68811a6078)
</div>

<h3 align="center">Projeto realizado durante a trilha para especialização em ReactJS da Rocketseat</h3> <br><br>

<div align="center">
  <a href="https://ignite-call-kevinsilvaa.vercel.app" target="_blank">Veja o resultado final clicando aqui</a>
</div>

&nbsp;
&nbsp;

# ℹ️ Detalhes do projeto

O **Ignite Call** tem o objetivo de facilitar o agendamento de reuniões ou qualquer outro compromisso dentro do seu Google
Calendar, mostrando apenas os dias que você tem disponível com base nas suas escolhas. Para a construção dessa aplicação foi
utilizado Next.js e algumas frameworks, principalmente o Next Auth, permitindo o login com o Google.

Para a estilização do projeto foi utilizado um Design System construído anteriormente, clique [aqui](https://github.com/KevinSilvaa/design-system-ignite) para ver informações mais detalhadas sobre este design system

<br>

# 📁 Tecnologias utilizadas para construção da aplicação

- `TypeScript`; Utilizado para adicionar uma tipagem estática a aplicação, reduzindo a quantidade de possíveis erros.
- `MySQL`; Utilizado como o banco de dados desta aplicação.
- `Prisma`; Utilizado como ORM da aplicação, facilitando a maneira de comunicação com o banco de dados.
- `Axios`; Utilizado para fazer requisições para *API*.
- `Next.js`: Uma Framework do React utilizada para estruturação das páginas com ainda mais performance e muitas outras vantagens.

  - `Next Auth`; Utilizado para fazer a conexão com o sistema de autenticação do Google dentro da aplicação.
  - `Next Seo`; Utlizado para melhorar a indexação e o posicionamento da aplicação nos navegadores.
  - `Stitches`; Utilizado para a estilização das páginas dentro do JavaScript (CSS-in-JS).
  - `React Hook Form`; Utilizado para lidar com formulários dentro da aplicação.
  - `Zod`; Utilizado para validar campos e transformar dados do formulário corretamente.
  - `React Query`; Utilizado para lidar com parâmetros a serem enviados para uma rota da *API*.
  - `Phosphor Icons`; Utilizado para importar ícones de uma maneira mais simples.

&nbsp;
&nbsp;
&nbsp;

# 🛠️ Como executar o projeto localmente

### Clone o projeto para o local desejado na sua máquina

```bash
$ git clone git@github.com:KevinSilvaa/ignite-call.git
```

&nbsp;
&nbsp;
&nbsp;

### 💻 Executando o projeto
### A aplicação esta utilizando MySQL, então será necessário utilizar o Docker ou qualquer outra ferramenta para hospedar o banco de dados.

```bash
# Navegue até o diretório onde o projeto está localizado
$ cd ignite-call

# Instale todas as dependências necessárias do projeto
$ npm install

# Renomeie o arquivo ".env.example" para ".env" e insira as variáveis necessárias

# Execute o comando abaixo para criar as migrations do banco de dados
$ npx prisma migrate dev

# Para abrir o banco de dados no navegador execute o comando abaixo (Opcional)
$ npx prisma studio

# Inicie a aplicação
$ npm run dev

# Após todos esses passos, utilize o endereço enviado via terminal dentro do seu navegador para acessar a aplicação. O endereço padrão utilizado no projeto foi:

http://localhost:3000
```

## Feito por:

### Kevin
### Linkedin: www.linkedin.com/in/kevinsilvaa
