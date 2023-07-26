console.log('Я внес изменения');



// import '@babel/polyfill'; добавил в конфиге



import '../index.html';
import '../scss/style.scss';
  // Показ и скрытие бокового меню с кнопки
   let headerBurger = document.querySelector('.header__burger');

   headerBurger.addEventListener( 'click', function () {

        var sideBar = document.querySelector('.sidebar');
 
        sideBar.style.left = '0px';
        sideBar.style.transition = 'left 0.5s ease';
        sideBar.style.boxShadow = '0 -50px 65px 0 rgba(0, 0, 0, 0.385)';
        var root = document.getElementById('root');
        root.style.position = 'fixed';
        
        let mask = document.getElementById('mask');
        mask.style.display = 'block';

   });

    
// скрытие бокового меню с кнопки 
let sidebarClose = document.querySelector('.sidebar__close');

sidebarClose.addEventListener('click', function() {

        console.log('close');
        var sideBar = document.querySelector('.sidebar');
        sideBar.style.left = '-320px';
        sideBar.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0)';
        sideBar.style.transition = 'left 0.3s ease';
        let mask = document.getElementById('mask');
        mask.style.display = 'none';
        var root = document.getElementById('root');
        root.style.position = 'relative';

});


// Скрытие бокового меню при клике на заблокированную область

var openMask = document.querySelector('.sidebar__mask');

openMask.addEventListener('click', function () {

        openMask.style.display = 'none';

        var saidbar = document.querySelector('.sidebar');
        saidbar.style.left = '-400px';
        saidbar.style.transition = 'left 0.5s ease';
        var root = document.getElementById('root');
        root.style.position = 'relative';
        saidbar.style.boxShadow = '0 0 0 0 black';

});


//  Показ всего списка брендов
let moreBrands = document.querySelector('.main__brands-more');

moreBrands.addEventListener('click', function () {

        let moreText = document.querySelector('.main__more-text');

        if (moreText.textContent === 'Показать все') {

            moreText.textContent = 'Скрыть';
            let brandsBox = document.querySelector('.main__brands-box');
            brandsBox.classList.add('main__brands-box--open');

            } else {

            moreText.textContent = 'Показать все';
            let brandsBox = document.querySelector('.main__brands-box');
            brandsBox.classList.remove('main__brands-box--open');

            }
});

// Показ скрытого текста о компании
let mainSummary  = document.querySelector('.main__summary');

mainSummary.addEventListener( 'click', function () {

    mainSummary.classList.add('display--none');
    mainSummary.classList.remove('main__summary');
    let hiddenText = document.querySelector('.main__hidden-text');
    hiddenText.style.display = 'inline';
    
});


const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true'
        },
      

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: 'true',
          hide: false,
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },

        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        
        mousewheel: {
            sensitivity: 1,
        }, 
        
       
        // watchOverFlow: true,
        spaceBeetween: 32, 

        // autoHeight: true,
        slidesPerWiew: 2,
        

     
      });

     