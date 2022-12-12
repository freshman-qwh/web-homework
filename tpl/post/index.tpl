<link rel="stylesheet" type="text/css" href="../../css/tpl.css">
<table class="table">
  <thead>
    <tr>
        <th>选中</th>
        <th>编号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>创建日期</th>
        <th>操作</th>
    </tr>
  </thead>
  <tbody>
  <% data.forEach(function(post){ %>   
    <tr>
      <td><input type="checkbox"></td>
      <td><%= post.id %></td>
      <td>陈渊博</td>
      <th>男</th>
      <th><%= post.created_at %></th>
      <td>
        <a href="#/posts/<%= post.id %>/edit"><div class="btn_edit">修改</div></a>
        <a href="#/posts/<%= post.id %>/delete"><div class="btn_delete">删除</div></a>
      </td>
    </tr>
  <% }) %>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="6">
        <a href=""><div class="btn_all_delete">删除选中</div></a>
        <a href="#/posts/new"><div class="btn_create">新建</div></a>
      </td>
    </tr>
  
  </tfoot>
  
</table>





  