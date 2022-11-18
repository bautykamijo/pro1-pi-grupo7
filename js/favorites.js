let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';

let recuperoStorage = localStorage.getItem('peliculasFav');


let peliculasFav = JSON.parse(recuperoStorage);


let section = document.querySelector(".pelisFav");
let favoritos = ''; 
console.log(peliculasFav);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (peliculasFav == null || peliculasFav.length == 0) {
    section.innerHTML = '<p>No tienes peliculas favoritas</p>'
}
else {
    for (let i = 0; i < peliculasFav.length; i++) {
        let url =  `https://api.themoviedb.org/3/movie/${peliculasFav[i]}?api_key=${apiKey}&language=en-US`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            
            favoritos += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-movie.html?idPelicula=${data.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" class="img1">
                                ${data.title} (${data.release_date})
                                </a>
                                </article> `

            section.innerHTML = favoritos;

            return data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });

        
        
    }}


let recuperoStorageser = localStorage.getItem('seriesFav');


let seriesFav = JSON.parse(recuperoStorageser);


let sectionn = document.querySelector(".seriesFav");
let favoritoss = ''; 
console.log(seriesFav);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (seriesFav == null || seriesFav.length == 0) {
    sectionn.innerHTML = '<p>No tiene series favoritas</p>'
}
else {
    for (let i = 0; i < seriesFav.length; i++) {
        let url =  `https://api.themoviedb.org/3/tv/${seriesFav[i]}?api_key=${apiKey}&language=en-US`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            
            favoritoss += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-serie.html?idSeries=${data.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" class="img1">
                                ${data.name} (${data.first_air_date})
                                </a>
                                </article> `

            sectionn.innerHTML = favoritoss;

            return data;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });

        
        
    }}