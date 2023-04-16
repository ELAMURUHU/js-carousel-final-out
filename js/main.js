let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-item');
const totalSlider = sliders.length;
//console.log(totalSlider);
const btnPrev = document.querySelector('#prev-btn');
const btnNext = document.querySelector('#next-btn');

btnPrev.addEventListener('click',function(){
	PrevSlide();
});
btnNext.addEventListener('click',function(){
		NextSlide();
});

function updatePosition(){
	sliders.forEach(function(event){
		event.classList.remove("active");
	    event.classList.add("hidden");
	});
	sliders[slidePosition].classList.add('active');
}

function PrevSlide(){
	slidePosition--;
	updatePosition();
}

function NextSlide(){
	if(slidePosition==totalSlider-1){
		slidePosition=0;
	}else{
			slidePosition++;

	}
	updatePosition();
}