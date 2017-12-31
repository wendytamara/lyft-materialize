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
    var $firstName = $("#firstName");
    var $lastName = $("#lastName");
    var $email = $("#email");
    var $checkbox = $(".checkbox");
    var $btnForm = $("#btn-form");


// nombrando eventos y funciones
    $number.on("keyup",validCelphoneNumber);
    $boton.on("click", randomCode);
    $btnResentCode.on("click", resentRandomCode);
    // $btnForm.on("click", validForm);
    $firstName.on("keyup", validFirstName);
    $firstName.on("keyup", validForm);

    $lastName.on("keyup", validLastName);
    $lastName.on("keyup", validForm);

    $email.on("keyup", validEmail);
    $email.on("keyup", validForm);

    $checkbox.on("click", validCheckbox);
    $checkbox.on("click", validForm);

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


      function validFirstName() {
        return $firstName.val().length >= 3;

      }

      function validLastName() {
        return $lastName.val().length >= 3;
      }

      function validEmail() {
         return $email.val().length > 6;
      }

      function validCheckbox() {
        return $checkbox.prop("checked");
      }

      function validForm() {
        if (validFirstName() && validLastName() && validEmail() && validCheckbox()) {
          $btnForm.removeClass('disabled'); 
          $btnForm.addClass('btnAdd');
        }
        else {
          $btnForm.addClass('disabled');
        }
      }




 }

$(document).ready(begin);
