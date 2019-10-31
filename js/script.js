$(function(){

    // トグルボタン
    $('.toggle').click(function() {
        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
            $('.header-nav, .nav-bar').addClass('active'); 
        } else {
            $('.header-nav, .nav-bar').removeClass('active');
        }
    });

    // ファイル添付
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
    
    // swiper-menu-4
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    //wow初期化
    new WOW().init();

    // ページ内リンクスムーススクロール----------------------------------------------------------------------------
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
// -------------------------------------------------------------------------------------------------------------------

 // フローティングのページっトップへ戻るボタン---------------------------------------------------------------------
    var topBtn = $('#pageTop');
    topBtn.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
//  ----------------------------------------------------------------------------------------------------------------

// ナビゲーションに現在位置を表示する------------------------------------------------------------------------------
    var set = 200;//ウインドウ上部からどれぐらいの位置で変化させるか
    var boxTop = new Array;
    var current = -1;
    //各要素の位置
    //position-nowは場所を取得したい対象の要素に付ける
    $('.position-now').each(function (i) {
        boxTop[i] = $(this).offset().top;
    });
    //最初の要素にclass="positiion-now"をつける
    changeBox(0);
    //スクロールした時の処理
    $(window).scroll(function () {
        scrollPosition = $(window).scrollTop();
        for (var i = boxTop.length - 1; i >= 0; i--) {
            if ($(window).scrollTop() > boxTop[i] - set) {
                changeBox(i);
                break;
            }
        };
    });
    //ナビの処理
    function changeBox(secNum) {
        if (secNum != current) {
            current = secNum;
            secNum2 = secNum + 1;//以下にクラス付与したい要素名と付与したいクラス名
            $('#gNav li a').removeClass('link-current');

            //位置によって個別に処理をしたい場合　
            if (current == 0) {
                $('#top').removeClass('link-current');
                // 現在地がsection1の場合の処理
            } else if (current == 1) {
                $('#cardLink').addClass('link-current');
                // 現在地がsection2の場合の処理
            } else if (current == 2) {
                // 現在地がsection3の場合の処理
                $('#newsLink').addClass('link-current');
            }
            else if (current == 3) {
                // 現在地がsection4の場合の処理
                $('#moreLink').addClass('link-current');
            }
            else if (current == 4) {
                // 現在地がsection4の場合の処理
                $('#widgetLink').addClass('link-current');
            }
            else if (current == 5) {
                // 現在地がsection4の場合の処理
                $('#priceLink').addClass('link-current');
            }
            else if (current == 6) {
                // 現在地がsection4の場合の処理
                $('#accsessLink').addClass('link-current');
            }
            else if (current == 7) {
                // 現在地がsection4の場合の処理
                $('#contactLink').addClass('link-current');
            }

        }
    };
    
    // ------------------------------------------------------------------------------------------------------------------

    // タブの切替------------------------------------------------------------------------------------------------------

    $('.tab-label').on('click', function () {
        var $th = $(this).index();
        $('.tab-label').removeClass('active');
        $('.tab-panel').removeClass('active');
        $(this).addClass('active');
        $('.tab-panel').eq($th).addClass('active');
    });
    
    // -----------------------------------------------------------------------------------

    // アコーディオン-------------------------------------------------------------------------------------------------

    $('.question, .plus-icon').click(function() {
        var $answer = $(this).parent().find('.answer');

        if ($('.answer').hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).parent().find('.minus-icon').removeClass('minus-icon').addClass('plus-icon');

        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).parent().find('.plus-icon').removeClass('plus-icon').addClass('minus-icon');
        }

    });
    

    // ----------------------------------------------------------------------------------------

    // アコーディオン2-------------------------------------------------------------------------

    $('.about-list-title.col-1').click(function() {
        var $aboutAnswer = $(this).parent().find('.about-answer');

        if ($('.about-answer').hasClass('open-col-1')) {
            $aboutAnswer.removeClass('open-col-1');
            $aboutAnswer.slideUp();
            $(this).removeClass('about-list-title-upArrow').addClass('about-list-title');

        } else {
            $aboutAnswer.addClass('open-col-1');
            $aboutAnswer.slideDown();
            $(this).removeClass('about-list-title').addClass('about-list-title-upArrow');
        }
    });

    $('.about-list-title.col-2').click(function () {
        var $aboutAnswer = $(this).parent().find('.about-answer');

        if ($('.about-answer').hasClass('open-col-2')) {
            $aboutAnswer.removeClass('open-col-2');
            $aboutAnswer.slideUp();
            $(this).removeClass('about-list-title-upArrow').addClass('about-list-title');

        } else {
            $aboutAnswer.addClass('open-col-2');
            $aboutAnswer.slideDown();
            $(this).removeClass('about-list-title').addClass('about-list-title-upArrow');
        }
    });

    // ----------------------------------------------------------------------------------------

});