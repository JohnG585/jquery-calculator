$(document).ready(function() {
  'use strict';

  const screen = $('#screen');
  let span = $('span');
  let equals = $('#equals');

  $('#clear').click(function() {
    screen.text('0');
  });

      $('div.buttons').click(('span:not([class="operator"])'),
      function(event) {

        let newStr = screen.text() + $(event.target).text();
        console.log(newStr)
        screen.text(newStr)
      });

    equals.click(function() {
      try {
      let result = eval(screen.text().replace(/x/, '*').replace(/÷/, '/'));
      screen.text(result);
    }
      catch(e) {
        screen.text('ERROR');
      }
    })
  })
