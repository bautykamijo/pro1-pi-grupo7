let apiKey = '20ad67ce31acb5c646fe21c26a0d44f1';
let urlGenres = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_genres=yes`


fetch(urlGenres)
.then(function (response) {
    return response.json()
}
)
.then(function (data) {
    let generosId = [];
    let arrayPrimera = [];
    for (let i = 0; i < data.results.length; i++) {
        arrayPrimera.push(data.results[i].genres_ids)   
    }
    console.log(arrayPrimera);
    for (let index = 0; index < arrayPrimera.genres_ids.length; index++) {
        if (generosId.includes(arrayPrimera[i].genres_ids[index])) {
            break
        } else {
            generosId.push(id[index])
        }
    }
    console.log(generosId);
    return data;
}
)
.catch(function (error) {
    return error;
}
)