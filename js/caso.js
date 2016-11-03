

$(document).ready(function () {



    $(".mainMenu").hide();
    $(".caption").on('click', function () {

        if ($(".mainMenu").is(':hidden')) {

            $(".mainMenu").slideDown(200);

        } else {

            $(".mainMenu").slideUp(200);

        }

    });



    $("#lockerBt").on('click', function () {

        $(".overlayDetails").fadeOut(100, function () {
            $(".overlayDetails").css("color", "white");
            $(".maskBlock").animate({ width: "100%" }, 300, 'easeOutQuint', function () {

                $(".overlayDetails").fadeIn(100);


            });

        });

    });


    $("#unlockerBt").on('click', function () {
        $(".overlayDetails").fadeOut(70, function () {
            $(".overlayDetails").css("color", "black");
            $(".maskBlock").animate({ width: "28%" }, 300, 'easeOutQuint');

            $(".overlayDetails").fadeIn(100);

        });


    });




});


