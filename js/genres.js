let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
let urlGenresPelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`

let titulopeli = document.querySelector('.titulopeli');
let apeli = document.querySelector('.generopeliculas');
titulopeli.innerText = 'Generos de Peliculas';

fetch(urlGenresPelis)
.then(function (response) {
    return response.json();
}
)
.then(function (data) {
    console.log(data.genres);
    for (let i = 0; i < data.genres.length; i++) {
       apeli.innerHTML += `<article class="cuadrado topg hijogenero">
                          <a class="aclickeo" href="./detail-genres.html?idGenero=${data.genres[i].id}"><img src="" alt="" class="img1"> <br>${data.genres[i].name}</a>
                           </article>`;
       
       
    }
    return data;
}
)
.catch(function (error) {
    return error;
}
)