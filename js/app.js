function begin() {
// funccion para inicializar el formulario materialize
  $('select').material_select();
  // funcion para realizar el splash
  $('main').hide();
  setTimeout(function() {
    $('section').fadeOut();
    $('main').show();
  }, 1000);

  // nombrando variables reutilizables
  var $number = $('#icon_telephone');
  var $boton = $('.btn-next');
  var $insertCode = $('#insertCode');
  var $btn = $('#btnVerify');
  var $btnResentCode = $('.btn-resent');
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $email = $('#email');
  var $checkbox = $('.checkbox');
  var $btnForm = $('#btn-form'); 
  var $textOnlyNumber = $('#textOnlyNumber');

  var $textName = $('#textName');
  var $textLastName = $('#textLastName');
  var $textEmail = $('#textEmail');

  // nombrando eventos y funciones
  $number.on('keyup', validCelphoneNumber);
  $boton.on('click', randomCode);
  $btnResentCode.on('click', resentRandomCode);
  $firstName.on('keyup', validFirstName);
  $firstName.on('keyup', validForm);
  $lastName.on('keyup', validLastName);
  $lastName.on('keyup', validForm);
  $email.on('keyup', validEmail);
  $email.on('keyup', validForm);
  $checkbox.on('click', validCheckbox);
  $checkbox.on('click', validForm);
  $insertCode.on('keyup', validCodeRandom);

  // funcion para validar el numero de tlf de 10 dgts
  function validCelphoneNumber() {
    if ($number.val().length === 10) {
      $boton.removeClass('disabled');
      $textOnlyNumber.removeClass('visible');
      $textOnlyNumber.addClass('noVisible');
    }
    else if ($number.val().length > 10) {
      $textOnlyNumber.addClass('visible');
      $boton.addClass('disabled');
    }
    else {
      $boton.addClass('disabled');
      $textOnlyNumber.removeClass('visible');
      $textOnlyNumber.addClass('noVisible');
    }
  }

  // funcion para crear el alert con el codigo aleatorio
  function randomCode() {
    var code = Math.floor((Math.random() * 1000) + 1);
    alert('Tu codigo: ' + 'LAB ' + code);
    localStorage.codeAleatorio = code;
  }

  // funcion para reenviar nuevamente el codigo aleatorio
  function resentRandomCode() {
    var code = Math.floor((Math.random() * 1000) + 1);
    alert('Tu codigo: ' + 'LAB ' + code);
    localStorage.codeAleatorio = code;
  }

  // funcion para validar el codigo aleatorio
  function validCodeRandom() {
    var $camptText = $insertCode.val();
    if ($camptText === localStorage.codeAleatorio) {
      $btn.removeClass('disabled');
      $btn.addClass('btnAdd');
    }
    else {
      $btn.addClass('disabled');
      $btn.removeClass('btnAdd');
    }
  }

  function validFirstName() {
    var name = false;
    var regex = /^[a-zA-Z]*$/;
    if (regex.test($($firstName).val()) && $firstName.val().length >= 3) {
      $textName.removeClass('visible');
      $textName.addClass('noVisible');
      name = true;
    }
    else {
      $textName.removeClass('noVisible');
      $textName.addClass('visible');
    }
    return name;
  }

  function validLastName() {
    var lastName = false;
    var regex = /^[a-zA-Z]*$/;
    if (regex.test($($lastName).val()) && $lastName.val().length >= 3) {
      $textLastName.removeClass('visible');
      $textLastName.addClass('noVisible');

      lastName = true;
    }
    else {
      $textLastName.removeClass('noVisible');
      $textLastName.addClass('visible');
    }
    return lastName;
  }

  function validEmail(event) {
    var email = false;
    var regex = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);
    if (regex.test($($email).val())) {
      $textEmail.removeClass('show');
      $textEmail.addClass('hiden');
      email = true;
    }
    else {
      $textEmail.removeClass('hiden');
      $textEmail.addClass('show');
    }
    return email;
  }

  function validCheckbox() {
    return $checkbox.prop('checked');
  }

  function validForm() {
    if (validFirstName() && validLastName() && validEmail() && validCheckbox()) {
      $btnForm.removeClass('disabled');
      $btnForm.addClass('btnAdd');
    }
    else {
      $btnForm.addClass('disabled');
      $btnForm.removeClass('btnAdd');
    }
  }
};

$(document).ready(begin);
