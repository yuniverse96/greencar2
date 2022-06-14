
//api호출
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var changeSlide = 1;
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'S67ED_rAzuA',
		playerVars: {
			'autoplay' : 1,
			'controls' : 0,
			'loop' : 1,
			'playlist' : 'S67ED_rAzuA',
			'rel' : 0,
			'mute' : 1,
			'modestbranding' : 1
		},
		events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	event.target.playVideo();
	$(".load_img").removeClass("hidden");
}


//API는 플레이어의 상태가 변경 될 때이 함수를 호출합니다.
function onPlayerStateChange(event) {
	
	playerState = event.data == YT.PlayerState.ENDED ? "종료됨":
					event.data == YT.PlayerState.PLAYING ? "재생중":
					event.data == YT.PlayerState.PAUSED ? "일시중지 됨":
					event.data == YT.PlayerState.BUFFERING ? "버퍼링중":
					event.data == YT.PlayerState.CUED ? "재생준비 완료됨":
					event.data == -1 ? "시작되지 않음" : "예외";

					//console.log('onPlayerStateChange 실행: ' + playerState);


	var state = player.getPlayerState();

	if(state == 1) {
		setTimeout(hiddenImg, 1500);
	}else{ //재생중이 아닌 모든상태
		openImg();
		player.seekTo(0);
	}

}

function hiddenImg() {
	$(".load_img").addClass("hidden");
}

function openImg() {
	$(".load_img").removeClass("hidden");
}






$(document).ready(function() {
	
		
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		navigation: true,   
		navigationPosition: 'right',
		showActiveTooltip: true,
		navigationTooltips: ['이동을 새로 그리다 그린카', '가까운 그린존', '경제적인 요금/쿠폰', '간편한 앱', '그린카 이용안내','이벤트','공지사항'],
		scrollHorizontally: true,
		css3:false,
		'afterLoad': function (anchorLink, index) {
			if ($(this).hasClass("test")){
				$("#header").addClass("white");
			}else{
				$("#header").removeClass("white");
			};

		
			//이벤트 페이지 목록 이벤트
			if(index == 6){
				var item = document.querySelectorAll('#event_list ul li');
				var cnt = 0; 

				function activeFunc(){
					item[cnt].classList.add('active');
					cnt++;    
					if(cnt >= item.length){
						clearInterval(addActive);
					}
				}
				var addActive = setInterval(activeFunc, 30);

			}else{
				$("#event_list ul li").removeClass("active");

			}

		},
		'onLeave' : function (index, nextIndex, direction){
			
			changeSlide = nextIndex;
			if (changeSlide == 1) {

				player.playVideo();
				
			}else if (changeSlide > 1){

				player.pauseVideo();

			}

			
			
		}	
	});

	var swiper = new Swiper(".greenSwiper", {
		spaceBetween: 30,
		effect: "fade",
		loop: true,
		autoplay: {
		  delay: 4000,
		  disableOnInteraction: false,
		  },
		  on: {
			  slideChange: function () {
				  //console.log(this.realIndex);
				  $("#page_wrap .pagenation ul li").removeClass("active");
				  $('#page_wrap .pagenation ul li').eq(this.realIndex).addClass("active")
			  }
		  }
	  });

	  $('#page_wrap .pagenation ul li').click(function(){
		  var pageIndex = $(this).index();
		  swiper.slideTo(pageIndex + 1);
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

	//공지사항 글자수에 따라 제거
	// var txt = $("#info_list ul li > h3").text();
	// var overTxt = txt.substring(0, 30);
	// console.log(overTxt);

	// $("#info_list ul li > h3").text(overTxt + "...")

	$('#info_list ul').find('li > h3').each(function(i,e){
		var allTxt = $(this).text();
		var txtLth =allTxt.length;
		if (txtLth > 30){
			var splitTxt = allTxt.substring(0, 30);
			var newTxt = splitTxt + "..."
			$(this).text(newTxt);
		}

    });


	

});