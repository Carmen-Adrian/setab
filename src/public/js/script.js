$.getJSON("/js/lang.json", function (json) {
  //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function (index, element) {
    $(this).text(doc[lang][$(this).attr('key')]);
  });//Each

  $('.translate').click(function () {
    localStorage.setItem("lang", $(this).attr('id'));
    var lang = $(this).attr('id');
    var doc = json;
    $('.lang').each(function (index, element) {
      $(this).text(doc[lang][$(this).attr('key')]);
    }); //Each
  }); //Funcion click
});//Get json AJAX

$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },300); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(300); }else{ $('.ir-arriba').slideUp(300); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },300); });
}