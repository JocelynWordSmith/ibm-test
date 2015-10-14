$(document).ready(function(){

$('.page-bound').css('width', $(window).width());

var swapBox = $('#word-swap-box').children('span');
var swapArr = ['More', 'Checking', 'Savings', 'Insurance', 'Consulting', 'Better'];
var clrArr = ['black','crimson','black','darkmagenta','black'];

function wordSwap(){
	var randomNumber = Math.floor(Math.random()*swapArr.length);
	swapBox.text(swapArr[randomNumber]).css('color',clrArr[randomNumber]);
}

window.setInterval(wordSwap, 600);

var fullName = "";
var email = "";

// doesnt work as smoothly
// function slideOff(target, direction){
// 	var $target = $( '#' + target );
// 	$target.animate({ direction : '500px'},500, function(){
// 		$target.addClass('hidden');
// 	})
// }

$('.get-started').click(function(){
	$('body').animate({
	  'background-position-x': '100%'
	}, 1000);
	var $splashPage = $('#splash-page')
	$splashPage.animate({'right':'1000px'},500, function(){
		$splashPage.addClass('hidden').css('right','0px');
	});
	$('#info-page').css('right','-500px').removeClass('hidden').animate({'right':'0px'},1000);
});
$('.return').click(function(){
		$('body').animate({
		  'background-position-x': '0%'
		}, 1000);
		$('#info-page').animate({'right':'-1000px'},500,function(){
			$('#info-page').addClass('hidden').css('right','0px');
		});
		var $splashPage = $('#splash-page')
		$splashPage.css('right','500px').removeClass('hidden').animate({'right':'0px'},1000);
	
});

$('.login').click(function(){
	var $splashPage = $('#splash-page')
	$splashPage.animate({'top':'-500px'},500, function(){
		$splashPage.addClass('hidden');
	});
	$('#login-page').css('top','-500px').removeClass('hidden').animate({'top':'0px'},1000);
})
$('.down').click(function(){
	var $loginPage = $('#login-page')
	$loginPage.animate({'top':'-500px'},500, function(){
		$loginPage.addClass('hidden');
	});
	$('#splash-page').css('top','-500px').removeClass('hidden').animate({'top':'0px'},1000);
})


$('.to-info').click(function(){
	var $orderPage = $('#order-page')
	$orderPage.animate({'right':'-500px'},500, function(){
		$orderPage.addClass('hidden').css('right','0px');
	});
	$('#info-page').css('right','500px').removeClass('hidden').animate({'left':'0px'},1000);
})

$('.to-order').click(function(){
	if( $('#email1').val() !== "" && $('#name1').val() !=="" ){

		$('#email2').val( $('#email1').val() );
		$('#name2').val( $('#name1').val() );

		var $infoPage = $('#info-page')
		$infoPage.animate({'right':'500px'},500, function(){
			$infoPage.addClass('hidden').css('right','0px');
		});

		$('#order-page').css('right','-500px').removeClass('hidden').animate({'right':'0px'},1000);
	}else {
		$('.inpt-grp-1').css('border','solid 1px red');
	}

})

$('.order-card').click(function(){
	var $orderPage = $('#order-page')
		$orderPage.animate({'right':'500px'},500, function(){
			$orderPage.addClass('hidden');
		});

		$('#thanks-page').css('right','-500px').removeClass('hidden').animate({'right':'0px'},1000);
})

$('.to-dashboard').click(function(){
	var $elems = $('body').children('div');
	$elems.each(function(i,obj){
		var $obj = $(obj);
		if( $obj.hasClass('dashboard') ){
			$(obj).removeClass('hidden');
		} else if ( !$obj.hasClass('hidden')  ){
			$obj.fadeOut('slow').addClass('hidden').fadeIn();
		}
	});
	$('body').css('background-image','none').css('background-color','rgb(220,220,220)');
})

$(window).resize(function(){
	$('.page-bound').css('width', $(window).width());
})


})