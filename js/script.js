$(function(){

    $('.toggle').click(function() {
        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
            $('.header-nav, .nav-bar').addClass('active'); 
        } else {
            $('.header-nav, .nav-bar').removeClass('active');
        }
    });
})