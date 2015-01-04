$(document).ready(function() {
	var move;
	var page = 0;
	var isMove = false;
	var temp1 = ""
	$("body").on('touchstart', function(event1) {
		event1.preventDefault();
		/* Act on the event */
		// var top = $(this).offset().top;
		var move1 = event1.targetTouches[0].pageY;
		$(this).on("touchmove", function(event2) {
			event2.preventDefault();
			move = event2.targetTouches[0].pageY - move1;
			// $(this).css("top",top+move)
			// console.log(move,top);
		})
	});
	$("body").on("touchend", function(event) {
		event.preventDefault();
		if (isMove) {
			return false
		};
		if (move < -30) {
			moveF(true);
		} else if (move > 30) {
			moveF(false);
		};
		if (page == 1) {
			$(".fall").addClass("a_fall");
			if (!$(".bee").hasClass("isIn")) {
				$(".bee").addClass("a_bee_in");
			};
			setTimeout(function() {
				$(".bee").removeClass("a_bee_in").css("left","0").addClass("isIn");
			}, 2000);
		} else if(page == 3){
			$(".meee").addClass("a_fall");
			$(".noo").addClass("a_chuxian");
		} else if (page == 4) {
			$(".bee5").addClass("a_beechuxian1");
			$(".huojian").addClass("a_huojian");
		};
		$("body").off("touchmove");
	});

	function moveF(state) {
		$(".content").removeClass("trsy" + page);
		if(state){
			page = page == 4 ? page : page + 1;
		}else{
			page = page == 0 ? page : page - 1;
		}
		$(".content").addClass("contain_t").addClass("trsy" + page);
		isMove = true;
		setTimeout(function() {
			isMove = false;
			$(".content").removeClass("contain_t");
		}, 1200);
		move = 0;
	};
});