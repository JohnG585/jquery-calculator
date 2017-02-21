$(document).ready(function() {
    'use strict';

    const screen = $('#screen');
    let span = $('span');
    let equals = $('#equals');
    // let noOps = $('span:not[className = "operator"]');

    $('#clear').click(function() {
        screen.text('');
    });

    $('div.buttons :not(#equals)').click(function() {

        let btnID = $(this).attr('id');
        if (btnID === 'clear') {
            screen.text('');
        } else {
            const newStr = screen.text() + $(event.target).text();

            console.log(newStr)
            screen.text(newStr);
        }
    });

    equals.click(function() {
        try {
            let result = eval(screen.text().replace(/x/, '*').replace(/÷/, '/'));
            console.log("result is", result);
            screen.text(result);
        } catch (e) {
            screen.text('ERROR');
        }
    })
})
