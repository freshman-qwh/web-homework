<link rel="stylesheet" type="text/css" href="../../css/profilestyle.css">
<% data.forEach(function(post){ %>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><%= post.name %>的小屋</title>
    </head>

    <body>
        <div class="top">
            <a style="text-decoration:none" href="../else.html">&lt返回</a>
            <div style="text-align: center; font-size: 2rem; font-weight: bolder;">个人介绍</div>
        </div>
        <div class="middle">
            <div class="left"></div>
            <div class="center">
                <div class="grid-profile">
                    <div class="item1"><label>姓名：</label><%= post.name %></div>
                    <div class="item2"><label>性别：</label><%= post.sex %></div>
                    <div class="item3"><label>年龄：</label><%= post.age %></div>
                    <div class="item4"><label>籍贯：</label><%= post.local %></div>
                    <div class="item5"><img src="<%= post.img %>"></div>
                    <div class="item6"><label>身高：</label><%= post.height %><label>cm</label></div>
                    <div class="item7"><label>体重：</label><%= post.weight %><label>kg</label></div>
                    <div class="item8"><label>兴趣爱好：</label><%= post.hobby %></div>
                    <div class="item9"><label>个性签名：</label><%= post.signature %></div>
                    <div class="item10"><a href="<%= post.web %>">《他的网页》</a></div>
                </div>
            </div>
            <div class="right"></div>
        </div>
        <div class="bottom"></div>
    </body>
<% }) %>