function zoominMap()
{
   var elem = document.getElementById("imagenMapa");
   var ancho = window.getComputedStyle(elem,null).getPropertyValue("width");
   var tamanio = ancho.length-2;
   var valor = ancho.substr(0,tamanio);
   var valorEntero = Number((valor*1.1).toFixed(0));
   var valorTexto = valorEntero+"px"
   document.getElementById('imagenMapa').style.width = valorTexto;   
};

function zoomoutMap()
{
   var elem = document.getElementById("imagenMapa");
   var ancho = window.getComputedStyle(elem,null).getPropertyValue("width");
   var tamanio = ancho.length-2;
   var valor = ancho.substr(0,tamanio);
   var valorEntero = Number((valor/1.1).toFixed(0));
   var valorTexto = valorEntero+"px"
   document.getElementById('imagenMapa').style.width = valorTexto;
};

function zoomeqMap()
{
   document.getElementById('imagenMapa').style.width = "100%";
};