$(document).ready(function() {

    $("#order-sample").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/mail-sample.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $("#order-sample").trigger("reset");

            function show() {

                $('.thanks-block.thanks-block-sample').addClass('thank-active');
            }
            setTimeout(show, 450);

        });
        return false;
    });

});

$(document).ready(function() {

    $("#map-order-sample").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/map-order-sample.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $("#map-order-sample").trigger("reset");

            function show() {

                $('.thanks-block.thanks-block-sample').addClass('thank-active');
            }
            setTimeout(show, 450);

        });
        return false;
    });

});

$(document).ready(function() {

    $(".order-call").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/order-call.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $(".order-call").trigger("reset");

            function show() {

                $('.thanks-block.thanks-block-call').addClass('thank-active');
            }
            setTimeout(show, 450);

        });
        return false;
    });

});


$(document).ready(function() {

    $("#free-consult").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/free-consult.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $("#free-consult").trigger("reset");

            function show() {

                $('.thanks-block.thanks-block-call').addClass('thank-active');
            }
            setTimeout(show, 450);

        });
        return false;
    });

});


$('.md-close-thanks').click(function() {
    $('.thanks-block').removeClass('thank-active');
    return false;
});

$('.black-close-thanks').click(function() {
    $('.thanks-block').removeClass('thank-active');
    return false;
});

$('.black-close-form').click(function() {
    $('.md-modal').removeClass('md-show');
    return false;

});



$(document).ready(function() {

    $("#form-constructor").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail/form-constructor.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $("#form-constructor").trigger("reset");

            function show() {

                $('.thanks-block.thanks-block-call').addClass('thank-active');
            }
            setTimeout(show, 450);

        });
        return false;
    });

});