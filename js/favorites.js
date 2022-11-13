let recuperoStorage = localStorage.getItem("favoritas")
let favoritas= JSON.parse(recuperoStorage)
let section= document.querySelector("#lista")
let peliculasFav = ""
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula')
apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
urlDetalles = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=en-US`;

if (favoritas == null || favoritas.length == 0)
{
section.innerHTML = "<p> no tienes peliculas favoritas</p>";

} else
    for (let i = 0; i < favoritas.length; i++);
        fetch(urlDetalles)
        .then(function (response) {
            return response.json();
            
        }) .then(function (data) {
        console.log(data);
        peliculasFav += `<article>
                                    <img src=${data.image} alt='${data.name}' />
                                    <p>Name: <a href="./favorite.html?idPelicula=${idPelicula}</a> </p>
                                    </article>`;
        section.innerHTML = peliculasFav;

        return data;
        }).catch(function (error) {
        return error;
        })