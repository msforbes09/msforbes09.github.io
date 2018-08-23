$(function(){
//clear iframe
$(document).on('click','#clearIframe',function(){
	$('iframe').attr('src',"");
});
$('.iframeHolder').draggable({
	containment: '#main-section',
	handle: '.handle'
});
})