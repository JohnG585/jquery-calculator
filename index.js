$(document).ready(function() {
  'use strict';

  const screen = $('#screen');
  let var1 = '';
  let var2 = '';
  let total = '';
  let oper = '';
  let span = $('span');
  total = 0;

  span.click(function() {
// use event.target & specify "the" button
// use .not() for :first child & :last-child;
// setEventListener for Clear & equals
  // let tex=$(event.target).text();
    $('#clear').click(function() {
      screen.text('');
    });
    if (!'span:[id="clear"]'|| !'span:[id="equals"]') {
      screen.text();
    }
    if (oper === '+') {
      total = var1 + var2;
    }
    else if (oper === '-') {
      total = var1 - var2;
    }
    else if (oper === '*') {
      total = var1 * var2;
    }
    else if (oper === '/') {
      total = var1 / var2;
    }
  })
  })
