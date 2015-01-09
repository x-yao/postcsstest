$(document).ready(function() {
	var move;
	var page = 0;
	var isMove = false;
	var temp1 = "";
	var state = 2;
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
		var done = $(".a_onload").attr("load-done");
		if (isMove||(!done)) {
			return false
		};
		state = $(".part"+(page+1)).attr("ani-state");
		if (move < -30) {
			if (state == 2) {
				moveF(true);
			}else if (state == 0 && page != 4) {
				$(".word_p"+page).find(".word_ani_1").removeClass("a_word_in").addClass("a_word_out");
				$(".word_p"+page).find(".word_ani_2").removeClass("a_word_out").addClass("a_word_in");
				$(".part"+(page+1)).attr("ani-state",2);
				$(".part"+(page+1)).find(".zhangzi1").addClass("a_zhangzi1");
				$(".part"+(page+1)).find(".zhangzi2").addClass("a_zhangzi2");
				state = state+1;
				isAni(1500);
			}
		} else if (move > 30) {
			if (state == 2 && page !=0) {
				$(".word_p"+page).find(".word_ani_1").removeClass("a_word_out").addClass("a_word_in");
				$(".word_p"+page).find(".word_ani_2").removeClass("a_word_in").addClass("a_word_out");
				$(".part"+(page+1)).attr("ani-state",0);
				isAni(1500);
			}else if (state == 0) {
				moveF(false);
			};
		};
		if (page == 1) {
			$(".fall").addClass("a_fall");
			if (!$(".bee").hasClass("isIn")) {
				$(".bee").addClass("a_bee_in");
			};
			setTimeout(function() {
				$(".bee").removeClass("a_bee_in").css("left", "0").addClass("isIn");
			}, 2000);
			wordIn();
		}else if (page == 2){
			wordIn();
		} else if (page == 3) {
			$(".meee").addClass("a_fall");
			$(".noo").addClass("a_chuxian");
			// $(".part4").addClass("a_znyx");
			wordIn();
		} else if (page == 4) {
			$(".bee5").addClass("a_beechuxian1");
			$(".huojian").addClass("a_huojian");
			$(".fenxiang").addClass("a_fenxiang");
		};
		$("body").off("touchmove");
	});
	function wordIn(){
		setTimeout(function(){
			$(".word_p"+page).find(".word_ani_1").addClass("a_word_in");
			// isAni(1500);
		},1200)
	};
	function isAni(time){
		isMove = true;
		setTimeout(function(){
			isMove = false;
		},time);
	}
	function moveF(state) {
		$(".content").removeClass("trsy" + page);
		if (state) {
			page = page == 4 ? page : page + 1;
		} else {
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
	var rsp = {
		"TenantId": 100102,
		"UserId": 100908914,
		"IsCount": 1,
		"CountTime": "/Date(1419496643740+0800)/",
		"InitTime": "/Date(1419496545253+0800)/",
		"Job_CreateDutyCount": 11,
		"Job_CreateCount": 12,
		"Job_FinishCount": 0,
		"Job_FirstCreateTime": "/Date(1392186925777+0800)/",
		"Channel_PassFirstPhaseChannelName": "asdf",
		"Channel_ResumeCount": 98,
		"Channel_ResumeMaxChannelName": "asdf",
		"Channel_CreateLightboltTime": "/Date(1401933752177+0800)/",
		"Resume_ReceiveFemaleResumeCount": 3528,
		"Resume_ReceiveMaleResumeCount": 5874,
		"Resume_ReceiveResumeCount": 22547,
		"Resume_ReceiveYoungResumeCount": 2759,
		"Resume_TransferPhaseResumeCount": 183,
		"Interview_CreateCount": 29,
		"Interview_LastInterviewTime": 29,
		"Interview_TopOfficerList": "fushanshan,航哥,徐东",
		"Offer_SendCount": 2,
		"Offer_RefuseCount": 1
	};
	function iniDate(date){
		var a = +date.match(/\d+/);
		var b = new Date(a);
		// debugger
		var dateData = {
			"day" : b.getDate(),
			"mon" : b.getMonth()	
		};
		return dateData
	};
	var data = {
		"firstTime" : iniDate(rsp.Job_FirstCreateTime),
		"Job_CreateCount" : rsp.Job_CreateCount,
		"Job_FinishCount":rsp.Job_FinishCount,
		"Job_CreateDutyCount":rsp.Job_CreateDutyCount,
		"Channel_ResumeCount":rsp.Channel_ResumeCount,
		"Resume_ReceiveResumeCount":rsp.Resume_ReceiveResumeCount,
		"lightboltTime":iniDate(rsp.Channel_CreateLightboltTime),
		"Channel_ResumeMaxChannelName":rsp.Channel_ResumeMaxChannelName,
		"Channel_PassFirstPhaseChannelName":rsp.Channel_PassFirstPhaseChannelName,
		"Interview_CreateCount":rsp.Interview_CreateCount,
		"Offer_SendCount":rsp.Offer_SendCount,
		"Offer_RefuseCount":rsp.Offer_RefuseCount,
		"Resume_TransferPhaseResumeCount":rsp.Resume_TransferPhaseResumeCount
	};
	var firstTime = iniDate(rsp.Job_FirstCreateTime);
	var tempP1 = "<div class='word_ani_1'><p><strong class='word_date'><span class='num'><%=firstTime.mon%></span>月<span class='num'><%=firstTime.day%></span>日</strong> 创建了第一个职位</p></div>"
				+"<div class='word_ani_2'><p>负责了<span class='num'><%=Job_CreateDutyCount%></span>个职位</p>"
				+"<p>完成了<span class='num'><%=Job_FinishCount%></span>个职位</p></div>";
	var tempP2 ="<div class='word_ani_1'><p>共收到了<span class='num'><%=Channel_ResumeCount%></span>个简历</p>"
				+"<p><span class='str'><%=Channel_ResumeMaxChannelName%></span>渠道的的简历最多</p>"
				+"<p><span class='str'><%=Channel_PassFirstPhaseChannelName%></span>渠道通过初筛的最多</p></div>"
				+"<div class='word_ani_2'><p><strong class='word_date'><span class='num'><%=lightboltTime.mon%></span>月<span class='num'><%=lightboltTime.day%></span>日 </strong>开启了移动招聘</p></div>";
	var tempP3 ="<div class='word_ani_1'><p>筛选了<span class='num'><%=Resume_TransferPhaseResumeCount%></span>个简历</p>"
				+"<p>安排了<span class='str'><%=Interview_CreateCount%></span>个面试</p></div>"
				+"<div class='word_ani_2'><p>发送了<span class='num'><%=Offer_SendCount%></span>个offer</p>"
				+"<p>被拒了<span class='num'><%=Offer_RefuseCount%></span>个offer</p></div>";

	var tp1 = _.template(tempP1);
	$(".word_p1").html(tp1(data));
	var tp2 = _.template(tempP2);
	$(".word_p2").html(tp2(data));
	var tp3 = _.template(tempP3);
	$(".word_p3").html(tp3(data));

});