"use strict"

var hamburger, nav, pages, people, sliderInterval;

window.addEventListener('load', function(){

	people = document.querySelectorAll('.person.real');

	pages = document.querySelectorAll('.person.real .paginator span')

	hamburger = document.querySelector('.hamburger');

	nav = document.querySelector('.nav');

	hamburger.addEventListener('click', function(){

		this.classList.toggle('active');

		nav.classList.toggle('open');
	})

	for(var i = 0; i < pages.length; i++){

		pages[i].addEventListener('click', function(){

			clearInterval(sliderInterval);

			sliderInterval = setInterval(slide, 5000);

			if(this.classList.contains('active')){

				return;
			}

			var children = Array.from(this.parentNode.children);

			var index = indexOf(this, children);

			for(var i = 0; i < people.length; i++){

				people[i].classList.remove('active');
			}

			setTimeout(function(){
				
				people[index].classList.add('active');
			}, 700);
		})
	}

	sliderInterval = setInterval(slide, 5000);
})
function slide(){

	var currentIndex = indexOf(document.querySelector('.person.real.active'), people);

	people[currentIndex].classList.remove('active');

	setTimeout(function(){

		if(currentIndex != 3){

			people[currentIndex + 1].classList.add('active');
		}else{

			people[0].classList.add('active');
		}
	}, 700)
}
function indexOf(el, array){

	var index;

	for(var i = 0; i < array.length; i++){

		if(array[i] == el){

			index = i;
		}
	}

	return index;
}






















































