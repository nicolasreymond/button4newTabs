// ==UserScript==
// @name        What's app button
// @namespace   What's app button
// @description add button WHAT'S-APP
// @include     https://www.google.ch/
// @version     1
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==


this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {
  console.log("Début du script sur distrilog");

  var button = $("#gb").append('<button class = buttonCool >What\'s App Web</button>');
  $('button.buttonCool').click(function(e){
    e.preventDefault();
    window.open("https://web.whatsapp.com/"); 
    window.open("http://ewa.epfl.ch");    
  })
  $("#gb").css('background-color', '#FF0');
})


