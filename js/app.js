function begin(){
  // funccion para inicializar el formulario materialize
  $('select').material_select();
// funcion para realizar el splash
  $("main").hide();

  setTimeout(function() {
   $("section").fadeOut();
   $("main").show();

 },1000 );

 // funcion para validar el numero de tlf
    var $number = $("#icon_telephone");
    var $boton = $(".btn-next");

    $number.on("keyup",validCelphoneNumber);

    function validCelphoneNumber(){
      if ($number.val().length === 10) {
          $boton.removeClass("disabled");
      }
      else {
        $boton.addClass("disabled");
      }
    }






 }

$(document).ready(begin);
