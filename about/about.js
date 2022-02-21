
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