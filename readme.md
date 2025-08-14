# Gerente de Podcast 🎧

![Banner](https://via.placeholder.com/1200x400?text=Gerente+de+Podcast) <!-- Adicione um banner real posteriormente -->

Um aplicativo estilo Netflix para organizar e explorar podcasts em vídeo por categorias.

## 📌 Visão Geral

O **Gerente de Podcast** é uma plataforma que centraliza episódios de podcasts em vídeo, organizando-os por categorias como Saúde, Fitness, Mentalidade e Humor.

## ✨ Funcionalidades

- 🗂️ Listagem de podcasts por categorias
- 🔍 Filtragem por nome de podcast
- 🖼️ Visualização de capa e detalhes
- 🔗 Acesso direto aos episódios
- 📱 API RESTful para integração

## 🛠️ Tecnologias

- **Backend**: Node.js + Express
- **Frontend**: (a definir)
- **Banco de Dados**: (a definir)
- **Formato de Dados**: JSON

## 📡 API Endpoints

### GET `/api/podcasts`

Retorna a lista completa de podcasts.

**Exemplo de resposta:**
```json
[
  {
    "podcastName": "Magnatas da Mídia",
    "episódio": "Então essa é sua melhor drag?!?",
    "videoId": "Wxf2oxatokQ&t",
    "capa": "https://i.ytimg.com/vi/Wxf2oxatokQ/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=Wxf2oxatokQ&t",
    "categoria": ["humor", "react"]
  }
]