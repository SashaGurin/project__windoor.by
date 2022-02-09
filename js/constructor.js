function valRange1() {
    var r1 = $('#range1').val();
    $('.range1Val').text(r1);
}

function valRange2() {
    var r2 = $('#range2').val();
    $('.range2Val').text(r2);
}

function valRadio1() {
    var a1 = $('#question1_1').val();
    $('.valRad1').text(a1);
}

function valRadio2() {
    var a2 = $('#question1_2').val();
    $('.valRad1').text(a2);
}

function valRadio3() {
    var a3 = $('#question1_3').val();
    $('.valRad1').text(a3);
}


function valWindow1() {
    var b1 = $('#question3_1').val();
    $('.valRad3').text(b1);
}

function valWindow2() {
    var b2 = $('#question3_2').val();
    $('.valRad3').text(b2);
}

function valWindow3() {
    var b3 = $('#question3_3').val();
    $('.valRad3').text(b3);
}

$(document).ready(function() {

    $('.window-next1').click(function() {
        $('.window1').fadeOut(400, function() {
            $('.window2').fadeIn(400);

        });
        return false;
    });

    $('.window-next2').click(function() {
        $('.window2').fadeOut(400, function() {
            $('.window3').fadeIn(400);

        });
        return false;
    });

    $('.window-next3').click(function() {
        $('.window3').fadeOut(400, function() {
            $('.window4').fadeIn(400);

        });
        return false;
    });
    $('.window-next4').click(function() {
        $('.window4').fadeOut(400, function() {
            $('.window5').fadeIn(400);

        });
        return false;
    });

    $('#config').click(function() {
        $('.window1').fadeIn(400, function() {
            $('.window5').css('display', 'none');
            $('.window4').css('display', 'none');
            $('.window3').css('display', 'none');
            $('.window2').css('display', 'none');
        });
        return false;
    });


});