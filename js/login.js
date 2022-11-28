$(document).ready(function(){
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
            $("#loginForm").submit();
        }
        else{
            return false;
        }
    });
});	