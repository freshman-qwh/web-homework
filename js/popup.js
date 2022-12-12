$(document).ready(function(){
    $(".popup").hide();
    $(".bg").hide();
    $(".popup").animate({top:'-300px',opacity:'0'});
    // 点击按钮打开弹窗
    $("#pop_btn").click(function(){
            $(".popup").show();
            $(".popup").animate({top:'-100px',opacity:'1'});
            $(".bg").show();
    });
    // 点击 <span> (x), 关闭弹窗
    $(".close").click(function(){
        $(".popup").hide();
        $(".popup").animate({top:'-300px',opacity:'0'});
        $(".bg").hide();
    });

    // 在用户点击其他地方时，关闭弹窗
    $(".bg").click(function(){
        $(".popup").hide();
        $(".popup").animate({top:'-300px',opacity:'0'});
        $(".bg").hide();
    });
});
