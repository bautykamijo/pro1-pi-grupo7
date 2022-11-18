let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get('idGenero');

let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
let urlGeneroPeli = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${idGenero}&with_watch_monetization_types=flatrate`;

fetch(urlGeneroPeli)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    console.log(data);
    return data;
}
)
.catch(function (error) {
    return error;
}
)