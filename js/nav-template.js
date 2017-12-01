/*This is the Main Article NAV.js template page.
If you want to use this page, follow this instractions.

if you want to use it without making changes you can just link to it (:

1.Create a new template, and give it your 
Article-name-nav.js and link it to your article page.


2.folow the coomments in the code, and make your personal cahnges.

If you have any question conatact Yoav Benzion.

Please don't make any changes to this page!!
Thank you !!
*/

$(document).ready(function() {
    $('div code').each(function(i, block) {
        hljs.highlightBlock(block);

    });
    $('div pre').each(function(i, block) {
        hljs.highlightBlock(block);
    });


});

var is = false;

$(".ninja-btn").click(function () {
    if (is == false) {
        $(this).toggleClass("active");
        is = true;
        $('.box1 ul .text').fadeOut(0);
        $('.box1 ul .menu').fadeIn(200);

    } else if (is == true) {
        is = false;
        $(this).toggleClass("active");
        console.log('close');
        $('.box1 ul .text').fadeIn(200);
        $('.box1 ul .menu').fadeOut(0);
    }
});

/*Img click on example - switch the id's of the big and small*/

//es6 img's
$("#imgSmallError").click(function(){		                                        $("#imgBigError").attr("src","./img/const-error-location.png");
    $("#overlay").show();
    $("#overlayContent").show();
    $("#imgSmallError").hide();
});

$("#imgBigError").click(function(){
    $("#imgBigError").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
    $("#imgSmallError").show();
});

//dom img's - html img 1
$("#imgSmallhtml").click(function(){		                    $("#imgBightml").attr("src","./img/dom-art.png");
    $("#overlay").show();
    $("#overlayContent").show();
    $("#imgSmallhtml").hide();
});

$("#imgBightml").click(function(){
    $("#imgBightml").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
    $("#imgSmallhtml").show();
});

/*Dom Diagram - img 2*/

$("#imgSmallDgrm").click(function(){		                    $("#imgBigDgrm").attr("src","./img/dom-diagram.png");
    $("#overlay1").show();
    $("#overlayContent1").show();
    $("#imgSmallDgrm").hide();
});

$("#imgBigDgrm").click(function(){
    $("#imgBigDgrm").attr("src", "");
    $("#overlay1").hide();
    $("#overlayContent1").hide();
    $("#imgSmallDgrm").show();
});

//Traversing img - img 3

$("#imgSmallTrv").click(function(){		                    $("#imgBigTrv").attr("src","./img/dom-traverse.png");
    $("#overlay2").show();
    $("#overlayContent2").show();
    $("#imgSmallTrv").hide();
});

$("#imgBigTrv").click(function(){
    $("#imgBigTrv").attr("src", "");
    $("#overlay2").hide();
    $("#overlayContent2").hide();
    $("#imgSmallTrv").show();
});



