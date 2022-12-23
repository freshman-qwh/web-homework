<link rel="stylesheet" type="text/css" href="../../css/detail.css">
<% data.forEach(function(post){ %>
    <a href="<%= post.home %>">
        <div class="tb">
            <div class="tb-head">
                <img src="<%= post.img %>">
            </div>
            <div class="tb-line">
                <span class="tb-name"><%= post.name %></span>
                <span class="tb-title"><%= post.trait %></span>
            </div>
            <div class="tb-p">
                <%= post.signature %></div>
    </div></a>
<% }) %>