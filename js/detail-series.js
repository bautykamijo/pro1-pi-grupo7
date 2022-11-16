let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSeries = qsObj.get('idSeries');

apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
urlDetalles = `https://api.themoviedb.org/3/tv/${idSeries}?api_key=${apiKey}&language=en-US`;
urlProviders = `https://api.themoviedb.org/3/tv/${idSeries}/watch/providers?api_key=${apiKey}`;
let urlReco = `https://api.themoviedb.org/3/tv/${idSeries}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
let urlReviews = `https://api.themoviedb.org/3/tv/${idSeries}/reviews?api_key=${apiKey}&language=en-US&page=1`;


let titulo = document.querySelector('.tituloSeries');
let img = document.querySelector('.imagenThor');
let estreno = document.querySelector('.estreno');
let popularidad = document.querySelector('.popularidad');
let duracion = document.querySelector('.duracion');
let overview = document.querySelector('.overview');
let genero = document.querySelector('.genero');
let boton = document.querySelector('.botonera');
let provider = document.querySelector('.provider');
let reviews = document.querySelector('.reviews');
let contenido = document.querySelector('.contenido');
let autor = document.querySelector('.autor');


fetch(urlDetalles)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  titulo.innerText = data.name + ' ' + ` (${data.first_air_date})`
  let generos = '';
  for (let i = 0; i < data.genres.length; i++) {
   if (i == (data.genres.length)- 1) {
        generos += data.genres[i].name;
    } else {
        generos += data.genres[i].name + ' -' + ' ';
    }}
    img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    overview.innerText = `${data.overview}`;
    estreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
    popularidad.innerText = `Popularidad: ${data.popularity}`;
    duracion.innerText = `Número de temporadas: ${data.number_of_seasons}`;
    genero.innerText = `${generos}`;
    boton.innerText = 'Ver recomendaciones';
    seccion.style.display = 'none';

  return data;
})
.catch(function(error) {
    console.log(error);
  return error;
})

fetch(urlReco)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
  console.log('RECOMENDACIONES',data);
  for (let i = 0; i < 5; i++) {
    let popular = data.results[i];
    seccion.innerHTML  += ` <article class="cuadrado thor"> 
    <a class="imagenreco" href="./detail-series.html?idSeries=${popular.id}">
    <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
    ${popular.name} (${popular.first_air_date})
    </a>
    </article> `
    
  }

  boton.addEventListener('click', function (e) {
    seccion.style.display = 'flex';
    
  })
    return data;
}
)
.catch(function (error) {
    return error;
}
)



fetch(urlReviews)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
  console.log('REVIEWS' , data);
  reviews.innerHTML = `Para ver las reseñas:  <strong style="text-decoration: underline;"> Haz click aqui</strong>`
  let info = ''
  if (data.results.length == 0) {
    reviews.innerText = 'Reviews: ¡No hay reseñas disponibles!'
    } else {
  for (let i = 0; i < data.results.length; i++) {
    autor.innerHTML += `<li class="contenido"><strong style="text-decoration: underline;"> ${data.results[i].author}:</strong> ${data.results[i].content}</li>
    <br><br>` 
    }
  }
  autor.style.display = 'none';
  reviews.addEventListener('click', function (e) {
    autor.style.display = 'block';
    
  })
  
    return data;
}
)
.catch(function (error) {
  console.log(error);
    return error;
}
)


