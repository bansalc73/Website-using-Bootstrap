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
});


$(window).on("load resize scroll", function() {
    $(".bg-static").each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;
      console.log(windowTop);
      console.log(elementTop);
        $(this)
          .find(".bg-move")
          .css({ left: leftPosition });
        $(this)
          .find(".bg-move1")
          .css({ right: leftPosition });
    });
  });

  $(window).scroll(function(){
    $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 250);
  });
  
  