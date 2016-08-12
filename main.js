/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***

=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
$('.alertme').click(function(){
  alert('jQuery seems easy so far!');
});

//2.
$('.clickme').click(function(){
  $(this).html('I was clicked');
});


//3.
$('.addStyle').click(function(){
  $('button').addClass('buttonStyle');
});

//4.
$('.addDifferentStyle').click(function(){
  $(this).addClass('addUniqueStyle');
});

//5.
$('.removeBtn').click(function(){
  $('button').removeClass();
});


//6.
$('.clickToggle').click(function(){
  $(this).toggleClass('buttonStyle');
});


//7.
$('.squareBtn').click(function(){
  $('.square').hide();
});

//.toggle() would hide then show

//8.
$('.circle').click(function(){
  $(this).hide();
});


//9.
$('.toggleRedSquare').click(function(){
  $('.redSquare').fadeOut(750, function(){
    $('.redSquare').fadeIn(750);
  });
});


//Alternate way:
// $('.toggleRedSquare').click(function(){
//   $('.redSquare').fadeOut(750);
//   $('.redSquare').fadeIn(750);
// });



});
