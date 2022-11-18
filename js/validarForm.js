let form = document.querySelector('form');
let input = document.querySelector('.buscadoryboton')

console.log(form, input);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value == '') {
        alert('El campo de busqueda no puede estar vacío')
    } 
    else if (input.value.length < 3) {
        alert('El término buscado debe tener al menos 3 caracteres')
    }
    else {
        this.submit()
    }

})