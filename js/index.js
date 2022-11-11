apiKey = '20ad67ce31acb5c646fe21c26a0d44f1'
urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
urlTendencias = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

let listaPopulares = document.querySelector('.populares')
let seriesPopulares = document.querySelector('.seriesPopu')
let tendencias = document.querySelector('.tendencias')



fetch(urlPopular)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.results);
  for (let i = 1; i < 7; i++) {
    if (i != 2) {
  let popular = data.results[i]
  listaPopulares.innerHTML += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-movie.html?idPelicula=${popular.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
                                ${popular.title} (${popular.release_date})
                                </a>
                                </article> `
    }
  
                     
    
  }
  return data;
})
.catch(function(error) {
  return error;
})


fetch(urlSeries)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.results);
  for (let i = 1; i < 9; i++) {
    if (i != 5 && i != 3 && i != 7) {
      
    
  let series = data.results[i]
  seriesPopulares.innerHTML += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-serie.html?idSeries=${series.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${series.poster_path}" alt="" class="img1">
                                ${series.name} (${series.first_air_date})
                                </a>
                                </article> `
  
                              }
                     
    
  }
  return data;
})
.catch(function(error) {
  return error;
})


fetch(urlTendencias)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.results);
  for (let i = 5; i < 10; i++) {
  let tendencia = data.results[i]
  tendencias.innerHTML += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-movie.html?idPelicula=${tendencia.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${tendencia.poster_path}" alt="" class="img1">
                                ${tendencia.title} (${tendencia.release_date})
                                </a>
                                </article> `
  
  
                     
    
  }
  return data;
})
.catch(function(error) {
  return error;
})
