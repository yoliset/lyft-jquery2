
function validarLocal(){
    var number = $("#user-number").val();
    localStorage.setItem("user-number", number);
    
}
function validateContact () {
    var user_number = $('#user-number').val();
    if (/^[0-9]+$/.test(user_number))
       return true;
}
function validarTodo(){
    if (validateContact ()==true ){
       window.location.href = 'sign.html';
       validarLocal();
    }else{
        alert("Coloca tu teléfono");
    }
}
