$(document).ready(function(){
  $("#textInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#ColTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});