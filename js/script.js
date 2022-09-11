
    const swiper = new Swiper(".swiper-wrapper-gallery", {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 20,
      autoplay: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet"></span>`;
          },
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
                
            },
            576: {
                slidesPerView: 2,
                
            },
            1330: {
                slidesPerView: 3,
                
            },
         },
 
    });
    

/*     jQuery(document).ready(function($){
        $(window).on("load", function () {
            $(".scrolls-main").mCustomScrollbar();
        });
    });

 


    jQuery(document).ready(function($){

    $(".scrolls-main").mCustomScrollbar({
        axis: "y",              // вертикальный скролл
        theme: "rounded-dark",  // тема
        scrollInertia: "330",   // продолжительность прокрутки, значение в миллисекундах
        setHeight: "100%",      // высота блока (переписывает CSS)
        mouseWheel: {
            deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши
        }
    });

}); */



jQuery( document ).ready(function($) {

    $('.btn1').click(function(){
        $('html,body').animate({scrollTop:$('.section-two').offset().top}, 800);
    });
    $('.btn2').click(function(){
        $('html,body').animate({scrollTop:$('.section-three').offset().top}, 800);
    });
     $('.btn3').click(function(){
        $('html,body').animate({scrollTop:$('.section-four').offset().top}, 800);
    }); 
    $('.btn4').click(function(){
        $('html,body').animate({scrollTop:$('.section-five').offset().top}, 800);
    });
});
    
