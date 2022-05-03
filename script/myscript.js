
// script of all pages
$(function() {

// start onload the page get started from the top

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
		"use strict";
        window.scrollTo(0, 0);
    };
}

// end onload the page get started from the top

// start on hover in the area of the title

$(".home-section1 div").hover(function(){
   
    $(".home-section1 div").addClass("hidden-title");
    $(this).removeClass();
   // $(".section1 div h1").css("opacity", "0.7");
})
$(".home-section1 div").on("mouseleave", function(){
    $(".home-section1 div").removeClass("hidden-title");
})

// end on hover in the area of the title

// start auto writing the sentence in home section 2
function animateWithText(){
    var text = $(".home-section2 h3, .filmmaking-section2 h3, .allMyWorks-section2 h3, .programmer-section2 h3, .allMyWorks h3").data('content'),
    words = text.length,
    n = 0,
    
    writingText = setInterval(function(){
            $(".home-section2 h3, .filmmaking-section2 h3, .allMyWorks-section2 h3, .programmer-section2 h3, .allMyWorks h3").each(function(){
                
        //$(this).text().css("marginTop", "5px");
        $(this).text($(this).html() + text[n]);
        n += 1;
        
        if( n >= words) {
            clearInterval(writingText);
            //$(".home-section2 h3").text("");
           
             setTimeout(() => {
                $(".home-section2 h3, .filmmaking-section2 h3, .allMyWorks-section2 h3, .programmer-section2 h3, .allMyWorks h3").text("");
                clearInterval(writingText);
                animateWithText();
             }, 3000);
           
            } // if
            else{
               // clearInterval(writingText);
            }
      

            }) // each
            
         }, 200); // setInterval
        
        } // function
    //animateWithText();
// end auto writing the sentence in section 2

// start on scroll

$(window).on("scroll", function (){
    var sc = $(window).scrollTop();

    // header change showing
if(sc < 50){
    $(".header").removeClass("fixed-header");
    // hide arrow to scroll to top
    $("#arrow-button").addClass("hide-arrow-button");
    $("#arrow-button").css("display", "none");
}
if( sc > $(".header").offset().top + 100){
    $(".header").addClass("fixed-header");
    // show arrow to scroll to top
    $("#arrow-button").css("display", "block");
    $("#arrow-button").removeClass("hide-arrow-button");
}

// home section 2 change showing

if(sc > $(".home-section1").offset().top + 20){
    $(".home-section2").addClass("show-section2");
}

// home section 3 change showing
if(sc > $(".home-section2").offset().top + 20){
    $(".home-section3").addClass("show-section3");
}

for(var i=0;i< 360; i++){
    $(".show-section2 article div:nth-of-type(" + i  + ")").css("animation-delay", (i*0.5) + 's');
        }
    
})  // end on scroll


// start show and close burger 
$(".show-burger").on("click", function(){
    $(".inside-burger").removeClass("hide-inside-burger").addClass("show-inside-burger");

    $(this).addClass("hide-show-and-close-burger");

    setTimeout(() => {
        $(this).hide();
         $(".close-burger").removeClass("hide-show-and-close-burger");
        $(".close-burger").css("display", "block");
    }, 500);
   }) // click

   $(".close-burger").on("click", function(){
    $(".inside-burger").addClass("hide-inside-burger");

    $(this).addClass("hide-show-and-close-burger");

    setTimeout(() => {
        $(this).hide();
        $(".show-burger").removeClass("hide-show-and-close-burger");
        $(".show-burger").css("display", "block");
    }, 500);
   }) // click
// end show and close burger 

// start show film and prog works onclick 
$(".all-works-inside-burger").on("click", function(){
    if($(".all-works, .filmmaking-works, .programmer-works").hasClass("show-works")){
        $(".all-works, .filmmaking-works, .programmer-works").addClass("hide-works");
       
        setTimeout(() => {
            $(".all-works, .filmmaking-works, .programmer-works").removeClass("show-works");
            $(".arrow-right").show();
        $(".arrow-down").hide();
        }, 500);
    }
    else{
        $(".all-works, .filmmaking-works, .programmer-works").addClass("show-works").removeClass("hide-works");
        $(".arrow-right").hide();
        $(".arrow-down").show();
    }
    //$(".filmmaking-works, .programmer-works").toggleClass("show-works");
})
// end show film and prog works onclick 


// start scroll to top onclick on arrow
$("#arrow-button").on("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

// end scroll to top onclick on arrow
animateWithText();
}) // ready