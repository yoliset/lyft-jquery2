function validateContact () {
    var user_number = $('#user-number').val();
    if (/^[0-9]+$/.test(user_number))
        window.location.href = 'sign.html';
    else {
        alert("Coloca tu teléfono");
    }
}

