(function() {
  // Header Slider
  var mySwiper = new Swiper('.header-slider', {
    spaceBetween: 100,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    speed: 700,
    autoplay: 4000
  });

  if ($(window).scrollTop() >= 1) {
    $('.header__nav').addClass('header__nav--sticky');
  }

  $(window).on('wheel', function(event) {
    if (event.originalEvent.deltaY > 0) {
      if ($(window).scrollTop() >= 1) {
        $('.header__nav').addClass('header__nav--sticky');
      }
    } else {
      if ($(window).scrollTop() <= 5) {
        $('.header__nav').removeClass('header__nav--sticky');
      }
    }
  });

}());
