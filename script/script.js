document.getElementById('burgerMenu').onclick = function() {
	menuNav.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	siteBody.classList.toggle('lock');
}

$(document).ready(function() {
	$('.main__slider').slick({
		arrows:true, //стрелки
		dots:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed: 1500,
		infinit:true,
		easeing:'listener',
		autoplay:true,
		autoplaySpeed:1500,
		draggable:true,
		swipe:true,
	}),
	$('.popup-link').magnificPopup({
		type: 'image',
	})
	$('.partners__slider').slick({
		arrows:true,
		dots:false,
		slidesToShow: 5,
		slidesToScroll:1,
		speed:1000,
		infinit:true,
		easeing: 'ease',
		autoplay:true,
		autoplaySpeed:1000,
		draggable:true,
		swipe:true,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:4,
				}
			},{
				breakpoint: 1000,
				settings: {
					slidesToShow:3,
				}
			},{
				breakpoint:768,
				settings: {
					slidesToShow:2,
				}
			},{
				breakpoint:550,
				settings: {
					slidesToShow:1,
				}
			}
		]
	}),
	$('a').on('click', function() {
		var elementClick = $(this).attr('href');
		var destrination = $(elementClick).offset().top;
		$('html,body').animate({scrollTop: destrination}, 900);
	});
});

