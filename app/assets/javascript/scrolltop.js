jQuery(document).ready(function($) {

  var visible = false;
  var topofDiv = $(".nhsuk-header").offset().top; //gets offset of header
  var height = $(".patient-banner").outerHeight() + $(".nhsuk-header").outerHeight(); //gets height of header


  //Check to see if the window is top if not then display button



  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }

    if ($(window).scrollTop() + $(window).height() < $(document).height() - $("#nhsuk-footer").height() - 92) {
      $('.scrollToTop').css("position", "fixed"); //resetting it
      $('.scrollToTop').css("bottom", "20px"); //resetting it
      $('.scrollToTop').css("right", "20px"); //resetting it
    }

    if ($(window).scrollTop() + $(window).height() > $(document).height() - $("#nhsuk-footer").height() - $(".ra-footer-container").height() - 92) {
      $('.scrollToTop').css("position", "relative");
      $('.scrollToTop').css("bottom", "62px");
    }

    // only run this if statement if not in refactoring proto on mobile as this doesn't need the name-dob floater


    if (window.location.href.indexOf("refactoring") > -1) {
      if ($(window).width() > 768) {
        if ($(window).scrollTop() > (topofDiv + height)) {
          $(".name-dob-floater").fadeIn();
          $('.adjustments-floater').fadeIn();
        } else {
          $(".name-dob-floater").fadeOut();
          $('.adjustments-floater').fadeOut();

        }
      }
    } else {

      // removing the name dob floater on mobile as the refactoring testing disproved it's necessity //

      if ($(window).width() > 768) {
        if ($(window).scrollTop() > (topofDiv + height)) {
          $(".name-dob-floater").fadeIn();
          $('.adjustments-floater').fadeIn();
        } else {
          $(".name-dob-floater").fadeOut();
          $('.adjustments-floater').fadeOut();
        }
      }
    }


  });

  var a = $(".accordion-inner");
  var apos = a.position();
  if (apos) {
    $(window).scroll(function() {
      var windowpos = $(window).scrollTop();
      if ((windowpos + 20) >= apos.top) {
        a.addClass("inner-wrapper-sticky");
        a.addClass("accordion-scroll");
      } else {
        a.removeClass("inner-wrapper-sticky");
        a.removeClass("accordion-scroll");
      }
    });
  }



  //Click event to scroll to top

  $(".scrollToTop").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });

  // Mobile navigation

  var IDs = [];
  var headers = [];
  //Push each section ID (to use as a link) and each section title so we can populate select box in mobile nav
  $("section").each(function() {
    IDs.push("#" + this.id);
  });
  $("section").each(function() {
    headers.push(this.title);
  });
  //Merge two arrays into one object
  var result = headers.reduce(function(result, field, index) {
    result[IDs[index]] = field;
    return result;
  }, {});
  //Assign each object key and value to the select box
  $.each(result, function(key, value) {
    $('#mobile-nav-select')
      .append($('<option>', {
          value: key
        })
        .text(value));
  });
  $.each(result, function(key, value) {
    $('.navigation-ul')
      .append($('<li><a class="scra-accordion__link" href=' + key + '>' + value + '</a></li>'));
  });


  var s = $("#mobile-nav");
  var pos = s.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top) {
      s.addClass("nav-stick");
    } else {
      s.removeClass("nav-stick");
    }
  });

  $('#mobile-nav-select').change(function() {
    var targetPosition = $($(this).val()).offset().top - 100;
    $('html,body').animate({
      scrollTop: targetPosition
    }, 'slow');
  });


  $('.currently-viewing-section').text($("section").first().attr('title'));


  $(document).scroll(function() {
    var cutoff = $(window).scrollTop() + 200;

    if (window.location.href.indexOf("refactoring") > -1) {
      $('section').each(function() {
        if ($(this).offset().top + $(this).height() > cutoff) {
          $('#mobile-nav-select').val("#" + $(this).attr('id'));
          $('.currently-viewing-section').text($(this).attr('title'));
          return false; // stops the iteration after the first one on screen
        }
      });
    }
  });

});
