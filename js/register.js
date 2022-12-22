$(document).ready(function(){
    $("#registerForm").validate({
        //修改sex和hobby错误位置信息
        errorPlacement: function(error, element) {
            if(element.is(":radio")){
                error.appendTo(element.parents("td#td1").next("td.status")); 
            }
            if(element.is(":checkbox")){
                if(element.attr("name") == "hobby"){
                    error.appendTo(element.parents("td#td2").next("td.status")); 
                }
                if(element.attr("name") == "agree"){
                    error.appendTo(element.parent().next("td.status")); 
                }
            }
            else{
                error.appendTo(element.parent().next("td.status")); 
            }
        },
        rules:{
            account: "required",
            psw1: {
                required: true,
                minlength: 6
            },
            psw2: {
                required: true,
                minlength: 6,
                equalTo: "#psw1"
            },
            phone: {
                required: true,
                minlength: 11,
                digits: true,
                min: 10000000000,
                max: 20000000000,
            },
            sex: "required",
            hobby: {
                required: true,
                minlength: 1
            },
            birthday:{
                required: true,
                minlength: 10
            },
            agree: "required"
        },
        messages:{
            account: " 请输入您的账号",
            psw1:{
                required: " 请输入您的密码",
                minlength: " 密码不得少于6位"
            },
            psw2:{
                required: " 请再次输入您的密码",
                minlength: " 密码不得少于6位",
                equalTo: " 两次密码输入不一致"
            },
            phone:{
                required: " 请输入您的手机号",
                minlength: " 请输入11位有效手机号",
                digits: " 请不要输入非数字字符哦",
                min: " 手机号应该1开头？？",
                max: " 手机号应该1开头？？"
            },
            sex: " 这是必选项哦",
            hobby: " 请至少选择一个呢",
            birthday: " 填了也没用但是有必要",
            agree: " 您必须同意上述协议"
        }
    });
    $("#register_btn").click(function(){
        if($("#registerForm").valid()){
            //$("#registerForm").submit();
            storage_val();
            setInterval(auto_skip, 1000);
        }
        else{
            return false;
        }
    });
    function input_val(){
		var now = new Date();
		var day = ("0" + now.getDate()).slice(-2);//格式化日，如果小于9，前面补0
		var month = ("0" + (now.getMonth() + 1)).slice(-2);//格式化月，如果小于9，前面补0
		var today = now.getFullYear()+"-"+(month)+"-"+(day);//拼装完整日期格式
		//对注册页赋值
        $("#account").val("admin");
        $("#psw1").val("123456");
        $("#psw2").val("123456");
        $("#phone").val("12345678900");
        $("input:radio:last").attr("checked", "true");
        $("input:checkbox").slice(0,3).attr("checked", "true");
		$("#birthday").val(today);
    }
    input_val();
    //本地存储注册信息
    function storage_val(){
        var s_account = document.getElementById("account").value;  //等价于$("#account").val();
        var s_psw = document.getElementById("psw2").value;
        localStorage.setItem(s_account, s_psw);
    }
    var counter = 1;
    function auto_skip(){
        $(".top").empty();
        $(".top").css("color","red");
        if (counter <= 0){
            location.href = "login.html";
        }
        else {
            $(".top").append("网页将在 " + counter + " 秒后自动跳转");
            counter--;
        }
    }
});	