$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children('span').hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($("#carouselButton").children('span').hasClass("fa-play")) {
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $("#login-form").click(function () {
        $('#login-modal').modal('toggle');
    });
    $("#reserve-table-button").click(function () {
        $("#reserve-modal").modal("toggle");
    });
});

  $(window).scroll(function(){
    $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 250);
  });
  
  