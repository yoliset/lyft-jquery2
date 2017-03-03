$(document).ready(function(){
   $("#botonn").click(function(evento){
      validarNombre();
      validarCorreo();
     validarAmbos();
   });
});
    function validarNombre(){
        var name = $('#name').val();
      if(/^[a-zA-Z]+$/.test(name)===false){
        alert("Incorrecto, Coloca tu nombre");
      }
}
    function validarCorreo(){ 
    var correo= $('#email').val();
    if (/^\S+@\S+\.\S+$/.test(correo) ===false){
        alert("Incorrecto, Coloca tu email");
    }
}
    function validarAmbos(){
        var name = $('#name').val();
        var correo= $('#email').val();
    if(/^[a-zA-Z]+$/.test(name)===false || /^\S+@\S+\.\S+$/.test(correo) ===false){
        alert("Llenar correctamente");
        
    } else {
        window.location.href = 'mapas.html';
    }
}
