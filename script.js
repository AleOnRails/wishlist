/* Exercise 1: Wish list */

function addToList(item) {
  $("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");

  $(".pending").on("click", function(){
    var p = $(this).parent();
    p.addClass("completed");
    $(this).remove();
    p.append("<span class='label success'>Done!</span>");

    updateTotal();
  });

  if($("li").length >= 1)
    updateTotal();
}


function updateTotal() {
  var pending = $(".pending").length;
  var completed = $(".completed").length;
  $(".total").text("Pending: " + pending + " Completed: " + completed);
}


$("document").ready(function() {

  $("#add-to-list").click(function() {
    addToList( $("#item").val() );
    $("#item").val("");
    $("#item").focus();
  });

});
