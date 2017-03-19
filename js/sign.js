$(document).ready(function(){
   $("#botonn").click(function(evento){
      validarTodo();
   });
});
   
function validarLocal(){
     var namer = $('#name').val();
    localStorage.setItem("name", namer);
    var correo= $('#email').val();
    localStorage.setItem("email", correo);   
}
function validarTodo(){
     var namer = $('#name').val();
     var correo= $('#email').val();
    if ((/^[a-zA-Z]+$/.test(namer)==true)&&(/^\S+@\S+\.\S+$/.test(correo)==true)){
      window.location.href = 'mapas.html';
       validarLocal();
    }else{
        alert("LLenar los campos,correctamente");
    }
}

