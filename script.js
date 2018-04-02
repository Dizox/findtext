$(document).ready(function(){
    var getSelectedText = function() {
        var text = '';
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection) {
            text = document.selection.createRange().text;
        }
        return text;
    }

    let container = document.querySelectorAll("div");
    console.log(container[0]["textContent"]);
    let newContainer = [];
    let result = [];
    let arr = [];
    let str = '';
    let k = 0;

    for (let i = 0; i < container.length; i++){
        newContainer[i] = container[i]["textContent"];
    }
    console.log(newContainer);

    for(let i = 0; i < newContainer.length; i++){
        result[i] = newContainer[i].split(/\s+/);
    }
    console.log(result[0][1]);
    result[result.length - 1] = [];


    $("#go").click(function(){
        var word = $("#find").val();
        for(let i = 0; i < result.length; i++){
            for(let j = 0; j < result[i].length; j++){
                if(word == result[i][j]){
                    k++;
                }
            }
        }
        $(".answer").empty();
        $(".answer").prepend(k);
        k = 0;
        if (typeof word != "undefined")
        {
            $("span").css({'color' : "#000"});
            var newHtml = $('.text').html().toString();
            console.log(newHtml);
            var regex = new RegExp("\\s" + word + "\\s", 'g');
            newHtml = newHtml.replace(regex, "<span style='color:red'> "+word+" </span>");
            $('.text').html(newHtml);
        }
    })

    $('.text').mouseup(function () {
        var text = getSelectedText();
        if (typeof text != "undefined")
        {
            $("span").css({'color' : "#000"});
            var newHtml = $('.text').html().toString();
            console.log(newHtml);
            var regex = new RegExp("\\s" + text + "\\s", 'g');
            newHtml = newHtml.replace(regex, "<span style='color:red'> "+text+" </span>");
            $('.text').html(newHtml);
        }
    })

    function getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        } else if (document.selection) {
            return document.selection.createRange().text;
        }
        return '';
    }
})
