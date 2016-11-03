
$(document).ready(function () {


    ////////////////////////////////////////////////////




    $(".lockerBt").on('click', function () {






        $(".overlayDetails").fadeOut(100, function () {
            $(".overlayDetails").css("color", "white");
            $(".maskBlock").animate({ width: "100%" }, 300, 'easeOutQuint', function () {

                $(".overlayDetails").fadeIn(100);
                $("#unlockerBt").fadeIn(100);

            });

        });


        $(".overlayControlsContainer").fadeOut(100, function () {


            $(".overlayControlsContainer").addClass("dark");
            $(".controlsCaption").addClass("light");
            $(".controlsArea").addClass("dark");
            $(".minusBt").addClass("hiddenBt");
            $(".plusBt").addClass("hiddenBt");
            $(".valueBox").addClass("finalValue");


            $(".maskBlock").animate({ width: "100%" }, 300, 'easeOutQuint', function () {

                $(".overlayControlsContainer").fadeIn(100);
                $("#unlockerBt").fadeIn(100);

            });

        });

        $(".bottomCaption").text("POR FAVOR INTRODUZCA MONEDAS PARA PROCEDER CON EL PAGO")
        $(".bottomCaption").fadeIn(100);






    });


    $("#unlockerBt").on('click', function () {
        $(".overlayDetails").fadeOut(70, function () {
            $(".overlayDetails").css("color", "black");
            $(".maskBlock").animate({ width: "28%" }, 300, 'easeOutQuint');

            $(".overlayDetails").fadeIn(100);
            $("#unlockerBt").fadeOut(100);
        });





        $(".overlayControlsContainer").fadeOut(70, function () {

            $(".overlayControlsContainer").removeClass("dark");
            $(".controlsCaption").removeClass("light");
            $(".controlsArea").removeClass("dark");
            $(".minusBt").removeClass("hiddenBt");
            $(".plusBt").removeClass("hiddenBt");
            $(".valueBox").removeClass("finalValue");



            $(".maskBlock").animate({ width: "28%" }, 300, 'easeOutQuint');

            $(".overlayControlsContainer").fadeIn(100);
            $("#unlockerBt").fadeOut(100);
        });




        $(".bottomCaption").fadeOut(100);
        $(".bottomCaption").text("");
    });



});


