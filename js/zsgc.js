$(document).ready(function(){
    var namearray = ["陈渊博", "超音波", "搓衣板", "葱油饼", "抽烟不", "收手吧彦祖，建不动了"];
    $("#name").val(namearray[1]);
    $(".btn_create").click(function(){
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);//格式化日，如果小于9，前面补0
        var month = ("0" + (now.getMonth() + 1)).slice(-2);//格式化月，如果小于9，前面补0
        var today = now.getFullYear()+"/"+(month)+"/"+(day);//拼装完整日期格式
        var selector= "<input type='checkbox'>";
        var name = $("#name").val();
        var sex = $("input:radio:checked").val();
        var control = "<a><div class='btn_edit' onclick='edit(this)'>修改</div></a>"+
                        "<a><div class='btn_delete' onclick='del(this)'>删除</div></a>";
        var text0 = "<a><div class='tb'><div class='tb-head'><img src='../image/cyb.jpg'></div><div class='tb-line'>"+
                        "<span class='tb-name'>"+name+"</span><span class='tb-title'>唱 跳 rap 篮球</span></div>"+
                        "<div class='tb-p'>只因增删改查新增</div></div></a>"
        if ($(".table tbody tr").length >= 5) {
            alert("因为没时间加不会写翻页，因此设定了最多5条记录(悲)");
        }
        else {
            $(".table tbody").append(("<tr><td>"+selector+"</td><td class='num'>"+""+"</td><td class='name'>"+name+
                "</td><td class='sex'>"+sex+"</td><td class='date'>"+today+"</td><td class='control'>"+control+"</td></tr>"));
            $(".current-body").append(text0);
        }
        getid();
        
        
    })
    del = function(obj){
        var par = $(obj).parents("tr");
        var num = $(par).children(".num").text();
        var num0 = (Number(num)+1).toString();
        $(par).remove();
        $(".current-body a:nth-of-type("+num0+")").remove();
        getid();
    }
    all_del = function(){
        var trs = $(".table tbody input[type='checkbox']");
        for(var i = 0; i < trs.length; i++){    
            if(trs[i].checked)//如果hr被选中
            {
                del(trs[i]);
                // var par = $(trs[i]).parents("tr")
                // $(par).remove();
            }
        }
        getid();
    }
    edit = function(obj){
        var par = $(obj).parents(".control");
        var name = $(par).prevAll(".name").text();
        $(par).prevAll(".name").empty();
        $(par).prevAll(".sex").empty();
        $(par).empty();
        var newname = "<input type='text' id='newname' value='"+name+"'style='height: 30px; width: 120px;'>";
        var newsex = "<select id='newsex' style='height: 30px;'><option value='男'>男</option><option value='女'>女</option></select>";
        var newcontrol = "<a><div class='btn_confirm' onclick='confirm(this)'>确认</div></a>"+
                            "<a><div class='btn_delete' onclick='del(this)'>删除</div></a>";
        $(par).prevAll(".name").append(newname);
        $(par).prevAll(".sex").append(newsex);
        $(par).append(newcontrol);
    }
    confirm = function(obj){
        var newname = $("#newname").val();
        var newsex = $("#newsex").val();
        var par = $(obj).parents(".control");
        var newcontrol = "<a><div class='btn_edit' onclick='edit(this)'>修改</div></a>"+
                            "<a><div class='btn_delete' onclick='del(this)'>删除</div></a>";
        $(par).prevAll(".name").empty();
        $(par).prevAll(".sex").empty();
        $(par).empty();
        $(par).prevAll(".name").append(newname);
        $(par).prevAll(".sex").append(newsex);
        $(par).append(newcontrol);
    }
    function getid(){   //根据hr行号赋值id,给名字input赋值
        $("#name").val(namearray[$(".table tbody tr").length]);
        var tr = $(".table tbody tr");
        var num = $(".num");
        for (var i = 0; i < tr.length; i++){
            var index = tr[i].rowIndex;
            $(num[i]).text(index);
        }
    }
});