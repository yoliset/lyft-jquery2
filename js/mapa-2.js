    
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
function init(){
    solicitarEstimado();
var carrosLyft = [
  
  {
      "nombre": "Lyft", 
      "imagen":"img/taxi/taxi1.png",
      "minimo":"3 min",
      "letra":"Fast ride 4 seats"},
  {
      "nombre": "Lyft", 
      "imagen":"img/taxi/taxi2.png",
      "minimo":"3 min",
      "letra":"4 seats"},
  {
      "nombre": "Plus",
      "minimo":"3 min",
      "imagen":"img/taxi/taxi3.png", 
      "letra":"6 seats"},

  {
      "nombre": "Premier",
      "minimo":"3 min",
      "imagen":"img/taxi/taxi4.png", 
      "letra":"High-end 4 seats"}
  ];


    var imagenCar = $('#carrito');
    var locStore =  $('#titulos');
    var small =  $('#letritas');
    
    var guardarCar = localStorage.getItem('guardarCar');
    
    var carImg=carrosLyft[guardarCar].imagen;
    var carTitulo=carrosLyft[guardarCar].nombre;
    var carLetras=carrosLyft[guardarCar].letra;
    
    imagenCar.attr("src",carImg);
    locStore.text(carTitulo);
    small.text(carLetras);
}


function solicitarEstimado(){
    $.ajax ({
        url:"https://clientes.geekadvice.pe/api/estimado",
     data:{"tipo":1}
    }).success(function(_data){
        console.log(_data.estimado);
        update(_data);
    });
} 

function update(_info){
   $('#orige').text(_info.origen);
   $('#destin').text(_info.destino);
   $('#estimo').text(_info.estimado.min); 
   $('#pre').html(_info.estimado.moneda);
   
}
