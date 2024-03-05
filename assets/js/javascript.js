$(document).ready(function() {
    var a = $(".navbar").offset().top;

    $(document).scroll(function(){
        if($(this).scrollTop() > a)
        {   
           $('.navbar').css({"background":"black"});
        } else {
           $('.navbar').css({"background":"none"});
        }
    });
});