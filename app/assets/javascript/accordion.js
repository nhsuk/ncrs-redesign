$(".govuk-accordion__open-all").hide();
$(document).ready(accordionFunction);
$(window).resize(accordionFunction);

function accordionFunction() {
  var elementPosition = $(".accordion-container").offset();

  if (elementPosition && $(window).width() > 769) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > elementPosition.top) {
        $(".accordion-container").css("position", "fixed").css("top", "10px");
        $(".page-content").css("float", "right");
      } else {
        $(".accordion-container").css("position", "").css("top", "");
        $(".page-content").css("float", "");
      }
    });
  } else {
    $(window).scroll(function () {
      $(".accordion-container").css("position", "").css("top", "");
      $(".page-content").css("float", "");
    });
  }
}
