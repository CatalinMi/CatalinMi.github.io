$(window).scroll(function() {
	if ($(this).scrollTop() > ($(window).height() * 0.3)) {
		$("nav").addClass("fixedNavBar");
	}
	else {
		$("nav").removeClass("fixedNavBar");
	}
});

$(document).ready(function() {
	$(".navUl li a").mouseover(function() {
		$(this).css({"color":"white"});
	});
	$(".navUl li a").mouseleave(function() {
		$(this).css({"color":"#e9ecef"});
	});
	
	$(".containerOfSectionTitle").mouseover(function() {
		$(this).css({"border":"5px solid black", "backgroundColor":"orange"});
		$(this).children().css({"color":"black"});
	});
	$(".containerOfSectionTitle").mouseleave(function() {
		$(this).css({"border":"5px solid orange", "backgroundColor":"transparent"});
		$(this).children().css({"color":"orange"});
	});
	
	$(".imagFromSections").hide();
});

