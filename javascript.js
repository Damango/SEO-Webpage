window.onload = function () {

    var numbers = $(".numberHolders");
    numbers.waypoint(function () {
        numbers.addClass("slideUp");
    }, {
        offset: "70%"
    });

    var about = $(".aboutUsContainer");
    about.waypoint(function () {
        about.addClass("slideUp");
    }, {
        offset: "70%"
    });

    var aboutPic = $(".aboutPicture");
    aboutPic.waypoint(function () {
        aboutPic.addClass("slideUp2");
    }, {
        offset: "70%"
    });


    var desInt = $(".barPercent1").html();
    var marketInt = $(".barPercent2").html();
    var devInt = $(".barPercent3").html();
    var ueInt = $(".barPercent4").html();


    var barFill = $(".bar-fill1");
    barFill.waypoint(function () {
        $(".bar-fill1").css("width", desInt);
    }, {
        offset: "70%"
    });

    var barFill2 = $(".bar-fill2");
    barFill2.waypoint(function () {
        $(".bar-fill2").css("width", marketInt);
    }, {
        offset: "70%"
    });

    var barFill3 = $(".bar-fill3");
    barFill3.waypoint(function () {
        $(".bar-fill3").css("width", devInt);
    }, {
        offset: "70%"
    });

    var barFill4 = $(".bar-fill4");
    barFill4.waypoint(function () {
        $(".bar-fill4").css("width", ueInt);
    }, {
        offset: "70%"
    });








};
