## Nome do aplicativo 
Podcast Manager

### Decrição
Um app ao estilo netflix, aonde possa centralizar diferentes epsodios podcasts separados por categorias 

### Dominio
Podcast feitos em video

### Features
-Listar os podcasts em sessões de categorias 
 -[Saude, Fitness,  Mentalidade , Humor ]
-Filtrar epsodios por nome podcast

## Como 

##### Feature:
-Listar os podcasts em sessões de categorias

### Como vou implantar:
Vou retornar em uma api rest (json) o 
nome do podcast, nome do epsodio, imagem de capa, link e categoria
GET: retorna a lista de epsódios

response:
'''js
[
  {
    podcastName: "Moguls of Media",
    episodio: "So That’s Your Best Drag?!?",
    videoId:"Wxf2oxatokQ&t"
    cover: "https://i.ytimg.com/vi/Wxf2oxatokQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Wxf2oxatokQ&t"
    category: {"humor", "react"}
  }
  {
    podcastName: "Moguls of Media",
    episodio: "Goss So Good We Had To Make A Video",
    videoId:"og93MB90zzA"
    cover: "https://i.ytimg.com/vi/og93MB90zzA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=og93MB90zzA"
    category: {"humor", "makeup"}
  }
]
'''