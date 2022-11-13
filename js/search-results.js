let qs = location.search;
let qsObj = new URLSearchParams(qs);
let busqueda = qsObj.get('buscador');

let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
let urlFormMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${busqueda}`;
let urlFormSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${busqueda}`;

let tituloPelis = document.querySelector('.titularPelis');
let listaBusqueda = document.querySelector('.buscaPelis');
let tituloSeries = document.querySelector('.titularSeries');
let listaSeries = document.querySelector('.buscaSeries');

fetch(urlFormMovies)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log(data);
    if (data.results.length == 0) {
        tituloPelis.innerHTML = `No hay resultados para su búsqueda de peliculas: <strong>"${busqueda}"</strong>`
        listaBusqueda.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/6202/6202861.png" alt="">`
    } else {
        tituloPelis.innerHTML = `Estos son los titulos de peliculas que coinciden con tu busqueda de <strong>"${busqueda}"</strong>:`
        for (let i = 0; i < 5; i++) {
        let buscado = data.results[i]
        listaBusqueda.innerHTML += ` <article class="cuadrado thor"> 
                                    <a class="aclickeo" href="./detail-movie.html?idPelicula=${buscado.id}">
                                    <img src="https://image.tmdb.org/t/p/w500/${buscado.poster_path}" alt="Portada de: " class="img1">
                                    ${buscado.title} (${buscado.release_date})
                                    </a>
                                    </article> `
    }}

    return data;
}
)
.catch(function (error) {
    return error;
}
)

fetch(urlFormSeries)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log(data);
    if (data.results.length == 0) {
        tituloSeries.innerHTML = `No hay resultados para su búsqueda de series: <strong>"${busqueda}"</strong>`
        listaSeries.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/6202/6202861.png" alt="">`
    } else {
        tituloSeries.innerHTML = `Estos son los titulos de series que coinciden con tu busqueda de <strong>"${busqueda}"</strong>:`
        for (let i = 0; i < 5; i++) {
        let buscado = data.results[i]
        listaSeries.innerHTML += ` <article class="cuadrado thor"> 
                                    <a class="aclickeo" href="./detail-serie.html?idSeries=${buscado.id}">
                                    <img src="https://image.tmdb.org/t/p/w500/${buscado.poster_path}" alt="Portada de: " class="img1">
                                    ${buscado.name} (${buscado.first_air_date})
                                    </a>
                                    </article> `
    }}

    return data;
}
)
.catch(function (error) {
    return error;
}
)


