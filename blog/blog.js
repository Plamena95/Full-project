
$(document).ready(function () {
    $(`.hidden`).hide();
    function show() {
        document.querySelectorAll(`#showContent`).forEach((row) =>
          row.addEventListener(`click`, (e) => {
            let color="#2E8995"
              if($(e.target).parent().parent().find(`.hidden`).css("display")=="none"){
                $(e.target).parent().parent().find(`.hidden`).slideToggle("fast");
                $(e.target).parent().find(`.fas`).css("background",color)
                $(e.target).parent().find(`.fas`).css("color","white")
                $(e.target).parent().find(`.fas`).css("transform","rotateX(180deg)")
              }else{
                $(e.target).parent().parent().find(`.hidden`).slideToggle("fast")
                $(e.target).parent().find(`.fas`).css("background","white")
                $(e.target).parent().find(`.fas`).css("color",color)
                $(e.target).parent().find(`.fas`).css("transform","rotateX(0deg)")
              }
          })
        );
      }
      show();
})

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
$(document).ready(function () {
  function showMain() {
    $(`.main-hidden`).hide()
      document.querySelectorAll(`#header-nav li a`).forEach((row) =>
        row.addEventListener(`mouseover`, (e) => {
          let subject=$(e.target).next()
          subject.hide()
          console.log(subject)
    
              $(subject).slideDown("fast");
        })
      );
    }
    showMain();
})
$(document).ready(function () {
  function hideMain() {
      document.querySelectorAll(`#header-nav li a`).forEach((row) =>
        row.addEventListener(`mouseout`, (e) => {
          let subject=$(e.target).next()
          console.log(subject)
              $(subject).slideUp("fast");
        })
      );
    }
    hideMain();
})


$(document).ready(function () {
    function multiple() {
        document.querySelectorAll(`.page-navigation li`).forEach((row) =>
          row.addEventListener(`click`, (e) => {
                $(e.target).addClass(`focused`)
                $(e.target).parent().next().removeClass(`.focused`)
               $(e.target).parent().prev().removeClass(`focused`)
            
          })
        );
      }
      multiple();
  })