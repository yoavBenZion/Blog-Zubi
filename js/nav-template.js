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

/*

$(".ninja-btn").click( function() {
  $(this).toggleClass("active");
});
*/
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