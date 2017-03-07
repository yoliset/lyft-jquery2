    
var map;
function initMap() {
  var myLatLng = {lat: -16.457389199999998, lng: -71.5315308};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng,
         mapTypeControl: true,
         mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_CENTER
    },
         zoomControl: true,
         zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
    },
         scaleControl: true,
         streetViewControl: true,
         streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
    }
  });  

  var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Aqui estoy!'
  });
   
    var myLatLng1 =  {lat: -16.455348 , lng: -71.532789};
    var marker = new google.maps.Marker({
    position:myLatLng1,
    map: map,
    title: 'Sandra',
    icon: '/img/car1.png'
  });
    var myLatLng2 = {lat: -16.459128, lng: -71.529870};
    var marker = new google.maps.Marker({
    position:myLatLng2,
    map: map,
    title: 'Julio',
    icon: '/img/car2.png'
  })
    var myLatLng3 = {lat: -16.455688 , lng: -71.525989};
    var marker = new google.maps.Marker({
    position: myLatLng3,
    map: map,
    title: 'Sandro',
    icon: '/img/car3.png'
  });
     var myLatLng4 = {lat: -16.455648 , lng: -71.535870};
    var marker = new google.maps.Marker({
    position: myLatLng4,
    map: map,
    title: 'Susan',
    icon: '/img/car4.png'
  });
    var myLatLng5 =  {lat: -16.455101 , lng: -71.529467};
    var marker = new google.maps.Marker({
    position: myLatLng5,
    map: map,
    title: 'Jorge',
    icon: "/img/car2.png"
  });
}
