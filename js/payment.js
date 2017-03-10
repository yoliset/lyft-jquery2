
$(document).ready();

function init(){
     solicitarDriver();
   }

function solicitarDriver(){
   $.ajax({
       url:"https://clientes.geekadvice.pe/api/carrera",
       data:{tipo:1}
       
   }).success(function(_data){
       console.log(_data.estimado);
       update(_data);
       
   });
}

function update(_info){
   $('#driver').attr('src',_info.conductor.url);
   $('#name_driver').html(_info.conductor.name);
   $('#dolar').html(_info.estimado.moneda);  
   $('#precio').html(_info.final);  
    
}