// For the modal boxes
$(document).ready(function(){
  $('.modal').modal();
});

// To show the amount of characters in textareas
$(document).ready(function() {
  $('input#input_text, textarea#textarea1, textarea#textarea2, textarea#textarea3, textarea#textarea4, textarea#textarea5, textarea#textarea6').characterCounter();
});

// For the images
$(document).ready(function() {
  $('.materialboxed').materialbox();
});
