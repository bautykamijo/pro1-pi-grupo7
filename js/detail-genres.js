let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('idGenero');
let idGenera = qsObj.get('idGenera');

let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';

/* agregando pelis */

let urlGeneroPeli = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${idGenero}&with_watch_monetization_types=flatrate`;
let urlPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

/* agregando pelis */

let urlGeneroSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${idGenero}&with_watch_monetization_types=flatrate`;
let urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;



let peliculas = document.querySelector('.altura');
let series = document.querySelector('.height');
let titulopeli = document.querySelector('.titulopeli');
let tituloserie = document.querySelector('.tituloserie');

fetch(urlPeliculas)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log('titular ,', data);
    for (let i = 0; i < data.genres.length; i++) {
        if (data.genres[i].id == idGenero) {
            titulopeli.innerHTML = `Peliculas dentro del género  <strong style = "text-decoration: underline">${data.genres[i].name}</strong>:`;
        }
        
    }
   
    return data;
}
)
.catch(function (error) {
    return error;
}
)




fetch(urlGeneroPeli)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        let agregar = false;
        let listaId = data.results[i].genre_ids;
        for (let index = 0; index < listaId.length; index++) {
            if (listaId[index] == idGenero) {
                agregar = true
            }
            
        }
       if (agregar == true) {
        let popular = data.results[i]
        peliculas.innerHTML += ` <article class="cuadrado thor"> 
                                <a class="aclickeo" href="./detail-movie.html?idPelicula=${popular.id}">
                                <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
                                ${popular.title} (${popular.release_date})
                                </a>
                                </article> `
       }
        
      

    }
    return data;
}
)
.catch(function (error) {
    console.log(error);
    return error;
}
)












fetch(urlSeries)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log('titular ,', data);
    for (let i = 0; i < data.genres.length; i++) {
        if (data.genres[i].id == idGenera) {
            tituloserie.innerHTML = `Series dentro del género  <strong style = "text-decoration: underline">${data.genres[i].name}</strong>:`;
        }
        
    }
   
    return data;
}
)
.catch(function (error) {
    return error;
}
)




fetch(urlGeneroSeries)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        let agregar = false;
        let listaId = data.results[i].genre_ids;
        for (let index = 0; index < listaId.length; index++) {
            if (listaId[index] == idGenera) {
                agregar = true
            }
            
        }
       if (agregar == true) {
        let popular = data.results[i]
        series.innerHTML += `  <article class="cuadrado thor"> 
                                    <a class="aclickeo" href="./detail-serie.html?idSeries=${popular.id}">
                                    <img src="https://image.tmdb.org/t/p/w500/${popular.poster_path}" alt="" class="img1">
                                    ${popular.name} (${popular.first_air_date})
                                    </a>
                                    </article>  `
       }
        
      

    }
    return data;
}
)
.catch(function (error) {
    console.log(error);
    return error;
}
)

