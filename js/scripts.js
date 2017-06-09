$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    $("#result").empty();
    pingPong(input);
    //var output = pingPong(input);
    //$("#result").text(output);
  });
});

//backend
var pingPong = function(number) {
  for(var i = 1; i <= number; i++ ){
    if(i % 15 === 0) {
      $("#result").append("<li>pingpong</li>");
    } else if(i % 5 === 0) {
      $("#result").append("<li>pong</li>");
    } else if(i % 3 === 0) {
      $("#result").append("<li>ping</li>");
    } else {
      $("#result").append("<li>" + i + "</li>");
    }
  }
}
