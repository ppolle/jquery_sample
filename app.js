function addRow() {
  $("table").append("<tr><td  class='editable'' style='text-align: right'>" +

     "</td><td  class='editable'></td><td></td><td><a href='#' onclick='addRow()'>" +
       "<span class='glyphicon glyphicon-plus' aria-hidden='true'></a>" +
       "<a href='#' onclick='d_Row(this)'><span class='glyphicon glyphicon-trash' aria-hidden='true'>" +
        "</span></a><a href='#' onclick='editRow(this)'><span class='glyphicon glyphicon-pencil' aria-hidden='true'>" +
        "</span></a></td></tr>");
}

function d_Row(){
  $("a").click(function(){
   $(this).closest("tr").remove();
  });

}
function editRow(c_edit){
    $(c_edit).parent().parent().children('td:nth-child(1),td:nth-child(2),td:nth-child(3)').attr("contenteditable",true);
}