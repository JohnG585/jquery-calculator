$(document).ready(function() {
  'use strict';

  const screen = $('#screen');
  let span = $('span');
  let equals = $('#equals');
  // let noOps = $('span:not[className = "operator"]');

  $('#clear').click(function() {
    screen.text('0');
    results.clear()
  });

  $('div.buttons').click('span:not("#clear"):not("#equals")',
      function() {
        const newStr = screen.text() + $(event.target).text();

        // console.log(newStr)
        screen.text(newStr);
      });

    equals.click(function() {
      try {
      let result = eval(screen.text().replace(/x/, '*').replace(/÷/, '/'));
      result = screen.text()+" = "+result;
      screen.text(result);
    }
      catch(e) {
        screen.text('ERROR');
      }
    })
  })
