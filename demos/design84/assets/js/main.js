"use strict"
var hamburger, nav;
window.addEventListener('load', function(){

	hamburger = document.querySelector('.hamburger');

	nav = document.querySelector('.nav');

	hamburger.addEventListener('click', function(){

		hamburger.classList.toggle('open');

		nav.classList.toggle('open');
	})
})
