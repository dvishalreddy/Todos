$("ul").on("click","span",function(){
    $(this).parent().addClass("completed");
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
})
$('#addNew').keypress(function(event){
    if(event.which===13){
        let newTodo = $(this).val();
        $('ul').append("<li><span><img src=\"assets/imgs/icons8-white-circle-48.png\" style=\"height: 30px; width: 30px;\"></span> "+newTodo+"</li>");
        $(this).val("");
    }
})
var count=0;
$('#mode').on("click",function(){
    $("body").toggleClass("nightMode");
    $("body").toggleClass("nightModeContainer");
    if(count==0){
        $(this).attr("src","assets/icons/icons8-crescent-moon-100-2.png");
        count=1;
    }
    else{
        $(this).attr("src","assets/icons/icons8-sun-100.png");
        count=0;
    }

})