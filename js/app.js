function begin(){
  // funccion para inicializar el formulario materialize
  $('select').material_select();
// funcion para realizar el splash
  $("main").hide();

  setTimeout(function() {
   $("section").fadeOut();
   $("main").show();

 },1000 );

 // nombrando variables reutilizables
    var $number = $("#icon_telephone");
    var $boton = $(".btn-next");

// nombrando eventos y funciones
    $number.on("keyup",validCelphoneNumber);
    $boton.on("click", randomCode);

// funcion para validar el numero de tlf de 10 dgts
    function validCelphoneNumber(){
      if ($number.val().length === 10) {
        $boton.removeClass("disabled");
      }
      else {
        $boton.addClass("disabled");
      }
    }

    // funcion para crear el alert con el codigo aleatorio
    function randomCode(){
      alert("Tu codigo: " + "LAB "  + Math.floor((Math.random() * 1000) + 1));
    }



 }

$(document).ready(begin);
