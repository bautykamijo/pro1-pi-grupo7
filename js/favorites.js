let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';

let recuperoStorage = localStorage.getItem('peliculasFav');


let peliculasFav = JSON.parse(recuperoStorage);


let section = document.querySelector(".pelisFav");
let favoritos = '';
console.log(peliculasFav);


if (peliculasFav == null || peliculasFav.length == 0) {
    section.innerHTML = '<p>No hay peliculas en favoritos</p>'
}
else {
    for (let i = 0; i < peliculasFav.length; i++) {
        if (i < 5) {
            let url = `https://api.themoviedb.org/3/movie/${peliculasFav[i]}?api_key=${apiKey}&language=en-US`;

            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

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
        }



    }
}
