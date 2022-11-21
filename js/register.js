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
             $("#registerForm").submit();
        }
        else{
            return false;
        }
    });
});	
        // $.cookie('psw', psw1, { expires: 7 });  // 创建cookie, 7天后过期
        // psw=$.cookie('psw');     // 读取cookie
        // console.log("psw=" + psw);
        // //$.removeCookie('name');		// 删除cookie