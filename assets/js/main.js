$( document ).ready(function() {
    $("#content").load("./pages/homePage.html");
    $(".link-navbar").click(function(evt){
        changePages($(this).attr("id"));
    });
});