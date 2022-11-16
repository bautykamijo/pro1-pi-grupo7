let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula');

let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
let urlDetalles = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}&language=en-US`;

let peliculasFav = [];

let recuperoStorage = localStorage.getItem("favoritos");

let favoritas = JSON.parse(recuperoStorage);
let section = document.querySelector("#lista");