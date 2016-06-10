
function pintarMensaje(texto) {
   
   //fecha
   var fecha = new Date();
   fecha = fecha + ''; 
   var nombreUsuario = 'Monica'; 
   var ella = '<div class="escribe"><p class="morado">' + nombreUsuario + '</p><p>' + texto + '</p><p class="hora-left">' + fecha + '</p></div>';
   var elementoDom = $(ella);
   $('#mensajes').append(elementoDom);
   
};

$('#btnEnviar').click(function(){
   
   var texto = $('#inputMensaje').val();
   console.log(texto);
   pintarMensaje(texto);
   $('#inputMensaje').val('');

});
