
$("body").on("click", ".search-modal-btn", function (el) {
  el.preventDefault();
  $('#searchmodal').modal('show');
  return false;
});

$('#searchmodal').on('shown.bs.modal', function () {
  $('#searchmodal .form-element').trigger('focus');
})

$(document).ready(function () {
  function setCookie(key, value, expiry) {
      var expires = new Date();
      expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
      var path = "/";
      document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';path=' + path;
  }

  function getCookie(key) {
      var name = key + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookieArray = decodedCookie.split(';');
      for (var i = 0; i < cookieArray.length; i++) {
          var cookie = cookieArray[i];
          while (cookie.charAt(0) == ' ') {
              cookie = cookie.substring(1);
          }
          if (cookie.indexOf(name) == 0) {
              return cookie.substring(name.length, cookie.length);
          }
      }
      return null;
  }

  $("#dark_mode_toggle input[type='checkbox']").on("change", function () {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 30);
      if ($(this).prop("checked")) {
          $("body").addClass("dark_mode");
          setCookie("dark_mode", 'enabled', 30);
      } else {
          $("body").removeClass("dark_mode");
          setCookie("dark_mode", 'disabled', 30);
      }
  });

  // When reading the cookie, explicitly set the path to "/"
  var darkModeCookie = getCookie("dark_mode");
  if (darkModeCookie === 'enabled') {
      $("body").addClass("dark_mode");
  } else if (darkModeCookie === 'disabled') {
      $("body").removeClass("dark_mode");
  }
});
function show_share() {
  $("#st-1").toggleClass("show_widget");
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function deskMenuToggle() {
  $('.desk_menu_toggle').toggleClass("active_desk");
  $('#desk_menu').toggleClass("active_desk");
}

$(".open_cart_card_btn").on("click", function () {
  $("#cart_card").toggleClass("menu_show");
})
$("body").on("click", ".close_cart_card_btn", function (el) {
  el.preventDefault();
  $("#cart_card").removeClass("menu_show");
  return false;
});
$("body").on("click", ".login-modal-btn", function(el) {
  el.preventDefault();
  $('.bootbox ').modal('hide');
  $('#loginmodal').modal('show');
  $('#singupmodal').modal('hide');
  return false;
});
$("body").on("click", ".signup-modal-btn", function(el) {
  el.preventDefault();
  $('.bootbox ').modal('hide');
  $('#singupmodal').modal('show');
  $('#loginmodal').modal('hide');
  return false;
});

$("body").on("click", ".login-modal-close", function(el) {
  el.preventDefault();
  $('#loginmodal').modal('hide');
  return false;
});
$("body").on("click", ".signup-modal-close", function(el) {
  el.preventDefault();
  $('#singupmodal').modal('hide');
  return false;
});

var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
  content = $( 'body' ),
  header = $( '.icms-header' ),
  didScroll = false,
  changeHeaderOn = 1;

  function init() {
  scrollPage();
  window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
      }
  }, false );
  }

  function scrollPage() {
  var sy = scrollY();
  //if ( sy >= changeHeaderOn && $(window).width() > 992) {
  if ( sy >= changeHeaderOn) {
      header.addClass('icms-header-shrink');
      content.addClass('icms-body-shrink');
  }
  else {
      header.removeClass('icms-header-shrink');
      content.removeClass('icms-body-shrink');
  }
  didScroll = false;
  }

  function scrollY() {
  return window.pageYOffset || docElem.scrollTop;
  }

  init();

  })();

$(document).ready(function () {

});