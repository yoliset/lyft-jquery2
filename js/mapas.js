    
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
    function listas(){
        
    
    var lista = $('#lista');
    for(var i in carrosLyft )
    {
           var html= '<li id="'+i+'"><a><img src="'+ carrosLyft[i].imagen+'" style= width: 70px; alt="" class="imagen"></img><h5>'+ carrosLyft[i].nombre+'</h5> <br><small>'+carrosLyft[i].letra+'</small><i class = "pull-right">'+carrosLyft[i].minimo+'</i></a></li>';
        
           lista.append(html); 
    }
        }
function onclick(evt){
       console.log(evt.currentTarget);
       localStorage.setItem('guardarCar', evt.currentTarget.id);
}

function init(){
    solicitarEstimado();
    listas();
    
    var list=$('li');
       for ( var i=0; i < list.length; i++){
        list[i].addEventListener("click" , onclick);
    }
   }
function solicitarEstimado(){
    $.ajax ({
        url:"http://clientes.geekadvice.pe/api/estimado",
     data:{tipo:"1"}
    }).success(function(_data){
        console.log(_data.estimado);
        update(_data);
    });
} 

function update(_info){
   $('#origen').text(_info.origen);  
}
 



