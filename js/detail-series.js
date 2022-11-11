let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSeries = qsObj.get('idSeries');

apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
urlDetalles = `https://api.themoviedb.org/3/tv/${idSeries}?api_key=${apiKey}&language=en-US`;

let titulo = document.querySelector('.tituloSeries');
let detalleSeries = document.querySelector('.padrethor');

fetch(urlDetalles)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  titulo.innerText = data.name + ' ' + ` (${data.first_air_date})`
  let generos = ''
  for (let i = 0; i < data.genres.length; i++) {
   if (i == (data.genres.length)- 1) {
        generos += data.genres[i].name
    } else {
        generos += data.genres[i].name + ' -' + ' '
    }}
    detalleSeries.innerHTML = `<article class="articulo hijothor"><img class="imagenThor" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt=""></article>
                        <article class="articulo hijosinopsis">
                            <h3>Sinopsis</h3>
                            <p>${data.overview}</p>
                            <h4>Fecha de estreno: ${data.first_air_date}</h4>
                            <h4>Popularidad: ${data.popularity}</h4>
                            <h4>Número de temporadas: ${data.number_of_seasons}</h4>
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
