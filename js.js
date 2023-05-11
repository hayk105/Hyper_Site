
$(window).on('scroll', function() {
	var window_height_no_scroll = Number($("header").css("height").replace("px", ""))+ Number($("#main_section").css("height").replace("px", ""))+ Number($("footer").css("height").replace("px", ""))
	$(this).scrollTop()>window_height_no_scroll/2?$(this).scrollTop(window_height_no_scroll/2):''
})