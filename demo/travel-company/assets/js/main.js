"use strict"
var navWrapper, hamburger, pageWrapperx2, page, wScroll, pageWrapper, background;
window.addEventListener('load', function(){

	navWrapper = document.querySelector('.nav-wrapper');
	hamburger = document.querySelector('.hamburger');
	pageWrapperx2 = document.querySelector('.page-wrapperx2');
	pageWrapper = document.querySelector('.page-wrapper');
	page = document.querySelector('.page');
	background = document.querySelector('.background');

	hamburger.addEventListener('click', function(){

		navOpen();
	});

	background.addEventListener('click', function(){

		navClose();
	})
})
function navOpen(){

	wScroll =  window.scrollY;

	pageWrapperx2.style['height'] = window.innerHeight + 'px';
	pageWrapper.style['transform'] = 'translateY(-'+ wScroll +'px)';
	navWrapper.classList.add('slided');
	window.addEventListener('scroll', function(){

		pageWrapperx2.style['height'] = window.innerHeight + 'px';
	})
}
function navClose(){

	window.addEventListener('scroll', function(){

		pageWrapperx2.style['height'] = 'initial';
	})
	navWrapper.classList.remove('slided');
	pageWrapperx2.style['height'] = 'initial';
	pageWrapper.style['transform'] = 'translateY(0px)';
	window.scrollTo(0, wScroll);
}























































