# 🏛️ OLYMPOS — Dos deuses às grandes lendas

Painel interativo sobre **Mitologia Grega**, desenvolvido para o **Desafio 02 — Painel Interativo com API Pública usando React + Vite**, do curso BOT_DEVSOL_T1_2026.

## 📌 Sobre o projeto

O OLYMPOS transforma informações da mitologia grega disponibilizadas por uma API pública em uma interface visual, organizada e interativa.

A aplicação permite consultar personagens de diferentes categorias da mitologia grega, visualizar informações detalhadas e encontrar personagens de maneira mais rápida.

## 🎯 Problemática

As informações sobre a mitologia grega estão distribuídas em diferentes fontes, tornando a consulta sobre deuses, heróis, monstros, titãs e outros personagens menos prática e organizada.

## 💡 Objetivo

Criar um painel interativo que facilite a consulta e a visualização de informações sobre personagens da mitologia grega utilizando dados de uma API pública.

## 👥 Público-alvo

* Estudantes;
* Pessoas interessadas em mitologia grega;
* Pessoas que desejam consultar informações sobre personagens mitológicos de forma rápida e organizada.

## 🛠️ Tecnologias utilizadas

* React
* Vite
* JavaScript
* HTML
* CSS
* API pública
* Git e GitHub

## 🌐 API utilizada

**The Greek Myth API**

API utilizada para obter informações sobre personagens da mitologia grega.

Endpoints utilizados:

* `/api/gods`
* `/api/heroes`
* `/api/monsters`
* `/api/titans`

## ✨ Funcionalidades

* 🔎 Pesquisa de personagens;
* 🏛️ Filtro por categoria;
* 👤 Visualização de detalhes dos personagens;
* ⭐ Sistema de favoritos;
* 💾 Salvamento dos favoritos no navegador;
* 🖼️ Exibição das imagens disponibilizadas pela API;
* ⏳ Estado de carregamento;
* ⚠️ Tratamento de erros da API;
* 🔍 Mensagem quando nenhum resultado é encontrado;
* 📱 Interface responsiva para diferentes tamanhos de tela.

## 🗂️ Categorias

O painel organiza os personagens em:

* Deuses;
* Heróis;
* Monstros;
* Titãs.

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta

```bash
cd olympos
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

Depois, acessar o endereço fornecido pelo Vite no terminal.

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Foram utilizados prompts para auxiliar na:

* Estruturação do projeto React;
* Organização dos componentes;
* Integração com a API pública;
* Implementação da pesquisa e dos filtros;
* Criação do sistema de favoritos;
* Tratamento dos estados de carregamento e erro;
* Tradução e organização das informações;
* Correção de erros durante o desenvolvimento.

### Exemplo de prompt utilizado

> "Estou desenvolvendo um painel interativo com React + Vite sobre mitologia grega. Quero utilizar uma API pública para apresentar deuses, heróis, monstros e titãs. Ajude a estruturar os componentes, integrar a API e implementar pesquisa, filtros, detalhes, favoritos e estados de carregamento e erro."

**Objetivo do prompt:** utilizar a IA como apoio técnico para estruturar e desenvolver as funcionalidades exigidas pelo desafio.

## 📁 Organização do projeto

```text
olympos/
├── public/
├── src/
│   ├── api/
│   │   ├── greekApi.js
│   │   ├── storySummaries.js
│   │   └── translations.js
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MythologyCard.jsx
│   │   ├── CharacterDetails.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   └── index.css
│
├── package.json
└── README.md
```

## 📱 Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela, incluindo:

* Computadores;
* Tablets;
* Celulares.

## 📚 Projeto acadêmico

Projeto desenvolvido para o:

**BOT_DEVSOL_T1_2026 — Desafio 02**

**Tema:** Mitologia Grega
**Projeto:** OLYMPOS
**Subtítulo:** Dos deuses às grandes lendas
