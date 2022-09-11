
    const swiper = new Swiper(".swiper-wrapper-gallery", {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      сenteredSlides: false,
      loopAdditionalSlides: 1,
      loopFillGroupWithBlank: true,
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
          1330: {
              slidesPerView: 3,
              
          },
          1024: {
              slidesPerView: 2,
              
          },
          480: {
              slidesPerView: 1,
              
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