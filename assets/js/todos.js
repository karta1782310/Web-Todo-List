// Check off specific todo by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "li span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    // Stop li to start toggleClass because span is in li.
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li>"+todoText+"<span>X</span></li>");
    }
});