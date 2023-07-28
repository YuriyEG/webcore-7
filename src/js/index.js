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

        let feedbackList = document.querySelector('.feedback-list');
        feedbackList.style.right = '-400px';
        feedbackList.style.transition = 'right 0.3s ease';
      

});


//  Показ всего списка брендов
let moreBrands = document.querySelector('.brands__more');

moreBrands.addEventListener('click', function () {

        let moreText = document.querySelector('.brands__more-text');

        if (moreText.textContent === 'Показать все') {

            moreText.textContent = 'Скрыть';
            let brandsBox = document.querySelector('.brands__box');
            brandsBox.classList.add('brands__box--open');

            } else {

            moreText.textContent = 'Показать все';
            let brandsBox = document.querySelector('.brands__box');
            brandsBox.classList.remove('brands__box--open');

            }
});

// Показ скрытого текста о компании
let mainSummary  = document.querySelector('.post__summary');

mainSummary.addEventListener( 'click', function () {

    mainSummary.classList.add('display--none');
    mainSummary.classList.remove('post__summary');
    let hiddenText = document.querySelector('.post__hidden-text');
    hiddenText.style.display = 'inline';
    
});



// Показ формы обратной связи


let feedback = document.querySelector('.header__chat');
let feedback2 = document.querySelector('.sidebar__chat');

let showFeedbackList =  ()  => {
    console.log('feedback');
    let feedbackList = document.querySelector('.feedback-list');
    feedbackList.style.display = 'block';
    feedbackList.style.right = '0px';
    feedbackList.style.transition = 'right 0.3s ease';


    let mask = document.getElementById('mask');
    mask.style.display = 'block';

    feedbackList.style.boxShadow = '0 -50px 65px 0 rgba(0, 0, 0, 0.385)';


}

feedback.addEventListener( 'click', showFeedbackList );
feedback2.addEventListener( 'click', showFeedbackList );








import Swiper from 'swiper/bundle';
      import 'swiper/css/bundle';

      
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

     

    

  