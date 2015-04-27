
$(document).ready(function(){

	$("#archives").click(function(){
		alert("Coming soon!");
	});

	$('#pin1').hover(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');
 		} else {
		$('.popover').addClass('popover-active');
		}
	});

	$('#pin6').hover(function(){
		if ($('.popover-6').hasClass('popover-active')) {
			$('.popover-6').removeClass('popover-active');
 		} else {
		$('.popover-6').addClass('popover-active');
		}
	});
});
