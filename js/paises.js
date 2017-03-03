
var jsonPaises = [
  
  {
      "nombre": "Argentina",
      "phone_code": "54", 
      "imagen":"img/argentina.png", 
      "letra":"A<br>B"},
  {
      "nombre": "Bolivia",
      "phone_code": "591", 
      "imagen":"img/bolivia.png", 
      "letra":"C<br>F"},
  {
      "nombre": "Brasil",
      "phone_code": "55", 
      "imagen":"img/brasil.png", 
      "letra":"G<br>J"},
  {
      "nombre": "Chile",
      "phone_code": "56", 
      "imagen":"img/Chile.png", 
      "letra":"K<br>N"},
  {
      "nombre": "Colombia",
      "phone_code": "57", 
      "imagen":"img/colombia.png", 
      "letra":"Ñ<br>Q"},
  {
      "nombre": "Perú",
      "phone_code": "51",
      "imagen":"img/peru.png", 
      "letra":"R<br>U"},
  {
      "nombre": "Venezuela",
      "phone_code": "58",
      "imagen":"img/venezuela.png",
      "letra":"W<br>Z"}
  ];
    var lista = $('#lista-paises');
    for(var i in jsonPaises)
    {
           var html= '<a href="contacto.html"><li class="list-group-item">'+'<img src="'+ jsonPaises[i].imagen+'" style=height:20px; width: 30px; alt="" class="imagen">'+ jsonPaises[i].nombre+'</img>'+ '<span class="codigo">'+jsonPaises[i].phone_code+'</span>'+ '<span  class = "pull-right">'+jsonPaises[i].letra+'</span>'+ '</li></a>';
           lista.append(html);   
    }
    var list=$('li');
    for ( var i=0; i < list.length; i++){
        list[i].addEventListener("click" , onclick);
    }
function onclick(evt){
       var imagenSrc= $(evt.currentTarget).find('.imagen').attr('src');
       localStorage.setItem('srcImagen', imagenSrc);
       var CodigoPais= $(evt.currentTarget).find('.codigo').text();
       localStorage.setItem('numeroPais', CodigoPais);
}