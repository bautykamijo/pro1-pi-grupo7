let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula');

apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
urlDetalles = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=en-US`;
urlProviders = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${apiKey}`

let titulo = document.querySelector('.peliculaDetalle');
let detallePelicula = document.querySelector('.padrethor');

fetch(urlDetalles)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  titulo.innerText = data.title + ' ' + ` (${data.release_date})`
  let generos = ''
  for (let i = 0; i < data.genres.length; i++) {
   if (i == (data.genres.length)- 1) {
        generos += data.genres[i].name
    } else {
        generos += data.genres[i].name + ' -' + ' '
    }}

fetch(urlProviders)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  let compra = data.results.US.buy;
  console.log('WATCH PROVIDERS',compra);
  let usa = '';
  for (let i = 0; i < compra.length; i++) {
    usa += compra[i].provider_name + ' , ' 

    
  }
  return data;
})
.catch(function(error) {
  console.log(error);
  return error;
})
    detallePelicula.innerHTML = `<article class="articulo hijothor"><img class="imagenThor" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt=""></article>
                        <article class="articulo hijosinopsis">
                            <h3>Sinopsis</h3>
                            <p>${data.overview}</p>
                            <h4>Fecha de estreno: ${data.release_date}</h4>
                            <h4>Popularidad: ${data.popularity}</h4>
                            <h4>Duración: ${data.runtime}m</h4>
                            <h4><a href="./genres.html">Generos: </a><a href="./detail-genres.html?idGenero=">${generos}</a></h4>
                            <h4>Añadir a FAVORITOS: <a href="./favorite.html"><i class="fa-solid fa-star"></i></a></h4>
                            <h4></h4>
                        </article>`

  return data;
})
.catch(function(error) {
    console.log(error);
  return error;
})

