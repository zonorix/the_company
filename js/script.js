$(function(){

    $('.toggle').click(function() {
        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
            $('.header-nav, .nav-bar').addClass('active'); 
        } else {
            $('.header-nav, .nav-bar').removeClass('active');
        }
    });

    $('#imageFiles').css({
        'position': 'absolute',
        'top': '-9999px'
    }).change(function () {
        var val = $(this).val();
        var path = val.replace(/\\/g, '/');
        var match = path.lastIndexOf('/');
        $('#fileName').css("display", "inline-block");
        $('#fileName').val(match !== -1 ? val.substring(match + 1) : val);
    });
    $('#fileName').bind('keyup, keydown, keypress', function () {
        return false;
    });
    $('#fileName, #imageFileBtn').click(function () {
        $('#imageFiles').trigger('click');
    });
})