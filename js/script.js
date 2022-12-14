
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
    

     jQuery(document).ready(function($){
        $(window).on("load", function () {
            $(".scrolls-main").mCustomScrollbar();
            return false;
        });
    });



    jQuery(document).ready(function($){

    $(".scrolls-main").mCustomScrollbar({
        axis: "y",              // вертикальный скролл
        theme: "light-thick",  // тема
        scrollInertia: "430",   // продолжительность прокрутки, значение в миллисекундах
        mouseWheel: {
            deltaFactor: 400    // кол-во пикселей на одну прокрутку колёсика мыши
        }
       
    });


    jQuery(document).ready(function($){
        $(window).on("load", function () {
            $(".scrolls-main2").mCustomScrollbar();
            return false;
        });
       
    });



    jQuery(document).ready(function($){

    $(".scrolls-main2").mCustomScrollbar({
        axis: "y",              // вертикальный скролл
        theme: "light-thick",  // тема
        scrollInertia: "430",   // продолжительность прокрутки, значение в миллисекундах

        mouseWheel: {
            deltaFactor: 400    // кол-во пикселей на одну прокрутку колёсика мыши
        }
        });
    });

    jQuery(document).ready(function($){
        $(window).on("load", function () {
            $(".scrolls-main3").mCustomScrollbar();
            return false;
        });
    });



    jQuery(document).ready(function($){

    $(".scrolls-main3").mCustomScrollbar({
        axis: "y",              // вертикальный скролл
        theme: "light-thick",  // тема
        scrollInertia: "430",   // продолжительность прокрутки, значение в миллисекундах

        mouseWheel: {
            deltaFactor: 400    // кол-во пикселей на одну прокрутку колёсика мыши
        }
        });
    });

    
}); 



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
    $('.scroll-down').click(function(){
        $('html,body').animate({scrollTop:$('.section-two').offset().top}, 800);
    });
});
jQuery( document ).ready(function($) {

// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}



    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
        // Получаем значение каждого дата-атрибута
        let image = images[i].getAttribute('data-bg');
        // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
        images[i].style.backgroundImage = 'url(' + image + ')';
    }

    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
        // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }
});
