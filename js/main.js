window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("body").classList.add('scroll');
  } else {
     document.getElementById("body").classList.remove('scroll');
  }
}

$(function () {
  $(".menu__list a, .header__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 500);
  });

  $('.feedback__slider').slick({
    arrows: false,
  });

  // $('.menu__btn').on('click', function () {
  //   $('.menu, .menu__btn').toggleClass('active');
  //   // $('body').toggleClass('lock');
  //   // $('.menu a').toggleClass('active');
  // });
  var mixer = mixitup('.portfolio__content');
});

const btn = document.querySelector('.menu__btn');
      menu = document.querySelector('.menu');

btn.addEventListener('click', () =>{
  document.body.classList.toggle('lock');
  btn.classList.toggle('active');
  menu.classList.toggle('active');
}); 