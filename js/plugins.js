

$(function () {

    'use strict';
  
    $('.carousel').carousel({
        interval: 3000
      })
    // Start Ticker
   
    $("#demo1").kxbdMarquee({
        direction: "right"
    });
    $("#demo2").kxbdMarquee({
        isEqual: false

    });
    $("#demo3").kxbdMarquee({
        direction: "down"
    });
    $("#demo4").kxbdMarquee({
        direction: "up",
        isEqual: false
    });

   
   
})
//------------------