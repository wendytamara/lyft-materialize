function begin(){
  // funccion para inicializar el formulario materialize
  $('select').material_select();
// funcion para realizar el splash
  $("main").hide();
// Page 1 -- splash
  setTimeout(function() {
   $("section").fadeOut();
   $("main").show();

 },1000 );

 // nombrando variables reutilizables


    var $number = $("#icon_telephone");
    var $boton = $(".btn-next");
    var $insertCode = $("#insertCode");
    var $btn = $("#btnVerify");
    var $btnResentCode = $(".btn-resent");

// nombrando eventos y funciones
    $number.on("keyup",validCelphoneNumber);
    $boton.on("click", randomCode);

    $btnResentCode.on("click", resentRandomCode);

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
      var code = Math.floor((Math.random() * 1000) + 1);
      alert("Tu codigo: " + "LAB "  + code);
    }

    // funcion para reenviar nuevamente el codigo aleatorio
    function resentRandomCode() {
      $insertCode.on("keyup", validCodeRandom);
      var code = Math.floor((Math.random() * 1000) + 1);
      alert("Tu codigo: " + "LAB "  + code);
      console.log(code);

      // funcion para validar el codigo aleatorio
        function validCodeRandom() {
        var $camptText = parseInt($insertCode.val());
          if ($camptText === code) {
            $btn.removeClass("disabled");
            $btn.addClass("btnAdd");
          }
          else {
            $btn.addClass("disabled");
            $btn.removeClass("btnAdd");

          }
        }
    }






 }

$(document).ready(begin);
