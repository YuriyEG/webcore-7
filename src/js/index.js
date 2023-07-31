



// import '@babel/polyfill'; добавил в конфиге



import '../index.html';
import '../scss/style.scss';

  // Показ бокового меню с кнопки

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
        sideBar.style.left = '-500px';
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
     

     
          
          var root = document.getElementById('root');
          root.style.position = 'relative';
          

          let feedbackList = document.querySelector('.feedback-list');
          let callList = document.querySelector('.call-list');

          feedbackList.style.right = '-600px';
          callList.style.right = '-600px';

          feedbackList.style.transition = 'right 0.3s ease';
          callList.style.transition = 'right 0.3s ease';

          

            var saidbar = document.querySelector('.sidebar');

          var media = window.matchMedia( '(max-width: 1439px)' );

          if (media.matches) {
            saidbar.style.left = '-500px';
            saidbar.style.transition = 'left 0.5s ease';
            saidbar.style.boxShadow = '0 0 0 0 black';
        
          }

          let sidebar6 = document.querySelector('.sidebar');
    
          sidebar6.style.zIndex = '9';



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


//  Показ всего списка устройств

let moreDevices = document.querySelector('.devices__more');

moreDevices.addEventListener('click', function () {

        console.log('devices');
        let moreText2 = document.querySelector('.devices__more-text');

        if (moreText2.textContent === 'Показать все') {

            moreText2.textContent = 'Скрыть';
            let devicesBox = document.querySelector('.devices__box');
            devicesBox.classList.add('devices__box--open');

            } else {

            moreText2.textContent = 'Показать все';
            let devicesBox = document.querySelector('.devices__box');
            devicesBox.classList.remove('devices__box--open');

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
    let feedbackListWrapper = document.querySelector('.feedback-list__wrapper');
    feedbackList.style.display = 'block';
    feedbackList.style.right = '0px';
    feedbackList.style.transition = 'right 0.3s ease';


    let mask = document.getElementById('mask');
    mask.style.display = 'block';

    feedbackListWrapper.style.boxShadow = '16px 0 52px 0 rgba(0, 0, 0, 0.385)';
  
    let rootFeed = document.querySelector('.root');
       
    let mediaQue = window.matchMedia('( max-width: 1439px )');
    if (mediaQue.matches) {
      rootFeed.style.position = 'fixed';
      
    }

    let sidebar4 = document.querySelector('.sidebar');
    
    sidebar4.style.zIndex = '-10';

    var saidbar13 = document.querySelector('.sidebar');
    var media = window.matchMedia( '(max-width: 1439px)' );
    if (media.matches) {
      saidbar13.style.left = '-500px';
      saidbar13.style.transition = 'left 0.5s ease';
      saidbar13.style.boxShadow = '0 0 0 0 black';
    }
    let sidebar62 = document.querySelector('.sidebar');
    sidebar62.style.zIndex = '9';


}

feedback.addEventListener( 'click', showFeedbackList );
feedback2.addEventListener( 'click', showFeedbackList );

// Кнопка закрытия окна обратной связи 

    let feedbackClose = document.querySelector('.feedback-list__close');
    let feedbackList = document.querySelector('.feedback-list');
    let mask = document.querySelector('.sidebar__mask');
    let sidebarFeed = document.querySelector('.sidebar');

    let closeFeed = () => {

        console.log('feed');
        feedbackList.style.right = '-600px';
        mask.style.display = 'none';
        sidebarFeed.style.left = '-500px';
        let rootFeed = document.querySelector('.root');
        rootFeed.style.position = 'relative';

        var media = window.matchMedia( '(min-width: 1440px)' );

          if (media.matches) {

            var saidbar = document.querySelector('.sidebar');
            saidbar.style.left = '0px';
           
            saidbar.style.boxShadow = '0 0 0 0 black';

            let sidebar5 = document.querySelector('.sidebar');
    
           sidebar5.style.zIndex = '9';
        
          }
        
    }

    feedbackClose.addEventListener( 'click', closeFeed  );



// окрыть форму заказа звонка

let call = document.querySelector('.header__call');
let call2 = document.querySelector('.sidebar__call');

let showCallList =  ()  => {
    console.log('call');
    let callList = document.querySelector('.call-list');
    let callListWrapper = document.querySelector('.call-list__wrapper');
    callList.style.display = 'block';
    callList.style.right = '0px';
    callList.style.transition = 'right 0.3s ease';


    let mask = document.getElementById('mask');
    mask.style.display = 'block';

    callListWrapper.style.boxShadow = '16px 0 52px 0 rgba(0, 0, 0, 0.385)';
    

    let rootCall2 = document.querySelector('.root');

    let mediaQue3 = window.matchMedia('( max-width: 1439px )');
    if (mediaQue3.matches) {
        rootCall2.style.position = 'fixed';

    }

    let sidebar7 = document.querySelector('.sidebar');
    
    sidebar7.style.zIndex = '-10';


    // скрываем сайбар

    var saidbar12 = document.querySelector('.sidebar');
    var media = window.matchMedia( '(max-width: 1439px)' );
    if (media.matches) {
      saidbar12.style.left = '-500px';
      saidbar12.style.transition = 'left 0.5s ease';
      saidbar12.style.boxShadow = '0 0 0 0 black';
    }
    let sidebar61 = document.querySelector('.sidebar');
    sidebar61.style.zIndex = '9';

   
}

call.addEventListener( 'click', showCallList );
call2.addEventListener( 'click', showCallList );


// Закрыть форму заказа звонка 


    let callClose = document.querySelector('.call-list__close');
    let callList = document.querySelector('.call-list');
    let mask2 = document.querySelector('.sidebar__mask');
    let sidebarFeed2 = document.querySelector('.sidebar');

    let closeFeed2 = () => {

        console.log('closeCall');
        callList.style.right = '-600px';
        mask2.style.display = 'none';
        sidebarFeed2.style.left = '-500px';
        let rootFeed = document.querySelector('.root');
        rootFeed.style.position = 'relative';

        var media = window.matchMedia( '(min-width: 1440px)' );

          if (media.matches) {

            var saidbar = document.querySelector('.sidebar');
            saidbar.style.left = '0px';
           
            saidbar.style.boxShadow = '0 0 0 0 black';
        
          }

          let sidebar4 = document.querySelector('.sidebar');
    
          sidebar4.style.zIndex = '9';
          let rootCall2 = document.querySelector('.root');
          rootCall2.style.position = 'relative';
        
    }

    callClose.addEventListener( 'click', closeFeed2  );


// Код слайдера




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
        spaceBeetween: 64, 

        // autoHeight: true,
        slidesPerWiew: 2,
        

     
      });

     

    

  