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
