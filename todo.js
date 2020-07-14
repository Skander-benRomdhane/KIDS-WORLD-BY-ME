$( document ).ready(function() {
    $("#inc").on("click", function() {
        var txt = $("input").val();
        if( txt !== '') {
            var newElement = $("<li></li>").text(txt);
            $(newElement).append("<button class='remove'>Remove</button>");
            $("#todoList").append(newElement);
            $("input").val("");
            $(newElement).css({"font-size": "150%",'font-style': 'italic'})
            // $('.remove').css({'background','white'})
            // $(newElement).css({'color':'#4d79ff'})
            $(".remove").on("click", function(){
             $('.remove').hide();
             $(newElement).hide()
            });
        } else if (txt === '') {
            alert(' You should add a task!')
        }
    });
});