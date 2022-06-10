$(document).ready(function() {


	
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		navigation: true,   
		navigationPosition: 'right',
		showActiveTooltip: true,
		navigationTooltips: ['이동을 새로 그리다 그린카', '가까운 그린존', '경제적인 요금/쿠폰', '간편한 앱', '그린카 이용안내','이벤트','공지사항'],
		scrollHorizontally: true,
		'afterLoad': function () {
			if ($(this).hasClass("test")){
				$("#header").addClass("white");
			}else{
				$("#header").removeClass("white");
			}
		},	
	});


	$("#header .nav .menu .tabs > ul .tab_box").on("mouseover", function(){
		$("#header .nav .menu .tabs > ul .tab_box").removeClass("on");
		$("#header").addClass("on");
        $(this).addClass("on")
	});

	$("#header").mouseleave(function () {
		$("#header").removeClass("on");
		$("#header .nav .menu .tabs > ul .tab_box").removeClass("on");
	});


	

});