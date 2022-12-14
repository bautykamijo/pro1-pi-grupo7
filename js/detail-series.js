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
let seccion = document.querySelector('.carrusel');
let provider = document.querySelector('.provider');
let reviews = document.querySelector('.reviews');
let contenido = document.querySelector('.contenido');
let autor = document.querySelector('.autor');
let favoritismo = document.querySelector('.favoritismo')

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
    trailervideo= 'https://youtu.be/Sog5AgxPwu0'

  return data;
})
.catch(function(error) {
    console.log(error);
  return error;
})


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


fetch(urlReco)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
  console.log('RECOMENDACIONES',data);
  for (let i = 0; i < 10; i++) {
    let popular = data.results[i];
    seccion.innerHTML  += `<li>
                              <a class="aclickeo" href="./detail-serie.html?idSeries=${popular.id}">
                              <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
                              <div class="uk-position-center uk-panel"><h1></h1></div>
                              </a>
                          </li>`
    
  }

  boton.addEventListener('click', function (e) {
    seccion.style.display = 'flex'
    
  })
    return data;
}
)
.catch(function (error) {
    return error;
}
)


let seriesFav = [];

let recuperoStorage = localStorage.getItem("seriesFav");

if(recuperoStorage != null){
  seriesFav = JSON.parse(recuperoStorage);
}

if (seriesFav.includes(idSeries)) {
  favoritismo.innerHTML = `Quitar de Favoritos <i class="fa-solid fa-star"></i>`
  favoritismo.style.color = 'rgb(255, 204, 0)';
}
else{
  favoritismo.innerHTML = `Añadir a Favoritos <i class="fa-solid fa-star"></i>`
  favoritismo.style.color = 'white';

}

favoritismo.addEventListener('click', function (e) {
  e.preventDefault();
  
  if(seriesFav.includes(idSeries)){
      let indice = seriesFav.indexOf(idSeries);
      seriesFav.splice(indice,1);
      favoritismo.style.color = 'white';
      favoritismo.innerHTML = `Añadir a Favoritos <i class="fa-solid fa-star"></i>`

  }else{
    seriesFav.push(idSeries);
      favoritismo.style.color = 'rgb(255, 204, 0)';
      favoritismo.innerHTML = `Quitar de Favoritos <i class="fa-solid fa-star"></i>`

  }

 
  let favToString = JSON.stringify(seriesFav);

  localStorage.setItem('seriesFav',favToString);
  
});


