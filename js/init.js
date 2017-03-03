
function init(){
    var imagenPais = $('#bandera');
    var locStore =  $('#codigoPais');
    var numPais = localStorage.getItem('numeroPais');
    var paisnu = localStorage.getItem('srcImagen');
    imagenPais.attr({"src":paisnu});
    locStore.text(numPais);
}
