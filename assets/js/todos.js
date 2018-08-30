//Check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("finished");
});

// X button todo deletion functionality
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  e.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){
    //grabbing todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
  }
});

$("#plus").click(function(){
  $("input[type = 'text']").fadeToggle();
});
