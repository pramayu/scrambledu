$(document).ready(function() {
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 80) {
      $('#top_n').hide();
      $('#bottom_n').addClass('wtf');
    } else if (scroll <= 79) {
      $('#top_n').show()
      $('#bottom_n').removeClass('wtf');
    }
  })
})
