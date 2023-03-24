/* "use strict"; */
document.addEventListener('DOMContentLoaded', function() {

	//header
 	const hamburger = document.querySelector('.hamburger');
	const header = document.querySelector('.header');
	const close = document.querySelector('.close');
	const tab = document.querySelector('#tab');
	const tabActive = document.querySelector('.menu__metal_activ');
	const wrapper = document.querySelector('.menu__list');

	function navWindowClose() {
		hamburger.style.display = 'block';
		close.style.display = 'none';
		header.classList.remove('header_activ');
		const menuList = document.querySelector('.menu__list');
		menuList.style.display = 'none';
	}
  
	hamburger.addEventListener('click', function() {
		hamburger.style.display = 'none';
		close.style.display = 'block';
	    header.classList.add('header_activ');
		const headerActiv = document.querySelector('.header_activ');
		headerActiv.style.display = 'block';
		const menuList = document.querySelector('.menu__list');
		menuList.style.display = 'flex';

	});
	close.addEventListener('click', navWindowClose);
	
	tab.addEventListener('click', function(event) {
		event.preventDefault();
		if (getComputedStyle(tabActive).display == 'none') {
			tabActive.style.display = 'flex';
		} else if (getComputedStyle(tabActive).display == 'flex'){
			tabActive.style.display = 'none';
		}
	});

	wrapper.addEventListener('click', function(event) {
		if (event.target && event.target.tagName == 'A') {
			navWindowClose();
		}
	});



	//есть 13 гиперссылок и 13 блоков в другом ХТМЛ файле, нужно скрывать блоки и во время перехода по ссылке открывать тот к которому она относится и скрывать остальные

/* 	const catalogLink = document.querySelectorAll('.btn_mod');
	const priceCard = document.querySelectorAll('.price__card');
	priceCard.forEach(function(item) {
		item.style.display = 'none';
	});

 	catalogLink.forEach(function(item, i) {
		item.addEventListener('click', function() {
			priceCard.style.display = 'block';
		});
	}); */

});


