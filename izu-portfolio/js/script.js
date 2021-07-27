//ハンバーガーメニュー、ドロアーメニューの部分//
$(function () {
    $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
      $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
  });


//ログインのモーダルのclick作成//
$('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });
//ログインモーダルの閉じるボタン作成//
  $('.close-modal').click(function() {
      $('#login-modal').fadeOut();
  });

//ドロアーメニュー時の開閉//
$('#login-show2').click(function() {
    $('#login-modal2').fadeIn();
  });
//ドロアーメニュー時の開閉  ログインモーダルの閉じるボタン作成//
  $('.close-modal2').click(function() {
      $('#login-modal2').fadeOut();
  });


//slick slider部分//
$(function() {
    $('.top-slider').slick({
        autoplay: true,
        autoplay: 5000,
        speed: 1000,
        dots: true,
        fade: false
        ,responsive:[
            {
                breakpoint: 670,
                settings:{
                    slidesToShow:1,
                    autoplay: true,
                    autoplay: 5000,
                    speed: 1000,
                    dots: false,
                    fade: false
                }
            },
        ]
    })


        

//スクロールアニメーションの作動//
    AOS.init()
    
$(function() {
    $('.aside-slider').slick({
        autoplay: true,
        autoplay: 5000,
        speed: 1000,
        dots: true,
        fade: false
        ,responsive:[
            {
                breakpoint: 670,
                settings:{
                    slidesToShow:1,
                    autoplay: true,
                    autoplay: 5000,
                    speed: 1000,
                    dots: true,
                    fade: false
                }
            },
        ]
    })
});


//中伊豆などの４つバナーからのスムーススクロールの実装//
$('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
});

//アコーディオンの作動//
    $('.faq-list-item').click(function() {
        var $answer = $(this).find('.answer');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });
//トップへ戻るボタン//
    // 変数宣言と代入
    var pageTop = $("#page-top");
    // ボタン非表示
    pageTop.hide();

    // 80pxスクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
        // 0.3秒でフェードイン
        pageTop.fadeIn(300);
    } else {
        // 0.3秒でフェードアウト
        pageTop.fadeOut(300);
    }
    });
    // 0.5秒でページトップへ戻る
    pageTop.click(function () {
        $("body, html").animate({ scrollTop: 0}, 500);
        return false;
    });
});