/* Exercise 1: Wish list */

function addToList(item) {
  $("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");
}

$("document").ready(function() {

  $("#add-to-list").click(function() {
    addToList( $("#item").val() );
    $("#item").val("");
    $("#item").focus();
  });
});

