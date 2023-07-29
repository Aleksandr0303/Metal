
import tabs from './modules/tabs';
import catalog from './modules/catalog';
import testWebP from './modules/testWebPLinc';
import swiper from './modules/swiper';
import changesStyleRegion from './modules/map';

document.addEventListener('DOMContentLoaded', function() {

  tabs();
  catalog();
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });

});


