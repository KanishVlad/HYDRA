$(function () {

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('.menu').addClass('menu-fixed');
    } else {
      $('.menu').removeClass('menu-fixed');
    }
  });

  $(".menu a, .logo, .header__link, .footer__logo").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');
    var target = $(id);

    if (target.length) {
      event.preventDefault();
      var top = target.offset().top - 120;

      $('body,html').animate({ scrollTop: top }, 1000);
      $('body').css('overflow', 'auto');
      $('.menu__list').removeClass('menu__list--active');
      $('.burger').removeClass('burger--active');
    }
  });

})