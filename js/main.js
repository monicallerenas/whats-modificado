$(document).ready(function(){

function pintarMensaje(texto) {
   
   var fecha = new Date();
   fecha = fecha + '';
   var nombreDelUsuario = 'Irving'; 
   var el = '<div class="rectawhite2"><p class="p4">' + nombreDelUsuario + '</p><p class="plogo1">' + texto + '</p><p class="phora">' + fecha + '</p></div>';
   var elementoDom = $(el);
   $('#mensajes').append(elementoDom);
   
};

$('#btnEnviar').click(function(){
   
   var texto = $('#inputMensaje').val();
   console.log(texto);
   pintarMensaje(texto);
   $('#inputMensaje').val('');

});

});

