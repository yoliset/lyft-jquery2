    
function initMap() {
    var myLatLng = {lat: -16.457148 , lng: -71.530759};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
    disableDefaultUI: true
  });
    var myLatLng = {lat: -16.457148 , lng: -71.530759};
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Aqui estoy',
  });
    var myLatLng1 = {lat: -16.459128, lng: -71.525970};
    var marker = new google.maps.Marker({
    position: myLatLng1,
    map: map,
    title: 'Miguel',
    icon: "img/car1.png"
  });
    var myLatLng2 = {lat: -16.455101 , lng: -71.529467};
    var marker = new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: 'Mirrela',
    icon: "img/car2.png"
  });
   
    var myLatLng4 = {lat: -16.453259 , lng: -71.530539};
    var marker = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Helen',
    icon: "img/car1.png"
  });
    var myLatLng5 =  {lat: -16.455101 , lng: -71.529467};
    var marker = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    title: 'Jorge',
    icon: "img/car2.png"
  });
     var myLatLng6 = {lat: -16.455348 , lng: -71.532789};
    var marker = new google.maps.Marker({
    position: myLatLng6,
    map: map,
    title: 'Josue',
    icon: "img/car3.png"
  });
}

function validateList () {
    var selec_Lista = $("li").on("click");
    if (selec_Lista ==0)
       alert("Escoge una opción");
    else {
         window.location.href = 'mapa-2.html';
    }
}
