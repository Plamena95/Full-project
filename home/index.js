//mobile menu
var boxWidth = ($("body").width())/2;
$("#show").hide();
$(".close-button-section i").click(function () {
  $("#show").show().animate({
    width: 0,
  });
});
$(".nav-bar i").click(function () {
  $("#show").show().animate({
    width: boxWidth,
  });
});
$(document).ready(function () {
  $(`.small-hidden`).hide();
  function show() {
      document.querySelectorAll(`#smallMenuContent i`).forEach((row) =>
        row.addEventListener(`click`, (e) => {
            if($(e.target).parent().find(`.small-hidden`).css("display")=="none"){
              $(e.target).parent().find(`.small-hidden`).slideToggle("fast");
              console.log($(e.target))
              $(e.target).css("transform","rotateX(180deg)")
            }else{
              $(e.target).parent().find(`.small-hidden`).slideToggle("fast");
              $(e.target).css("transform","rotateX(0deg)")
            }
        })
      );
    }
    show();
})

//animate  
 $(window).scroll(function () {
    $(".scroll-down").each(function () {
      var objectEnd = $(this).offset().top + $(this).outerHeight();
      var windowEnd = $(window).scrollTop() + $(window).height();
      if (windowEnd > objectEnd) {
        $(this).addClass("animate__fadeInUp");
      }
    });
  });
  $(window).scroll(function () {
    $(".scroll-up").each(function () {
      var objectEnd = $(this).offset().top + $(this).outerHeight();
      var windowEnd = $(window).scrollTop() + $(window).height();
      if (windowEnd > objectEnd) {
        $(this).addClass("animate__fadeInDown");
      }
    });
  });
  $(window).scroll(function () {
    $(".bounce").each(function () {
      var objectEnd = $(this).offset().top + $(this).outerHeight();
      var windowEnd = $(window).scrollTop() + $(window).height();
      if (windowEnd > objectEnd) {
        $(this).addClass("animate__bounceIn");
      }
    });
  });
  $(window).scroll(function () {
    $(".left-bounce").each(function () {
      var objectEnd = $(this).offset().top + $(this).outerHeight();
      var windowEnd = $(window).scrollTop() + $(window).height();
      if (windowEnd > objectEnd) {
        $(this).addClass("animate__bounceInLeft");
      }
    });
  });
  $(window).scroll(function () {
    $(".right-bounce").each(function () {
      var objectEnd = $(this).offset().top + $(this).outerHeight();
      var windowEnd = $(window).scrollTop() + $(window).height();
      if (windowEnd > objectEnd) {
        $(this).addClass("animate__bounceInRight");
      }
    });
  });
