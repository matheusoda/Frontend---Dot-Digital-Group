# Desafio Frontend - Dot Digital Group

Este projeto consiste em uma **interface web responsiva** que consome a API do teste de backend em Node.js. O objetivo é permitir visualizar e interagir com cursos, turmas e matrículas de usuários.

---

## Tecnologias Utilizadas

- **React** (SPA)
- **HTML5, CSS3, JavaScript**
- **Axios** para requisições HTTP
- **React Router** para navegação entre páginas
- **CSS puro** (sem frameworks como Bootstrap, Material UI ou Tailwind)
- **Vite** como bundler

---

## Funcionalidades

### 1. Listagem de Cursos e Turmas
- Exibe todos os cursos com suas turmas disponíveis (`status = "disponível"`).
- Filtros:
  - Por **título** (campo de busca)
  - Por **temas** (checkbox: inovação, tecnologia, marketing, empreendedorismo, agro)

### 2. Cadastro de Usuário
- Formulário com:
  - Nome
  - E-mail
  - Botão “Cadastrar”
- Exibe mensagens de sucesso ou erro conforme validações da API.

### 3. Matrícula em Turmas
- Botão **"Matricular"** nas turmas disponíveis.
- Solicita o e-mail ou seleção de um usuário existente.
- Valida regras de negócio:
  - Não permite matrícula em turma encerrada.
  - Não permite matrícula duplicada (mesmo usuário em duas turmas do mesmo curso).
  - Não permite matrícula fora da data de início e fim.

### 4. Visualização de Matrículas
- Campo para selecionar ou digitar um usuário.
- Lista cursos e turmas em que ele está matriculado.

---


## Estrutura do Projeto
```bash
frontend/
frontend/
├─ node_modules/
├─ public/
├─ src/ # Código-fonte React
│ ├─ components/ # Componentes reutilizáveis
│ ├─ pages/ # Páginas da aplicação
│ ├─ api/ # Comunicação com API (Axios)
│ ├─ App.tsx # Componente raiz
│ └─ main.tsx # Entrada do React
├─ .env # Variáveis de ambiente
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
├─ README.md
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

---


## Como Rodar o Projeto

**É necessário estar com uma versão do node a partir da 20.19**

### 1. **Descompacte** o arquivo ZIP do frontend em uma pasta local.


### 2. Acesse a pasta contendo o frontend
```bash
cd frontend-dotdigital
``` 


### 3. Instale as dependências:
```bash
npm install
```

### 4. Necessário estar rodando a aplicação de backend para conseguir acessar o sistema e utilizar as funcionalidades.

### 5. Rode o projeto:
```bash
npm run dev
```

### 6. Acessar o frontend no link:
```bash
http://localhost:5173/
```

---

Autor

Matheus Kagohara
Desafio Dot Digital Group - Frontend