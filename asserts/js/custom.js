$(document).ready(function(){
	$('.bxslider').bxSlider({
	  auto: true,
	  speed: 1000,
	  pause: 3000,
	  mode: 'fade',
	  captions: false,
	  touchEnabled: true,
	  responsive: true
	});
});

/*$(window).resize(function() {
	var windowWidth = $(window).width(),
		windowHeight = $(window).height(),
		adjHeight = windowHeight;
});
*/
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);