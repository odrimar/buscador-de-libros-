//crear todos las las variables y selectores
const isbn = document.querySelector('#isbn');
const nombre = document.querySelector('#nombre');
const autor = document.querySelector('#autor');
const edicion = document.querySelector('#edicion');
const categoria = document.querySelector('#categoria');
const resultado = document.querySelector('#resultado')


//crear objetos
const datosBusqueda = {
    isbn: '',
    nombre: '',
    autor: '',
    edicion: '',
    categoria: '',
   

}


document.addEventListener('DOMContentLoaded', () => {
  
    mostrarLibros(libros);
});

isbn.addEventListener('change', e => {
    //console.log(e.target.value)
    datosBusqueda.isbn = (e.target.value)
    filtrarLibros()
});

nombre.addEventListener('change', e => {
    //console.log(e.target.value)
    datosBusqueda.nombre = (e.target.value);
    filtrarLibros();
  
});
autor.addEventListener('change', e => {
    //console.log(e.target.value)
    datosBusqueda.autor =(e.target.value);
    filtrarLibros();
});
edicion.addEventListener('change', e => {
    //console.log(e.target.value)
    datosBusqueda.edicion = (e.target.value);
    filtrarLibros();
});
categoria.addEventListener('change', e => {
    //console.log(e.target.value)
    datosBusqueda.categoria = (e.target.value);
    filtrarLibros();
});


function buscarLibro() {
   
}

//para mostrar los arreglos usamos forEach
function mostrarLibros(libros) {
    limpiarHTML();
    libros.forEach(i => {
        const bdHTML = document.createElement('p');
        const { isbn, nombre, autor, edicion, categoria } = i;

        bdHTML. textContent = ` ${isbn} - ${nombre} - ${autor}-  ${edicion} - ${categoria}`;
        resultado.appendChild(bdHTML);


    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarLibros(){
    //en esta funcion tendremos todo lo relacionado a los filtros 
    const resultado = libros.filter(filtrarIsbn).filter(filtrarNombre).filter(filtrarAutor).filter(filtrarEdicion).filter(filtrarCategoria);

    console.log(resultado)

    if(resultado.length){
        mostrarLibros(resultado)
    }else{
        noResultado();
        
    }
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error')
    noResultado.appendChild(document.createTextNode('No hay resultados para su busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)
}

function filtrarIsbn(libros){
    if(datosBusqueda.isbn){
        return libros.isbn === datosBusqueda.isbn
    }
    return libros;
}

function filtrarNombre(libros){
    if(datosBusqueda.nombre){
        return libros.nombre === datosBusqueda.nombre
}
return libros;
}

function filtrarAutor(libros){
    if(datosBusqueda.autor){
        return libros.autor === datosBusqueda.autor
}
return libros;
}

function filtrarEdicion(libros){
    if(datosBusqueda.edicion){
        return libros.edicion === datosBusqueda.edicion
}
return libros;
}

function filtrarCategoria(libros){
    if(datosBusqueda.categoria){
        return libros.categoria === datosBusqueda.categoria
}
return libros;
}

