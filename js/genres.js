let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
let urlGenresPelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
let urlGenresSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`


let titulopeli = document.querySelector('.titulopeli');
let apeli = document.querySelector('.apeli');
let tituloserie = document.querySelector('.tituloseries');
let aserie = document.querySelector('.aserie');
titulopeli.innerText = '  Generos de Peliculas';
tituloserie.innerText = 'Generos de Series';

fetch(urlGenresPelis)
.then(function (response) {
    return response.json();
}
)
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.genres.length; i++) {
       apeli.innerHTML += `<li class="listaGenero">
                        <a class="aclickeo" href="./detail-genres.html?idGenero=${data.genres[i].id}">${data.genres[i].name}</a>
                        </li>`;
       
       
    }
    return data;
}
)
.catch(function (error) {
    return error;
}
)


fetch(urlGenresSeries)
.then(function (response) {
    return response.json();
}
)
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.genres.length; i++) {
       aserie.innerHTML += `<li class="listaGenero">
                          <a class="aclickeo" href="./detail-genres.html?idGenero=${data.genres[i].id}">${data.genres[i].name}</a>
                          </li>`;
       
       
    }
    return data;
}
)
.catch(function (error) {
    console.log(error);
    return error;
}
)

