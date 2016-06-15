/*esta funcion es para q se vea el msj y lo guarde
arriba*/
var contactos = [
	
	{nombre : 'Aldo'},

	{nombre : 'Raymi'},

	{nombre :'Ana Maria'},

	{nombre : 'Rodolfo'},

	{nombre : 'Katy'},

	{nombre : 'Andrea'},

	{nombre : 'Maria'},

];

$(document).ready(function(){

function pintarMensaje(texto) {
   
   var fecha = new Date();
   fecha = fecha + '';
   var nombreDelUsuario = 'Mónica'; 
   var ella = '<div class="rectawhite2"><p class="p4">' + nombreDelUsuario + '</p><p class="plogo1">' + texto + '</p><p class="phora">' + fecha + '</p></div>';
   var elementoDom = $(ella);
   $('#mensajes').append(elementoDom);
   
};
/*esta es para buscar los contactos*/
$('#inputBuscar').keypress(function(){
	
	var value = $('#inputBuscar').val();
	if(value == '') {
		for (var i=0; i < contactos.length;i++) {
		var nombre = contactos[i].nombre;
		var el = '<div class="row"><div class="rectawhite" id="chat"><div class="col-xs-2 col-lg-2 caja"><img class="circulo" src="image/logocodeacademy.png"></div><div class="col-xs-8 col-lg-8"><p class="plogo">' + nombre + '</p><p class="plogo1">Texto</p></div><div class="col-xs-2 col-lg-2"><p class="plogo1">14:25</p></div></div></div>'
		$('#scroll-1').append(el);
	}
	} else {
		for (var i=0; i < contactos.length;i++) {
		var nombre = contactos[i].nombre;

		if (nombre.indexOf(value) > -1) {
			var el = '<div class="row"><div class="rectawhite" id="chat"><div class="col-xs-2 col-lg-2 caja"><img class="circulo" src="image/logocodeacademy.png"></div><div class="col-xs-8 col-lg-8"><p class="plogo">' + nombre + '</p><p class="plogo1">Texto</p></div><div class="col-xs-2 col-lg-2"><p class="plogo1">14:25</p></div></div></div>'
		$('#scroll-1').append(el);
		}

		
	}
	}
	

});

$('#btnEnviar').click(function(){
   
   var texto = $('#inputMensaje').val();
   console.log(texto);
   pintarMensaje(texto);
   $('#inputMensaje').val('');

   });

	for (var i=0; i < contactos.length;i++) {
		var nombre = contactos[i].nombre;
		var el = '<div class="row"><div class="rectawhite" id="chat"><div class="col-xs-2 col-lg-2 caja"><img class="circulo" src="image/logocodeacademy.png"></div><div class="col-xs-8 col-lg-8"><p class="plogo">' + nombre + '</p><p class="plogo1">hola</p></div><div class="col-xs-2 col-lg-2"><p class="plogo1">14:25</p></div></div></div>'
		$('#scroll-1').append(el);
	}

	var parrafo = $('contactos').text();
    for (i=0; i< mensajes.length; i++){
      var resp = mensajes [i];
      
      if (parrafo == resp.person){
        alert(resp.msj);
      }
    }

    var mensajes = []
    var objeto ={mensaje:"hola",tiempo:"12:45"}
    mensajes.push(objeto)
});

 

