$("document").ready(function(){
    $("h1").show();
    $("#carrete").hide();
});

$(document).on("click", function(){
    $("h1").hide();
    $("#carrete").show();
});

$("#carrete img").hover(function(){
    $(this).attr("width", "300");
}, function(){
    $(this).attr("width", "250");
});