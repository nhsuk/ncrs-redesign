jQuery(document).ready(function($) {

  var visible = false;
  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $(".scrollToTop").fadeIn();
    } else {
        $(".scrollToTop").fadeOut();
    }
    if ($(window).scrollTop() + $(window).height() < $(document).height() - $("#nhsuk-footer").height()) {
      $('.scrollToTop').css("position", "fixed"); //resetting it
      $('.scrollToTop').css("bottom", "0"); //resetting it
      $('.scrollToTop').css("margin", "0 20px 20px 0");
    }
    if ($(window).scrollTop() + $(window).height() > $(document).height() - $("#nhsuk-footer").height()) {
      $('.scrollToTop').css("position", "relative"); // make it related
      $('.scrollToTop').css("bottom", "-32px"); // 60 px, height of #toTop
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
    });

});
