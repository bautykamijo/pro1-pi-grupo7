let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula');

apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
urlDetalles = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=en-US`;
urlProviders = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${apiKey}`;
let urlReco = `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
let urlReviews = `https://api.themoviedb.org/3/movie/${idPelicula}/reviews?api_key=${apiKey}&language=en-US&page=1`;
let urlGeneros = ``

let titulo = document.querySelector('.peliculaDetalle');
let img = document.querySelector('.imagenThor');
let estreno = document.querySelector('.estreno');
let popularidad = document.querySelector('.popularidad');
let duracion = document.querySelector('.duracion');
let overview = document.querySelector('.overview');
let genero = document.querySelector('.genero');
let provider = document.querySelector('.provider');
let boton = document.querySelector('.botonera');
let seccion = document.querySelector('.padre');
let generoGlobal = document.querySelector('.generoGlobal');
let generalizado = document.querySelector('.generalizado');
let favorites = document.querySelector('.favorites');
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
  titulo.innerText = data.title + ' ' + ` (${data.release_date})`
  let generos = []
  for (let i = 0; i < data.genres.length; i++) {
   if (i == (data.genres.length)- 1) {
        generos += data.genres[i].name
    } else {
        generos += data.genres[i].name + ' -' + ' '
    }}


    
img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
overview.innerText = `${data.overview}`;
estreno.innerText = `Fecha de estreno: ${data.release_date}`;
popularidad.innerText = `Popularidad: ${data.popularity}`;
duracion.innerText = `Duración: ${data.runtime}m`;
generoGlobal.innerText = 'Generos: '
genero.innerText = `${generos}`;
boton.innerText = 'Ver recomendaciones';
favorites.innerHTML = `Añadir a FAVORITOS: <i class="fa-solid fa-star favoritismo"></i>`
seccion.style.display = 'none';
let estrellita = document.querySelector('.favoritismo');


  return data;
})
.catch(function(error) {
    console.log(error);
  return error;
})



fetch(urlProviders)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  let propiedad = Object.values(data.results)[0];
  propiedad = propiedad.buy;
  console.log(propiedad);
  let usa = '';
  for (let i = 0; i < propiedad.length; i++) {
    if (i == (propiedad.length)- 1) {
      usa += propiedad[i].provider_name
  } else {
      usa += propiedad[i].provider_name + ' -' + ' '
  }}
  
  provider.innerText = `Watch providers: ${usa}`
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
  for (let i = 0; i < 10; i++) {
    let popular = data.results[i];
    seccion.innerHTML  += ` <article class="cuadrado thor uk-slider-items"> 
    <a class="imagenreco" href="./detail-movie.html?idPelicula=${popular.id}">
    <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
    ${popular.title} (${popular.release_date})
    </a>
    </article> `
    
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


let peliculasFav = [];

let recuperoStorage = localStorage.getItem("peliculasFav");

if(recuperoStorage != null){
  peliculasFav = JSON.parse(recuperoStorage);
}

if (peliculasFav.includes(idPelicula)) {
  favoritismo.style.color = 'rgb(255, 204, 0)';
}

favoritismo.addEventListener('click', function (e) {
  e.preventDefault();
  
  if(peliculasFav.includes(idPelicula)){
      let indice = peliculasFav.indexOf(idPelicula);
      peliculasFav.splice(indice,1);
      favoritismo.style.color = 'none';
  }else{
      peliculasFav.push(idPelicula);
      favoritismo.style.color = 'rgb(255, 204, 0)';
  }

 
  let favToString = JSON.stringify(peliculasFav);

  localStorage.setItem('peliculasFav',favToString);
  
});












