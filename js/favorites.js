/* Recuperar localStorage */
let recuperoStorage = localStorage.getItem('peliculasFav');
/*  ["2"] */

let peliculasFav = JSON.parse(recuperoStorage);
/*  [2,4,6] */

let section = document.querySelector(".pelisFav");
let favoritos = ''; 
let url = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=en-US`
console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (peliculasFav == null || peliculasFav.length == 0) {
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data);
            favoritos += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-movie.html?idPelicula=${popular.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
                                ${popular.title} (${popular.release_date})
                                </a>
                                </article> `

            section.innerHTML = favoritos;

            return data;
        })
        .catch(function (error) {
            return error;
        });

        
        
    }
