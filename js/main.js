$(document).ready(function(){
    if($.cookie("online") == undefined){    //借助cookie来检测网站是否第一次被打开
        $.cookie("online", "0");
        localStorage.removeItem("admin");   //删除本地账号
    }
    $("#detail").click(function(){
        if ($.cookie("online") == "0"){
            $.cookie("online", "1");
            alert("账号未登录,将为您直接跳转至登录页面");
            location.href = "login.html";
        }
        else {
            location.href = "male.html";
        }
    });
});