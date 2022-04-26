$(document).ready(function(){
    //animation scroll
    new WOW().init();

    //slider
    $('.reviews__wrapper').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1300.50,
            settings: {
              slidesToShow: 1,
              adaptiveHeight: false
            }
          }
        ]
    });

    //overlay modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation').fadeOut();
    });
 

    //ajax
    $('.feed-form').submit(function(e) {
        e.preventDefault ();
        $.ajax ({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this),
        }).done (function(){
            $(this).find ("input").val (""); })
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('.feed-form').trigger('reset');
        return false;
    });

    //menu
    const menu = document.querySelector('.menu'),
    menuArrow = document.querySelector('.menu__arrow'),
    menuBtn = document.querySelector('.header__menu-btn');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });
    menuArrow.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });


    //blog tabs
    function toggleSlide (eye) {

      $(eye).each(function(i) {
        $(this).on('click', function(e) {
          $('.blog__eye').eq(i).toggleClass('blog__eye_active');
          $('.blog__img').eq(i).toggleClass('blog__img_active');
          $('.blog__text').eq(i).toggleClass('blog__text_active');
          $('.blog__eye-close').eq(i).toggleClass('blog__eye-close_active');
        });
      });
    };
    toggleSlide ('.blog__eye');
    toggleSlide ('.blog__eye-close');
    



  });