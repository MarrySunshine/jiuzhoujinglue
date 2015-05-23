var week = new Array(7);
week[0] = "星期天";
week[1] = "星期一";
week[2] = "星期二";
week[3] = "星期三";
week[4] = "星期四";
week[5] = "星期五";
week[6] = "星期六";
$(function() {
	timeRefresh();
	setInterval("timeRefresh()", 30000);
	$(".viewSelector").click(function() {
		var page = $(this).attr("page");
		var str = "module" + page + ".html";
		$(".content").load(str);
	})
});

function timeRefresh() {
	var d = new Date();
	var str = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) + ', ' + week[d.getDay()] + ", " + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
	$(".date").html(str);
}