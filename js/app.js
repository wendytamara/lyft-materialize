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
    var code = Math.floor((Math.random() * 1000) + 1);

    var $number = $("#icon_telephone");
    var $boton = $(".btn-next");
    var $insertCode = $("#insertCode");
    var $btn = $("#btnVerify");

// nombrando eventos y funciones
    $number.on("keyup",validCelphoneNumber);
    $boton.on("click", randomCode);
    $insertCode.on("keyup", validCodeRandom);

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
      debugger
      alert("Tu codigo: " + "LAB "  + code);
      console.log(code);
    }


    function validCodeRandom(){

      var $camptText = parseInt($insertCode.val());
      if ($camptText === code) {
        $btn.removeClass("disabled");
      }
      else {
        $btn.addClass("disabled");
      }
    }



 }

$(document).ready(begin);
