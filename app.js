var main = function() {
  
  $(document).click(function() {
    $('.First').toggle();});

  $(document).keyup(function(event) {
  if(event.which === 39) {
   $('.righttop').animate({ "bottom": "+=10px" }, "slow"); }});
  
    $(document).keydown(function(event) {
  if(event.which === 39) {
   $('.righttop').animate({ "bottom": "-=10px" }, "slow"); }});
  
  $(document).keyup(function(event) {
  if(event.which === 37) {
   $('.lefttop').animate({ "bottom": "+=10px" }, "slow"); }});
  
    $(document).keydown(function(event) {
  if(event.which === 37) {
   $('.lefttop').animate({ "bottom": "-=10px" }, "slow"); }});
  
};

$(document).ready(main);