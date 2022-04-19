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
        variableWidth: true
    });

    //overlay modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    })

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation').fadeOut();
    })
 

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
    })
  });