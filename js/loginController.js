$(function() {
	$("#rememberMeLabel").click(function() {
		if ($("input[type='checkbox']").prop("checked") == true) {
			$(".circle").animate({
				left: "0px"
			}, 300, 'swing');
		} else {
			$(".circle").animate({
				left: "75px"
			}, 300, 'swing');
		}
	});
	
	$("#user").focus(function() {
		$(this).css("color", "black");
		$(this).val(($(this).val() == "不能为空" || $(this).val() == "无此用户" ? "" : $(this).val()));
	});
	
	$("#password").focus(function() {
		$(this).css("color", "black");
		$(this).val("");
		$(this).attr("type", "password");
	});
	
	$("#user").blur(function() {
		if ($(this).val() == "") {
			$(this).val("不能为空").css("color", "red");
			if ($(this) == $("#password")) {
				$(this).attr("type", "text");
			}
		}
	});
	
	$("#password").blur(function() {
		if ($(this).val() == "") {
			$(this).val("不能为空").css("color", "red");
			$(this).attr("type", "text");
		}
	});
	
	$(".regist").click(function() {
		location.href = "module/regist.html";
	});
	
	$(".loginButton").click(function() {
		if ($("#user").val() == "" || $("password").val() == "") {
			alert("用户名或密码为空");
		} else {
			$.ajax({
				url: 'api/userController.php',
				data: {
					phone: $("#user").val(),
					password: $("#password").val(),
					q: "personLogin"
				},
				type: 'post',
				datatype: 'json',
				success: function(data) {
					data = eval('(' + data + ')');
					if (data.result == "success") {
						location.href = "module/mainPage.html";
					} else if (data == "passwordWrong") {
						$("#password").attr("type", "text").val("密码错误").css("color", "red");
					} else if (data == "noThisUser") {
						$("#user").val("无此用户").css("color", "red");
					} else {
						
						alert(data.result);
					}
				}
			});
		}
	});
});