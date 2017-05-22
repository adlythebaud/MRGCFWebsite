function loaded() {
	'use strict';
	console.log('test');



	function clinTrialSlideShow() {
		var leftButton = document.querySelector('#leftArrow');
		var rightButton = document.querySelector('#rightArrow');
		var clinTrials = document.querySelector('.newFlexDisplay');
		var toLeft = 0;



		leftButton.addEventListener('click', function() {
			toLeft += 10;
			clinTrials.style.right = toLeft + '%';
		});

		rightButton.addEventListener('click', function() {
			toLeft -= 10;
			clinTrials.style.right = toLeft + '%';
		});


	}

	function redSlideShow() {
		var leftButton = document.querySelector('#leftButton');
		var rightButton = document.querySelector('#rightButton');
		var redSquares = document.querySelectorAll('.redSquare');

		leftButton.addEventListener('click', function() {
			console.log('leftButton');
			
		});

		rightButton.addEventListener('click', function() {
			console.log('rightButton');


		});
	}

	clinTrialSlideShow();

	redSlideShow();



	
	var slideIndex = 1;
	function plusDivs(n) {
	    showDivs(slideIndex += n);
	}

	function showDivs(n) {
	    var i;
	    var x = document.getElementsByClassName('redSquare');
	    if (n > x.length) {slideIndex = 1} 
	    if (n < 1) {slideIndex = x.length} ;
	    for (i = 0; i < x.length; i++) {
	        x[i].style.display = "none"; 
	    }
	    x[slideIndex-1].style.display = "block"; 
	}
	
	showDivs(slideIndex);

}