/*global document, $*/


$(document).ready(function () {
    
    'use strict';
    
     //nice scroll
    $("html").niceScroll();
    
    //smooth scroll to div
    
    $('.nav li a').click(function () {
        
       
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
   
});
