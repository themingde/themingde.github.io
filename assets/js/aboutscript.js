
$(document).ready(function(){

	$("#archives").click(function(){
		alert("Coming soon!");
	});

	$('#button').click(function(){
		if ($('.popover').hasClass('popover-active')) {
			$('.popover').removeClass('popover-active');
 		} else {
		$('.popover').addClass('popover-active');
		}
	});
});
