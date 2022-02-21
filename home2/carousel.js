(function ($, window, document) {
    $(document).ready(function () {
      var $slider_frame = $(`.slider-wrapper`);
      $slider_frame.owlCarousel({
        loop: true,
        items: 1,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>",
        ],
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
      });
    });
  })(jQuery, window, document);
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
$(document).ready(function () {
  function showMain() {
    $(`.main-hidden`).hide()
      document.querySelectorAll(`#nav-click a`).forEach((row) =>
        row.addEventListener(`mouseover`, (e) => {
          let subject=$(e.target).next()
          subject.hide()
              $(subject).slideDown("fast");
        })
      );
    }
    showMain();
})
$(document).ready(function () {
  function hideMain() {
      document.querySelectorAll(`#nav-click a`).forEach((row) =>
        row.addEventListener(`mouseout`, (e) => {
          let subject=$(e.target).next()
              $(subject).slideUp("fast");
        })
      );
    }
    hideMain();
})