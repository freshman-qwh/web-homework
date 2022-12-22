$(document).ready(function(){

    if($.cookie("status") == undefined){    //借助cookie来检测登陆状态
        $.cookie("status", "offline");
    }

    $("#loginForm").validate({
        //修改错误位置信息
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().next("td.status")); 
        },
        rules:{
            account: "required",
            psw: {
                required: true,
                minlength: 6
            }
        },
        messages:{
            account: " 请输入您的账号",
            psw:{
                required: " 请输入您的密码",
                minlength: " 密码不会少于6位"
            }
        }
    });
    $("#login_btn").click(function(){
        if($("#loginForm").valid()){
            var s_account = $("#account").val();
            var s_psw = $("#psw").val();
            if(localStorage.getItem(s_account) == s_psw && $.cookie("status") == "offline"){
                $.cookie("status", "online");
                setInterval(auto_skip, 1000);
            }
            else if($.cookie("status") == "online"){     //cookie判断用户是否已经登录
                alert("用户 admin 已经登陆,将直接为您跳转嘉宾页");
                setTimeout(location.href = "male.html", 1000);
            }
            else {
                alert("账号不存在，请先去注册");
                setTimeout(location.href = "register.html", 1000);
            }
            //$("#loginForm").submit();
        }
        else {
            return false;
        }
    });
    function input_val(){
		//对注册页赋值
        $("#account").val('admin');
        $("#psw").val('123456');
	}
    input_val();
    var counter = 3;
    function auto_skip(){
        $(".top").empty();
        $(".top").css("color","red");
        if (counter <= 0){
            location.href = "male.html";
        }
        else {
            $(".top").append("网页将在 " + counter + " 秒后自动跳转");
            counter--;
        }
    }
});	